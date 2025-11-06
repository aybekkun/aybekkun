import { PriceCard } from "@/components/price-card"
import { prices } from "@/shared/data/priceing.data"
import {
	Container,
	SectionTitle,
	SpotlightCard,
	TextAnimate,
} from "@/shared/ui"
import { Check, X } from "lucide-react"
import React from "react"

export const PricingSection = () => {
	return (
		<section className="py-10 section-bg">
			<SectionTitle
				title="Цены"
				subtitle="Выберите идеальный пакет для вашего проекта. Все цены включают дизайн, разработку и начальную поддержку."
			/>
			<Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{prices.map((price) => (
					<PriceCard key={price.name} {...price} />
				))}
			</Container>
		</section>
	)
}
