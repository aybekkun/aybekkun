"use client"

import { useEffect, useState } from "react"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { Button } from "@/shared/ui/button"
import { Label } from "@/shared/ui/label"
import Image from "next/image"

export default function PortfolioForm({ id }: { id?: number }) {
	const [isEdit] = useState(!!id)
	const [portfolio, setPortfolio] = useState<any>(null)
	const [deleteImages, setDeleteImages] = useState<string[]>([])
	const [technologies, setTechnologies] = useState<string[]>([])
	const [newTech, setNewTech] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)

	// Загрузка данных при редактировании
	useEffect(() => {
		if (!id) return
		;(async () => {
			const res = await fetch(`/api/portfolio/${id}`)
			if (res.ok) {
				const data = await res.json()
				setPortfolio(data.data)
				if (data.data?.technologies) setTechnologies(data.data?.technologies)
			}
		})()
	}, [id])

	// Добавление технологии
	const handleAddTech = () => {
		if (!newTech.trim()) return
		if (technologies.includes(newTech.trim())) return
		setTechnologies([...technologies, newTech.trim()])
		setNewTech("")
	}

	// Удаление технологии
	const handleRemoveTech = (tech: string) => {
		setTechnologies(technologies.filter((t) => t !== tech))
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsSubmitting(true)

		const form = e.currentTarget
		const data = new FormData(form)

		// technologies → JSON
		data.append("technologies", JSON.stringify(technologies))

		// deleteImages при редактировании
		if (isEdit && deleteImages.length > 0) {
			data.append("deleteImages", JSON.stringify(deleteImages))
		}

		try {
			const res = await fetch(
				isEdit ? `/api/portfolio/${id}` : "/api/portfolio",
				{
					method: isEdit ? "PUT" : "POST",
					body: data,
				}
			)

			if (!res.ok) throw new Error("Ошибка при сохранении")
			alert(isEdit ? "Портфолио обновлено!" : "Портфолио создано!")
			if (!isEdit) form.reset()
		} catch (err) {
			console.error(err)
			alert("Ошибка при отправке")
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="max-w-md mx-auto py-10">
			<h1 className="text-2xl font-semibold mb-6">
				{isEdit ? "Редактировать портфолио" : "Создать портфолио"}
			</h1>

			<form className="space-y-5" onSubmit={handleSubmit}>
				<div className="space-y-2">
					<Label htmlFor="title">Название</Label>
					<Input
						id="title"
						name="title"
						defaultValue={portfolio?.title || ""}
						placeholder="Название проекта"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="description">Описание</Label>
					<Textarea
						id="description"
						name="description"
						defaultValue={portfolio?.description || ""}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="client">Клиент</Label>
					<Input
						id="client"
						name="client"
						defaultValue={portfolio?.client || ""}
						placeholder="Имя клиента"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="date">Дата</Label>
					<Input
						id="date"
						name="date"
						type="date"
						defaultValue={portfolio?.date ? portfolio.date.split("T")[0] : ""}
					/>
				</div>

				{/* === DYNAMIC TECHNOLOGIES === */}
				<div className="space-y-2">
					<Label>Технологии</Label>
					<div className="flex gap-2">
						<Input
							placeholder="Добавить технологию..."
							value={newTech}
							onChange={(e) => setNewTech(e.target.value)}
						/>
						<Button type="button" onClick={handleAddTech}>
							+
						</Button>
					</div>

					{technologies.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-2">
							{technologies.map((tech) => (
								<div
									key={tech}
									className="flex items-center gap-2 border rounded-full px-3 py-1"
								>
									<span>{tech}</span>
									<button
										type="button"
										onClick={() => handleRemoveTech(tech)}
										className="text-red-500 hover:text-red-700"
									>
										×
									</button>
								</div>
							))}
						</div>
					)}
				</div>

				{/* === END TECHNOLOGIES === */}

				<div className="space-y-2">
					<Label htmlFor="content">Контент</Label>
					<Textarea
						id="content"
						name="content"
						required
						defaultValue={portfolio?.content || ""}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="category">Категория</Label>
					<Input
						id="category"
						name="category"
						required
						defaultValue={portfolio?.category || ""}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="link">Ссылка</Label>
					<Input
						id="link"
						name="link"
						defaultValue={portfolio?.link || ""}
						placeholder="https://..."
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="images">Изображения</Label>
					<Input
						required={!isEdit}
						id="images"
						name="images"
						type="file"
						multiple
						accept="image/*"
					/>
				</div>

				{/* Существующие изображения при редактировании */}
				{isEdit && portfolio?.images?.length > 0 && (
					<div className="space-y-2">
						<Label>Текущие изображения</Label>
						<div className="flex flex-wrap gap-3">
							{portfolio.images.map((img: string) => (
								<div key={img} className="relative border rounded-lg p-2">
									<Image
										src={img}
										alt="preview"
										className="w-24 h-24 object-cover rounded"
									/>
									<button
										type="button"
										onClick={() =>
											setDeleteImages((prev) =>
												prev.includes(img)
													? prev.filter((i) => i !== img)
													: [...prev, img]
											)
										}
										className={`absolute top-1 right-1 text-xs px-2 py-1 rounded ${
											deleteImages.includes(img)
												? "bg-red-500 text-white"
												: "bg-gray-200"
										}`}
									>
										{deleteImages.includes(img) ? "Удалить" : "Оставить"}
									</button>
								</div>
							))}
						</div>
					</div>
				)}

				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting
						? "Отправка..."
						: isEdit
						? "Сохранить изменения"
						: "Создать"}
				</Button>
			</form>
		</div>
	)
}
