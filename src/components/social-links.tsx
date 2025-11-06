"use client"
import { FaTelegramPlane } from "react-icons/fa"
import { siteConfig } from "@/shared/configs/site.config"
import { JSX } from "react"

const icons: Record<string, JSX.Element> = {
	github: (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.25-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.083 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.49.997.108-.776.42-1.304.763-1.604-2.665-.303-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.236-3.22-.123-.304-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 0 1 3.003-.404c1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.65.241 2.872.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.478 5.922.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.217.7.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12Z" />
		</svg>
	),
	instagram: (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.75a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
		</svg>
	),
	linkedin: (
		<svg
			className="w-5 h-5"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2V21h3V10ZM8 10h2.8v1.5h.04a3.08 3.08 0 0 1 2.76-1.6C16.6 9.9 18 11.25 18 14v7h-3v-6c0-1.44-.52-2.42-1.82-2.42-.99 0-1.58.67-1.83 1.32-.1.23-.1.56-.1.89V21H8v-11Z" />
		</svg>
	),
	telegram: <FaTelegramPlane />,
}

interface SocialLinksProps {
	className?: string
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
	return (
		<div className={`flex gap-4 items-center ${className}`}>
			{Object.entries(siteConfig.links).map(([key, value]) => (
				<a
					key={key}
					href={value}
					target="_blank"
					rel="noopener noreferrer"
					className="text-foreground/70 hover:text-foreground transition-transform hover:scale-110"
				>
					{icons[key] ?? <span className="uppercase text-sm">{key}</span>}
				</a>
			))}
		</div>
	)
}
