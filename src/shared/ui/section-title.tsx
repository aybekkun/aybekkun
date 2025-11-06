import React from "react"
import { AuroraText } from "./aurora-text"
import { Container } from "./container"
import { TextAnimate } from "./text-animate"

type Props = {
	className?: string
	title?: string
	subtitle?: string
}

export const SectionTitle = ({
	className = "",
	title = "",
	subtitle = "",
}: Props) => {
	return (
		<Container className={`${className} mb-10 text-center`}>
			<h2 className="title md:text-5xl text-3xl mb-5">
				<AuroraText>{title}</AuroraText>
			</h2>
			<TextAnimate as={"p"} once className="text-muted-foreground max-w-xl mx-auto mb-10">{subtitle}</TextAnimate>
		</Container>
	)
}
