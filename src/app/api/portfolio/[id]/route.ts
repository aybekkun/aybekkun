import { prisma } from "@/prisma"
import {
	ALLOWED_TYPES,
	MAX_FILE_SIZE,
	UPLOAD_DIR,
} from "@/shared/configs/file.config"
import { verifyAuth } from "@/shared/lib/auth"
import { existsSync } from "fs"
import { mkdir, rm, writeFile } from "fs/promises"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

async function deleteFile(filePath: string) {
	if (!filePath.startsWith("/uploads/")) return
	const fullPath = path.join(process.cwd(), "public", filePath)
	try {
		await rm(fullPath)
	} catch (err) {
		console.error(`Ошибка удаления файла ${filePath}:`, err)
		throw err
	}
}

export async function GET(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	try {
		const id = parseInt((await context.params).id)
		const portfolio = await prisma.portfolio.findUnique({
			where: { id: id },
		})

		if (!portfolio) {
			return NextResponse.json(
				{ error: "Портфолио не найдено" },
				{ status: 404 }
			)
		}

		return NextResponse.json({ data: portfolio })
	} catch (error) {
		console.error("Get portfolio by ID error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}

export async function PUT(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	try {
		const auth = await verifyAuth(req)
		if (!auth.authorized || auth.user?.role !== "ADMIN") {
			return NextResponse.json(
				{ error: "Доступ запрещён. Требуются права администратора" },
				{ status: 403 }
			)
		}

		const id = parseInt((await context.params).id)

		const existingPortfolio = await prisma.portfolio.findUnique({
			where: { id },
		})
		if (!existingPortfolio) {
			return NextResponse.json(
				{ error: "Портфолио не найдено" },
				{ status: 404 }
			)
		}

		const formData = await req.formData()

		// Извлечение опциональных данных
		const title = formData.get("title") as string | null
		const description = formData.get("description") as string | null
		const client = formData.get("client") as string | null
		const date = formData.get("date") as string | null
		const content = formData.get("content") as string | null
		const link = formData.get("link") as string | null
		const technologiesStr = formData.get("technologies") as string | null
		const technologies = technologiesStr ? JSON.parse(technologiesStr) : null
		const deleteImagesStr = formData.get("deleteImages") as string | null
		const deleteImages: string[] = deleteImagesStr
			? JSON.parse(deleteImagesStr)
			: []

		// Обработка новых изображений
		const newFiles = formData.getAll("images") as File[]
		const uploadedImages: string[] = []
		const uploadErrors: string[] = []

		if (newFiles.length > 0) {
			if (!existsSync(UPLOAD_DIR)) await mkdir(UPLOAD_DIR, { recursive: true })

			for (const file of newFiles) {
				if (!file.name || file.size === 0) continue
				if (!ALLOWED_TYPES.includes(file.type)) {
					uploadErrors.push(`${file.name}: неподдерживаемый тип`)
					continue
				}
				if (file.size > MAX_FILE_SIZE) {
					uploadErrors.push(`${file.name}: превышает 5MB`)
					continue
				}

				try {
					const buffer = Buffer.from(await file.arrayBuffer())
					const ext = path.extname(file.name)
					const filename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`
					const filepath = path.join(UPLOAD_DIR, filename)
					await writeFile(filepath, buffer)
					uploadedImages.push(`/uploads/${filename}`)
				} catch (err) {
					console.error(`Ошибка загрузки ${file.name}:`, err)
					uploadErrors.push(`${file.name}: ошибка загрузки`)
				}
			}
		}

		// Удаление указанных изображений
		if (deleteImages.length > 0) {
			await Promise.allSettled(deleteImages.map(deleteFile))
		}

		// Обновление массива изображений
		let updatedImages = existingPortfolio.images.filter(
			(img) => !deleteImages.includes(img)
		)
		if (uploadedImages.length > 0) updatedImages.push(...uploadedImages)

		// Подготовка данных для обновления
		const updateData: any = {}
		if (title) updateData.title = title
		if (description) updateData.description = description
		if (client) updateData.client = client
		if (date) updateData.date = new Date(date)
		if (content) updateData.content = content
		if (link !== null) updateData.link = link || null
		if (technologies) updateData.technologies = technologies
		if (deleteImages.length > 0 || uploadedImages.length > 0)
			updateData.images = updatedImages

		const portfolio = await prisma.portfolio.update({
			where: { id },
			data: updateData,
		})

		return NextResponse.json({
			message: "Портфолио успешно обновлено",
			data: portfolio,
		})
	} catch (error) {
		console.error("Update portfolio error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}

export async function DELETE(
	req: NextRequest,
	context: { params: Promise<{ id: string }> }
) {
	try {
		const auth = await verifyAuth(req)
		if (!auth.authorized || auth.user?.role !== "ADMIN") {
			return NextResponse.json(
				{ error: "Доступ запрещён. Требуются права администратора." },
				{ status: 403 }
			)
		}

		const id = parseInt((await context.params).id)

		const portfolio = await prisma.portfolio.findUnique({ where: { id } })
		if (!portfolio)
			return NextResponse.json(
				{ error: "Портфолио не найдено" },
				{ status: 404 }
			)
            
		const deleteResult = await prisma.portfolio.delete({ where: { id } })

		return NextResponse.json({
			message: "Портфолио успешно удалено",
			data: deleteResult,
		})
	} catch (error) {
		console.error("Delete portfolio error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}
