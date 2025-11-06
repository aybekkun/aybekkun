import { CardSwapList } from "@/components/card-swap-list"
import { SocialLinks } from "@/components/social-links"
import { Badge, Container, WordRotate } from "@/shared/ui"

export const HeroSection = () => {
	return (
		<section className="py-16 md:pt-20 pb-52 overflow-hidden section-bg">
			<Container className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
				<div>
					<h1>
						<span className="text-7xl sm:text-8xl">Frontend</span>
						<br />
						<span className="text-5xl sm:text-5xl">Developer</span>
					</h1>
					<h2 className="text-3xl flex items-center">
						Создаю &nbsp;
						<WordRotate className="title" words={["CRM", "Сайты", "ERP"]} />
					</h2>
					<div className="space-x-2">
						{["REACT", "TypeScript", "NodeJs"].map((item) => (
							<Badge variant={"secondary"} key={item}>
								{item}
							</Badge>
						))}
					</div>
					<SocialLinks className="mt-4" />{" "}
				</div>
				<CardSwapList className="w-full"/>
			</Container>
		</section>
	)
}
