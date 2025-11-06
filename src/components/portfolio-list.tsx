import { IPortfolio } from "@/shared/data/portfolio.data"
import { Container } from "@/shared/ui"
import React from "react"
import { PortfolioCard } from "./portfolio-card"
type Props = {
	className?: string
	portfolios?: IPortfolio[]
}
export const PortfolioList = ({
	className,
	portfolios,
}: Props & { portfolios?: IPortfolio[] }) => {
	return (
		<Container
			className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
		>
			{portfolios?.map((project) => (
				<PortfolioCard key={project.id} {...project} />
			))}
		</Container>
	)
}
