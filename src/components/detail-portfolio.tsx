import { Portfolio } from "@/generated/client/client"
import { Container } from "@/shared/ui"
import { Badge } from "@/shared/ui/badge"

export const DeatilPortfolio = ({
	title,
	client,
	date,
	technologies,
	content,
}: Portfolio) => {
	return (
		<Container>
			<div className="py-10">
				{/* Project Details */}
				<div className="grid gap-12 md:grid-cols-3">
					{/* Left Column */}
					<div className="space-y-6 md:col-span-1">
						<div>
							<h4 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
								Клиент
							</h4>
							<p className="mt-1 text-lg font-medium">{client}</p>
						</div>

						<div>
							<h4 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
								Дата
							</h4>
							<p className="mt-1 text-lg font-medium">
								{date?.toLocaleDateString("ru-RU")}
							</p>
						</div>

						<div>
							<h4 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
								Технологии
							</h4>
							<div className="mt-2 flex flex-wrap gap-2">
								{technologies?.map((tech, index) => (
									<Badge key={index} variant="outline">
										{tech}
									</Badge>
								))}
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="md:col-span-2">
						<h2 className="font-bold mb-4 text-3xl title">{title}</h2>
						<h4 className="mb-4 text-xl font-semibold md:text-2xl">
							Обзор проекта
						</h4>
						<p className="text-muted-foreground text-lg">{content}</p>
					</div>
				</div>
			</div>
		</Container>
	)
}
