"use client"

import { useState } from "react"
import { Button } from "@/shared/ui"
import { useRouter } from "next/navigation"

interface PortfolioDeleteButtonProps {
	id: number
}

export const PortfolioDeleteButton = ({ id }: PortfolioDeleteButtonProps) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleDelete = async () => {
		if (!confirm("Вы действительно хотите удалить это портфолио?")) return

		try {
			setLoading(true)
			const res = await fetch(`/api/portfolio/${id}`, {
				method: "DELETE",
			})

			if (!res.ok) {
				const err = await res.json().catch(() => ({}))
				throw new Error(err?.error || "Ошибка при удалении")
			}

			// Успех — перезагрузим страницу/маршрут
			alert("Портфолио удалено ✅")
			router.refresh() // 🔁 обновляем текущий маршрут (SSR заново подтянет данные)
		} catch (err) {
			console.error(err)
			alert("Не удалось удалить портфолио")
		} finally {
			setLoading(false)
		}
	}

	return (
		<Button variant="destructive" onClick={handleDelete} disabled={loading}>
			{loading ? "Удаляю..." : "Удалить"}
		</Button>
	)
}
