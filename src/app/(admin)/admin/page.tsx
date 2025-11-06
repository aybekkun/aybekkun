import { PortfolioCard } from "@/components/portfolio-card"
import { PortfolioDeleteButton } from "@/components/portfolio-delete"
import { prisma } from "@/prisma"
import { projects } from "@/shared/data/portfolio.data"
import { Button } from "@/shared/ui"
import Link from "next/link"
import { Suspense } from "react"

const MainPage = async () => {
	const projects = await prisma.portfolio.findMany({
		orderBy: {
			date: "desc",
		},
	})

	return (
		<>
			<Button className="mb-10" asChild>
				<Link href={"/admin/add"}>Добавить</Link>
			</Button>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{projects.map((item) => (
						<PortfolioCard
							key={item.id}
							{...item}
							editButton={
								<Button asChild>
									<Link href={`/admin/edit/${item.id}`}>Редактировать</Link>
								</Button>
							}
							deleteButton={<PortfolioDeleteButton id={item.id} />}
						/>
					))}
				</div>
			</Suspense>
		</>
	)
}

export default MainPage
