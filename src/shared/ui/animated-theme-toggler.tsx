"use client"

import { cn } from "@/shared/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

interface AnimatedThemeTogglerProps
	extends React.ComponentPropsWithoutRef<"button"> {
	duration?: number
}

export const AnimatedThemeToggler = ({
	className,
	duration = 400,
	...props
}: AnimatedThemeTogglerProps) => {
	const { setTheme, resolvedTheme } = useTheme()
	const buttonRef = useRef<HTMLButtonElement>(null)
	const [mounted, setMounted] = useState(false)

	// ждём, пока next-themes инициализируется на клиенте
	useEffect(() => setMounted(true), [])

	const toggleTheme = useCallback(() => {
		if (!mounted || !buttonRef.current) return

		const currentTheme = resolvedTheme === "dark" ? "dark" : "light"
		const nextTheme = currentTheme === "dark" ? "light" : "dark"

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect()
		const x = left + width / 2
		const y = top + height / 2
		const maxRadius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y)
		)

		if (!document.startViewTransition) {
			setTheme(nextTheme)
			return
		}

		document
			.startViewTransition(() => {
				flushSync(() => setTheme(nextTheme))
			})
			.ready.then(() => {
				document.documentElement.animate(
					{
						clipPath: [
							`circle(0px at ${x}px ${y}px)`,
							`circle(${maxRadius}px at ${x}px ${y}px)`,
						],
					},
					{
						duration,
						easing: "ease-in-out",
						pseudoElement: "::view-transition-new(root)",
					}
				)
			})
	}, [mounted, resolvedTheme, duration, setTheme])

	if (!mounted)
		return (
			<button
				className={cn("opacity-0 pointer-events-none", className)}
				aria-hidden="true"
			>
				<Moon />
			</button>
		)

	const isDark = resolvedTheme === "dark"

	return (
		<button
			ref={buttonRef}
			onClick={toggleTheme}
			className={cn(
				"relative flex items-center justify-center transition-colors",
				className
			)}
			{...props}
		>
			{isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
			<span className="sr-only">Toggle theme</span>
		</button>
	)
}
