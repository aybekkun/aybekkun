import { NextRequest, NextResponse } from "next/server"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "@/prisma"
import { z } from "zod"

// ✅ Схема валидации входа с помощью Zod
const LoginSchema = z.object({
	email: z.email("Неверный формат email"),
	password: z.string().min(1, "Пароль обязателен"),
})

// ⚙️ Настройки JWT
const JWT_SECRET = process.env.JWT_SECRET as string
const JWT_EXPIRES_IN = "7d"

// ✅ Обработчик POST-запроса (вход пользователя)
export async function POST(req: NextRequest) {
	try {
		const body = await req.json()
		const data = LoginSchema.parse(body)

		// 🔍 Проверяем, существует ли пользователь
		const user = await prisma.user.findUnique({
			where: { email: data.email },
		})

		if (!user) {
			return NextResponse.json(
				{ error: "Неверный email или пароль" },
				{ status: 401 }
			)
		}

		// 🔐 Проверяем корректность пароля
		const isPasswordValid = await compare(data.password, user.password)
		if (!isPasswordValid) {
			return NextResponse.json(
				{ error: "Неверный email или пароль" },
				{ status: 401 }
			)
		}

		// 🪪 Генерация JWT-токена
		const token = sign(
			{
				userId: user.id,
				email: user.email,
				role: user.role,
			},
			JWT_SECRET,
			{ expiresIn: JWT_EXPIRES_IN }
		)

		// 🍪 Устанавливаем безопасный cookie
		const response = NextResponse.json(
			{
				message: "Успешный вход",
				user: {
					id: user.id,
					email: user.email,
					name: user.name,
					role: user.role,
				},
				token,
			},
			{ status: 200 }
		)

		response.cookies.set("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 7, // 7 дней
			path: "/",
		})

		return response
	} catch (error) {
		// ⚠️ Ошибки валидации
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					error: "Ошибка валидации данных",
					details: error.issues.map((issue) => ({
						field: issue.path.join("."),
						message: issue.message,
					})),
				},
				{ status: 400 }
			)
		}

		// 💥 Неизвестная ошибка
		console.error("Login error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}
