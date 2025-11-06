"use client"

import { siteConfig } from "@/shared/configs/site.config"
import {
	AnimatedThemeToggler,
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared/ui"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Sheet onOpenChange={setIsOpen} open={isOpen}>
			<SheetTrigger asChild>
				<Button onClick={() => setIsOpen(true)} className="block lg:hidden">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader className="">
					<SheetTitle>Меню</SheetTitle>
					<SheetDescription className="hidden">Menu mobile</SheetDescription>
				</SheetHeader>
				<nav className="flex flex-col items-center gap-4">
					<ul className="list-none w-full space-y-4 text-center">
						{siteConfig.nav.map((item) => (
							<li key={item.href}>
								<Link
									onClick={() => setIsOpen(false)}
									className="font-medium block w-full uppercase text-sm p-4 hover:bg-muted rounded-md"
									href={item.href}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>

					<div className="flex gap-4">
						<AnimatedThemeToggler />

						<Button asChild>
							<a href="tel:+998913809626">
								<Phone /> +998 91 380-96-26
							</a>
						</Button>
					</div>
				</nav>
				<SheetFooter>
					<div className="flex gap-4 flex-wrap text-center">
						{Object.entries(siteConfig.links).map(([key, value]) => (
							<a
								className="uppercase flex-1"
								key={key}
								href={value}
								target="_blank"
								rel="noopener noreferrer"
							>
								{key}
							</a>
						))}
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
