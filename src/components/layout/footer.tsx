import { Container } from "@/shared/ui"
import React from "react"
import { SocialLinks } from "../social-links"

export const Footer = () => {
	return (
		<footer className="border-0 border-t  border-t-foreground/10 bg-gray/5 backdrop-blur-lg border-white/20 shadow-xl">
			<Container className="flex justify-between  h-20 items-center">
				<p className="text-center text-sm text-foreground/50">
					© {new Date().getFullYear()} Aybek Amanbaev web site
				</p>
				<SocialLinks />
			</Container>
		</footer>
	)
}
