import { prisma } from "@/prisma"
import { verifyAuth } from "@/shared/lib/auth"
import { getPaginationParams } from "@/shared/lib/params"
import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import {
	ALLOWED_TYPES,
	MAX_FILE_SIZE,
	UPLOAD_DIR,
} from "@/shared/configs/file.config"
import path from "path"

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)

		const { limit, skip } = getPaginationParams(searchParams)

		const [portfolios, count] = await prisma.$transaction([
			prisma.portfolio.findMany({
				skip,
				take: limit,
				orderBy: {
					date: "desc",
				},
			}),
			prisma.portfolio.count(),
		])
		return NextResponse.json({
			data: portfolios,
			count,
		})
	} catch (error) {
		console.error("Get portfolio error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}

export async function POST(req: NextRequest) {
	try {
		const auth = await verifyAuth(req)
		console.log(auth)
		if (!auth.authorized /* || auth.user?.role !== "ADMIN" */) {
			return NextResponse.json(
				{ error: "Доступ запрещён. Требуются права администратора." },
				{ status: 403 }
			)
		}
		const formData = await req.formData()
		const title = formData.get("title") as string
		const description = formData.get("description") as string
		const client = formData.get("client") as string
		const date = formData.get("date") as string
		const content = formData.get("content") as string
		const link = formData.get("link") as string | null
		const technologiesStr = formData.get("technologies") as string
		const category = formData.get("category") as string
		if (!title || !description || !client || !date || !content) {
			return NextResponse.json(
				{ error: "Все обязательные поля должны быть заполнены." },
				{ status: 400 }
			)
		}
		const technologies = technologiesStr ? JSON.parse(technologiesStr) : []
		if (!Array.isArray(technologies) || technologies.length === 0) {
			return NextResponse.json(
				{ error: "Укажите хотя бы одну технологию." },
				{ status: 400 }
			)
		}

		// Проверка и создание директории uploads
		if (!existsSync(UPLOAD_DIR)) {
			await mkdir(UPLOAD_DIR, { recursive: true })
		}

		// Загрузка изображений
		const files = formData.getAll("images") as File[]
		if (!files || files.length === 0) {
			return NextResponse.json(
				{ error: "Добавьте хотя бы одно изображение." },
				{ status: 400 }
			)
		}

		const uploadedImages: string[] = []
		const uploadErrors: string[] = []

		for (const file of files) {
			if (!ALLOWED_TYPES.includes(file.type)) {
				uploadErrors.push(`${file.name}: неподдерживаемый тип файла`)
				continue
			}

			if (file.size > MAX_FILE_SIZE) {
				uploadErrors.push(`${file.name}: превышает 5MB`)
				continue
			}

			try {
				const bytes = await file.arrayBuffer()
				const buffer = Buffer.from(bytes)
				const ext = path.extname(file.name)
				const filename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`
				const filepath = path.join(UPLOAD_DIR, filename)

				await writeFile(filepath, buffer)
				uploadedImages.push(`/uploads/${filename}`)
			} catch (err) {
				console.error(`Ошибка при загрузке ${file.name}:`, err)
				uploadErrors.push(`${file.name}: ошибка при сохранении`)
			}
		}

		if (uploadedImages.length === 0) {
			return NextResponse.json(
				{ error: "Не удалось загрузить изображения.", details: uploadErrors },
				{ status: 400 }
			)
		}
		const portfolio = await prisma.portfolio.create({
			data: {
				title,
				description,
				client,
				date: new Date(date),
				content,
				link,
				technologies,
				images: uploadedImages,
				category: category,
			},
		})
		return NextResponse.json(
			{
				message: "Портфолио успешно создано.",
				data: portfolio,
				uploadErrors: uploadErrors.length > 0 ? uploadErrors : undefined,
			},
			{ status: 201 }
		)
	} catch (error) {
		console.error("Create portfolio error:", error)
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		)
	}
}
