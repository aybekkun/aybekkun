export function getPaginationParams(searchParams: URLSearchParams) {
	// 1. Получаем 'page' и 'limit', устанавливаем значения по умолчанию
	const pageStr = searchParams.get("page") || "1"
	const limitStr = searchParams.get("limit") // 'limit' опционален, по умолчанию null

	// 2. Парсим и валидируем 'page'
	// Убеждаемся, что 'page' - это число и оно не меньше 1
	let page = parseInt(pageStr, 10)
	if (isNaN(page) || page < 1) {
		page = 1
	}

	// 3. Парсим и валидируем 'limit'
	let limit: number | null = null
	if (limitStr) {
		const parsedLimit = parseInt(limitStr, 10)
		// 'limit' должен быть валидным числом больше 0
		if (!isNaN(parsedLimit) && parsedLimit > 0) {
			limit = parsedLimit
		}
	}

	// 4. Вычисляем 'skip' только если 'limit' установлен
	const skip = limit ? (page - 1) * limit : 0

	return { page, limit: limit ?? undefined, skip }
}
