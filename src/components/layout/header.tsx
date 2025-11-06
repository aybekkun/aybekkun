"use client"

import { siteConfig } from "@/shared/configs/site.config"
import { AnimatedThemeToggler, Button, Container } from "@/shared/ui"
import { Phone, Triangle } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { MobileMenu } from "./mobile-menu"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	// Блокировка скролла при открытом меню
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset"
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [isOpen])

	// Закрытие меню при клике вне его области
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside)
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [isOpen])

	return (
		<header className="sticky top-0 z-20 border-b border-b-foreground/10 bg-gray/5 backdrop-blur-lg border-0 border-white/20 shadow-xl">
			<Container className="h-20 flex items-center justify-between">
				{/* Логотип */}
				<Link
					href="/"
					className="sm:text-2xl md:text-3xl flex items-center gap-1.5 text-nowrap font-bold"
				>
					<Triangle className="sm:size-6 md:size-8 " />
					Frontend Dev.
				</Link>
				<nav className="hidden lg:flex items-center gap-4">
					<ul className="list-none flex gap-4 items-center">
						{siteConfig.nav.map((item) => (
							<li key={item.href}>
								<Link
									className="font-medium uppercase text-sm p-4 hover:bg-muted rounded-md"
									href={item.href}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
					<AnimatedThemeToggler />

					<Button asChild>
						<a href="tel:+998913809626">
							<Phone /> +998 91 380-96-26
						</a>
					</Button>
				</nav>
				<MobileMenu />
			</Container>
		</header>
	)
}

export { Header }
/* ;<NavigationMenu>
	<NavigationMenuList className="items-center">
		{siteConfig.nav.map((item) => (
			<NavigationMenuItem className="items-center flex" key={item.href}>
				<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
					<Link href={item.href}>
						<Home />
						{item.title}
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
		))}
		<NavigationMenuItem asChild>
			<Button>Резюме</Button>
		</NavigationMenuItem>
	</NavigationMenuList>
</NavigationMenu>
 */
