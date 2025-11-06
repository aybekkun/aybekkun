"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardFooter } from "@/shared/ui/card"

export function LoginForm() {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		setLoading(true)

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			})

			const data = await res.json()

			if (!res.ok) {
				setError(data?.error || "Ошибка при входе")
				setLoading(false)
				return
			}

			// Успешный вход — редирект на главную
			router.push("/")
		} catch (err) {
			console.error(err)
			setError("Сетевая ошибка")
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
			<Card className="w-full max-w-md">
				<CardContent>
					<h1 className="text-2xl font-semibold mb-4">Вход</h1>

					<form onSubmit={onSubmit} className="space-y-4">
						{/* inputs без label — только placeholder'ы */}
						<Input
							placeholder="Email"
							value={email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
							type="email"
							required
						/>

						<Input
							placeholder="Пароль"
							value={password}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
							type="password"
							required
						/>

						{error && <div className="text-sm text-red-600">{error}</div>}

						<CardFooter className="p-0">
							<Button type="submit" className="w-full" disabled={loading}>
								{loading ? "Вхожу..." : "Войти"}
							</Button>
						</CardFooter>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
