import { Button, Card, CardContent, CardFooter, CardHeader } from "@/shared/ui"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
	className?: string
	deleteButton?: React.ReactNode
	editButton?: React.ReactNode
	id: number
	title: string
	description: string
	category: string
	technologies: string[]
	images: string[]
}

export const PortfolioCard = ({
	id,
	title,
	description,
	category,
	technologies,
	images,
	deleteButton,
	editButton,
}: Props) => {
	return (
		<Card className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg">
			{/* Project image */}
			<div className="relative aspect-video overflow-hidden">
				<img
					src={images[0]}
					alt={title}
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

				{/* Category badge visible on hover */}
				<div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<span className="bg-primary/90 text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
						{category}
					</span>
				</div>
			</div>

			{/* Project content */}
			<CardHeader>
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="text-muted-foreground mt-2 line-clamp-2">{description}</p>
			</CardHeader>

			<CardContent>
				{/* Tags */}
				<div className="flex flex-wrap gap-2">
					{technologies.map((tag) => (
						<span
							key={tag}
							className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
						>
							{tag}
						</span>
					))}
				</div>
			</CardContent>

			<CardFooter className="flex gap-2">
				<Button variant="secondary">
					<Link
						href={`/portfolio/${id}`}
						className="text-primary flex items-center"
					>
						<span className="text-sm font-medium">View project</span>
						<ExternalLink className="ml-1 h-4 w-4" />
					</Link>
				</Button>

				{deleteButton}
				{editButton}
			</CardFooter>
		</Card>
	)
}
