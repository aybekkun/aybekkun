import { ServiceItem } from "@/shared/data/service.data"
import { SpotlightCard, TextAnimate } from "@/shared/ui"

export const ServiceCard = (service: ServiceItem) => {
	return (
		<SpotlightCard key={service.title}>
			<div className="w-12 h-12 rounded-lg flex bg-primary/10 items-center justify-center mb-4">
				<service.icon className="h-6 w-6 text-primary" />
			</div>
			<TextAnimate
				className="text-xl title  mb-2"
				once
				animation="fadeIn"
				as={"h3"}
			>
				{service.title}
			</TextAnimate>
			<p className="text-accent-foreground mb-2 line-clamp-3">
				{service.description}
			</p>
			<ul className="space-y-2">
				{service.features.map((feature, featureIndex) => (
					<li key={featureIndex} className="flex items-center text-sm ">
						<div className="w-1.5 h-1.5 bg-linear-to-r from-[#6366f1] to-[#a855f7] rounded-full mr-3"></div>
						<TextAnimate once animation="slideDown" as="span">
							{feature}
						</TextAnimate>
					</li>
				))}
			</ul>
		</SpotlightCard>
	)
}
