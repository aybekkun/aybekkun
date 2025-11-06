"use client"

import { Button } from "@/shared/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/ui/carousel"
import { Card, CardContent } from "@/shared/ui/card"
import { Container, SectionTitle } from "@/shared/ui"
import { ICertificate } from "@/shared/data/certificate.data"
import { cn } from "@/shared/lib/utils"
import Image from "next/image"
type Props = {
	certifications: ICertificate[]
	className?: string
}
export function CarouselOfCertifications({ certifications, className }: Props) {
	return (
		<section className={cn("py-16 md:py-24", className)}>
			<Container>
				{/* Header */}
				<SectionTitle
					title="Professional Certifications"
					subtitle="Industry-recognized qualifications that validate my skills and
						expertise."
				/>

				{/* Carousel */}
				<div className="mx-auto max-w-5xl">
					<Carousel opts={{ loop: true }}>
						<CarouselContent>
							{certifications.map((cert, index) => (
								<CarouselItem key={index}>
									<Card className="bg-card border p-0 shadow-sm hover:shadow-md transition">
										<CardContent className="p-0">
											<div className="grid gap-6 md:grid-cols-2">
												{/* Certificate Image */}
												<div className="relative h-64 overflow-hidden md:h-80">
													<Image
														src={cert.image}
														alt={cert.name}
														className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
													/>
												</div>

												{/* Certificate Details */}
												<div className="flex flex-col justify-center p-6">
													<div className="text-muted-foreground mb-2 text-sm font-medium">
														{cert.issuer} • {cert.date}
													</div>
													<h3 className="mb-4 text-2xl font-bold">
														{cert.name}
													</h3>
													<p className="text-muted-foreground mb-6">
														{cert.description}
													</p>
													<div className="mt-auto">
														<Button variant="outline" size="sm" asChild>
															<a href={cert.link} target="_blank">
																View Certificate
															</a>
														</Button>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Navigation */}
						<div className="mt-6 flex items-center justify-center gap-2">
							<CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
							<CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0" />
						</div>
					</Carousel>
				</div>
			</Container>
		</section>
	)
}
