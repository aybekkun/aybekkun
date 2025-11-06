import { ThemeProvider } from "@/components/layout/theme-provider"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({
	variable: "--inter-sans",
	subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
	title: "Aybek Amanbaev",
	description: "Aybek Amanbaev's portfolio",
}

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru" >
			<body
				className={`${inter.variable} antialiased bg-gray-50 dark:bg-gray-900`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
