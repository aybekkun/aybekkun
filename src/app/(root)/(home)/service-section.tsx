"use client"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/shared/data/service.data"
import {
    Container,
    SectionTitle
} from "@/shared/ui"

export const ServiceSection = () => {
	return (
		<section id="service" className="py-20 border-t-2 border-t-accent section-bg">
			<SectionTitle
				title="Сервисы"
				className="text-center"
				subtitle="Мы — команда, которая превращает идеи в яркие цифровые решения ."
			/>
			<Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
				{services.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</Container>
		</section>
	)
}
