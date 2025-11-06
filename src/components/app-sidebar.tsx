import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/shared/ui"
import { Home } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h2 className="text-bold text-2xl text-center">Админка</h2>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup />
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href={"/admin"}>
								<Home />
								Главаня
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
