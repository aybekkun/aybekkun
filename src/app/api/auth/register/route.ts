import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcrypt"
import { prisma } from "@/prisma"
import { z } from "zod"

// ✅ Валидация данных регистрации с помощью Zod
const RegisterSchema = z.object({
	email: z.string().email("Неверный формат email"),
	password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
	name: z.string().optional(),
	role: z.enum(["USER", "ADMIN"]).default("USER"),
})

// ✅ Обработчик POST-запроса (регистрация пользователя)
export async function POST(req: NextRequest) {
	try {
		const body = await req.json()
        
		const data = RegisterSchema.parse(body)

		// 🔎 Проверяем, существует ли пользователь с таким email
		const existingUser = await prisma.user.findUnique({
			where: { email: data.email },
		})

		if (existingUser) {
			return NextResponse.json(
				{ error: "Пользователь с таким email уже существует" },
				{ status: 409 }
			)
		}

		// 🔐 Хешируем пароль перед сохранением
		const hashedPassword = await hash(data.password, 12)

		// 🧩 Создаём пользователя в БД
		const user = await prisma.user.create({
			data: {
				email: data.email,
				password: hashedPassword,
				name: data.name,
				role: data.role,
			},
			select: {
				id: true,
				email: true,
				name: true,
				role: true,
				createdAt: true,
			},
		})

		// ✅ Успешный ответ
		return NextResponse.json(
			{
				message: "Пользователь успешно зарегистрирован",
				user,
			},
			{ status: 201 }
		)
	} catch (error) {
		// ⚠️ Ошибки валидации Zod
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

		// 💥 Неизвестная ошибка сервера
		console.error("Registration error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}
