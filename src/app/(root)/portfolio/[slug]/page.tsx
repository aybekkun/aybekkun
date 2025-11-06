import { CarouselGallery } from "@/components/carousel-gallery"
import { DeatilPortfolio } from "@/components/detail-portfolio"
import { prisma } from "@/prisma"
import { Container } from "@/shared/ui"

const PortfolioDetailPage = async (context: {
	params: Promise<{ slug: string }>
}) => {
	const id = (await context.params).slug
	const project = await prisma.portfolio.findFirst({
		where: {
			id: Number(id),
		},
	})
	return (
		<section className="pb-16 pt-2 md:pb-20 section-bg">
			<Container>
				<CarouselGallery images={project?.images || []} />
			</Container>
			{project && <DeatilPortfolio {...project} />}
		</section>
	)
}

export default PortfolioDetailPage
