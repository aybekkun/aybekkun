// src/middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = process.env.JWT_SECRET

// Опционально: явно логируем, чтобы быстрее найти проблему в dev
if (!JWT_SECRET) {
	console.error(
		"JWT_SECRET is not defined. Middleware will always redirect to /enter."
	)
}

export async function middleware(req: NextRequest) {
	try {
		const token = req.cookies.get("token")?.value

		if (!token || !JWT_SECRET) {
			return NextResponse.redirect(new URL("/enter", req.url))
		}

		// jwtVerify поддерживает Web Crypto и работает в Edge
		// Для HS256 используем TextEncoder -> Uint8Array
		const { payload } = await jwtVerify(
			token,
			new TextEncoder().encode(JWT_SECRET)
		)

		if (payload.role !== "ADMIN")
			return NextResponse.redirect(new URL("/enter", req.url))

		return NextResponse.next()
	} catch (err) {
		// Логируем ошибку для отладки
		console.error("Middleware token verification error:", err)
		return NextResponse.redirect(new URL("/enter", req.url))
	}
}

export const config = {
	matcher: ["/admin/:path*"],
}
