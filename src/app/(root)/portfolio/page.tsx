import { PortfolioList } from "@/components/portfolio-list"
import { prisma } from "@/prisma"
import { SectionTitle } from "@/shared/ui"

const PorfolioPage = async () => {
	const [data, count] = await prisma.$transaction([
		prisma.portfolio.findMany({
			orderBy: {
				date: "desc",
			},
		}),
		prisma.portfolio.count(),
	])

	return (
		<section className="py-16 md:py-20 section-bg">
			<SectionTitle className="text-left" title="Список работ" />
			<PortfolioList portfolios={data} />

		</section>
	)
}

export default PorfolioPage
