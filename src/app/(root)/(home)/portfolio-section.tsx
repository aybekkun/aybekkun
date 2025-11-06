import { PortfolioCard } from "@/components/portfolio-card"
import { PortfolioList } from "@/components/portfolio-list"
import { prisma } from "@/prisma"
import { projects } from "@/shared/data/portfolio.data"
import { Button, Container, SectionTitle } from "@/shared/ui"
import Link from "next/link"
import { Suspense } from "react"

export const PortfolioSection = async () => {
	const data = await prisma.portfolio.findMany({
		orderBy: {
			date: "desc",
		},
		take: 6,
	})

	return (
		<section className="py-20 section-bg">
			<SectionTitle
				title="Портфолио"
				subtitle="Коллекция инновационных решений и современных приложений"
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<PortfolioList portfolios={data} />
			</Suspense>

			<Container className="py-10 text-center">
				<Button asChild>
					<Link href="/portfolio">Посмотреть все</Link>
				</Button>
			</Container>
		</section>
	)
}
