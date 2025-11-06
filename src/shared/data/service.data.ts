import {
	Code,
	Headphones,
	LucideIcon,
	Palette,
	Search,
	ShoppingCart,
	Smartphone,
} from "lucide-react"
export type ServiceItem = {
	icon: LucideIcon
	title: string
	description: string
	features: string[]
}
export const services: ServiceItem[] = [
	{
		icon: Palette,
		title: "UI/UX Дизайн",
		description:
			"Создаю современные интерфейсы, понятные и удобные для пользователей.",
		features: [
			"Изучение потребностей пользователей",
			"Создание макетов страниц",
			"Тестирование идей перед запуском",
			"Разработка внешнего вида сайта",
		],
	},
	{
		icon: Code,
		title: "Веб-разработка",
		description:
			"Разрабатываю сайты и веб-приложения на современных технологиях.",
		features: [
			"Фронтенд (React, Next.js)",
			"Бэкенд (Node.js, NestJS)",
			"Интеграция API",
			"Базы данных",
		],
	},
	{
		icon: Smartphone,
		title: "Мобильная разработка",
		description: "Создаю быстрые и удобные приложения для iOS и Android.",
		features: [
			"iOS и Android",
			"React Native",
			"Кроссплатформенность",
			"Оптимизация публикации",
		],
	},
	{
		icon: ShoppingCart,
		title: "E-commerce решения",
		description: "Разрабатываю интернет-магазины, которые реально продают.",
		features: [
			"Shopify / WooCommerce",
			"Оплата онлайн",
			"Управление товарами",
			"Админ-панель",
		],
	},
	{
		icon: Search,
		title: "SEO и Маркетинг",
		description: "Помогаю сайту расти в поиске и привлекать больше клиентов.",
		features: [
			"Техническое SEO",
			"Контент-стратегия",
			"Локальное SEO",
			"Аналитика",
		],
	},
	{
		icon: Headphones,
		title: "Поддержка и обслуживание",
		description: "Обеспечиваю стабильную, безопасную и быструю работу проекта.",
		features: ["Мониторинг 24/7", "Обновления", "Безопасность", "Оптимизация"],
	},
]
