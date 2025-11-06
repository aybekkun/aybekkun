export const siteConfig = {
	name: "aybekkun",
	description: "Aybek Amanbaev's portfolio",
	url: "https://aybekkun.com",
	ogImage: "https://aybekkun.com/og.jpg",
	links: {
		github: "https://github.com/aybekkun",
		instagram: "https://www.instagram.com/aybekkun/",
		linkedin: "https://www.linkedin.com/in/aybek-amanbaev-54a8b9247",
		telegram: "https://t.me/aybekkun",
	},
	author: {
		name: "Aybek Amanbaev",
		email: "idevkun@gmail.com",
	},
	nav: [
		{
			title: "Обо мне",
			href: "/about",
		},
		{
			title: "Портфолио",
			href: "/portfolio",
		},
		{
			title: "Сервисы",
			href: "/#service",
		},
	],
}

export type SiteConfig = typeof siteConfig
