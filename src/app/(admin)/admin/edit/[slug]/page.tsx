import PortfolioForm from "@/components/portfolio-form"

const EditPage = async (context: { params: Promise<{ slug: string }> }) => {
	const id = (await context.params).slug
	return <PortfolioForm id={Number(id)} />
}

export default EditPage
