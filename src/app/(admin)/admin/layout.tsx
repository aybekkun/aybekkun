import { AppSidebar } from "@/components/app-sidebar"
import { Container, SidebarProvider, SidebarTrigger } from "@/shared/ui"
import type { Metadata } from "next"

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
		<SidebarProvider>
			<AppSidebar />
			<main className="py-2 w-full">
				<SidebarTrigger />
				<Container className="w-full">{children}</Container>
			</main>
		</SidebarProvider>
	)
}
