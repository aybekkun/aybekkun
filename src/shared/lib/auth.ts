// lib/auth/verifyAuth.ts
import { NextRequest } from "next/server"
import { verify, JwtPayload } from "jsonwebtoken"

/**
 * Секретный ключ JWT
 * ⚠️ Обязательно переопредели в .env файле!
 */
const JWT_SECRET =
	process.env.JWT_SECRET || "your-secret-key-change-in-production"

/**
 * Тип данных, закодированных в JWT
 */
export interface JWTPayload extends JwtPayload {
	userId: string
	email: string
	role: "USER" | "ADMIN"
}

/**
 * Результат проверки токена
 */
export interface AuthResult {
	authorized: boolean
	user?: JWTPayload
	message?: string
}

/**
 * Проверка JWT из заголовков или cookie.
 * Используется в защищённых API-роутах.
 */
export async function verifyAuth(req: NextRequest): Promise<AuthResult> {
	try {
		// 1️⃣ Проверяем наличие токена в заголовке Authorization
		let token: string | undefined
		const authHeader = req.headers.get("authorization")

		if (authHeader?.startsWith("Bearer ")) {
			token = authHeader.slice(7)
		}

		// 2️⃣ Если токен не найден — пробуем взять из cookie
		if (!token) {
			token = req.cookies.get("token")?.value
		}

		// 3️⃣ Если токен не найден вообще — доступ запрещён
		if (!token) {
			return {
				authorized: false,
				message: "Токен не предоставлен",
			}
		}

		// 4️⃣ Верифицируем токен
		const decoded = verify(token, JWT_SECRET) as JWTPayload

		return {
			authorized: true,
			user: decoded,
		}
	} catch (error) {
		// 5️⃣ Обработка возможных ошибок
		if (error instanceof Error) {
			switch (error.name) {
				case "TokenExpiredError":
					return { authorized: false, message: "Срок действия токена истёк" }
				case "JsonWebTokenError":
					return { authorized: false, message: "Недействительный токен" }
			}
		}

		console.error("JWT verification error:", error)

		return {
			authorized: false,
			message: "Ошибка аутентификации",
		}
	}
}
