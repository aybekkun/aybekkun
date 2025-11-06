export type IPortfolio = {
	id: number
	title: string
	description: string
	client: string
	date: Date
	technologies: string[]
	images: string[]
	content: string
	category: string
}

export const projects: IPortfolio[] = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Web Development",
		description:
			"A responsive e-commerce platform built with Next.js and Stripe integration.",
		client: "Shopify Clone Project",
		date: new Date("2024-02-10"),
		technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
		images: [
			"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"This project is a full-featured e-commerce platform with product pages, cart functionality, and payment integration via Stripe API. The UI was crafted with Tailwind CSS and supports responsive layouts for all devices.",
	},
	{
		id: 2,
		title: "AI-Powered Analytics Dashboard",
		category: "Data Visualization",
		description:
			"Interactive dashboard with machine learning insights for business metrics.",
		client: "DataFlow Analytics",
		date: new Date("2024-05-22"),
		technologies: ["React", "D3.js", "TensorFlow.js", "Python"],
		images: [
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"This dashboard visualizes complex business data with AI-driven insights. It integrates TensorFlow.js for predictive analytics and D3.js for interactive charts.",
	},
	{
		id: 3,
		title: "Mobile Fitness App",
		category: "App Development",
		description:
			"Cross-platform fitness tracking application with social features and workout plans.",
		client: "FitLife Studio",
		date: new Date("2024-07-14"),
		technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
		images: [
			"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
			"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"The app allows users to track workouts, monitor progress, and connect with friends. It supports Firebase authentication and syncs health data with Apple HealthKit.",
	},
	{
		id: 4,
		title: "Blockchain Wallet Interface",
		category: "Web3 Development",
		description:
			"Secure and intuitive wallet application for cryptocurrency management.",
		client: "CryptoVerse Labs",
		date: new Date("2024-09-05"),
		technologies: ["Ethereum", "Web3.js", "React", "Solidity"],
		images: [
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"A decentralized wallet for Ethereum with token management and transaction history. Built with Web3.js and Solidity smart contracts.",
	},
	{
		id: 5,
		title: "Real-time Chat Application",
		category: "Full Stack Development",
		description:
			"End-to-end encrypted messaging platform with video call capabilities.",
		client: "ChatNow Startup",
		date: new Date("2024-10-18"),
		technologies: ["Socket.io", "WebRTC", "Node.js", "MongoDB"],
		images: [
			"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"The platform supports private and group chats, file sharing, and live video calls. It uses WebRTC for real-time communication and MongoDB for message storage.",
	},
	{
		id: 6,
		title: "Smart Home IoT Dashboard",
		category: "IoT Development",
		description:
			"Control system for smart home devices with automation rules and energy tracking.",
		client: "HomeTech Solutions",
		date: new Date("2024-11-01"),
		technologies: ["IoT", "MQTT", "React", "Node.js"],
		images: [
			"https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
		],
		content:
			"A central dashboard to monitor and control smart devices. Includes automation workflows, sensor data visualization, and power consumption analytics.",
	},
]
