"use client"

import { useState } from "react"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/shared/ui/accordion"
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react"
import { IWork } from "@/shared/data/work.data"
import { Container, SectionTitle } from "@/shared/ui"
import Image from "next/image"

export default function AccordionExperienceCards({
	workExperiences,
}: {
	workExperiences: IWork[]
}) {
	const [openItems, setOpenItems] = useState<string[]>([])

	const handleValueChange = (value: string[]) => {
		setOpenItems(value)
	}

	return (
		<section className="py-16 md:py-24">
			<Container>
				<SectionTitle
					title="Professional Experience"
					subtitle="My career journey through key roles and companies. Click on each position to learn more about my responsibilities and achievements."
				/>

				<Accordion
					type="multiple"
					value={openItems}
					onValueChange={handleValueChange}
					className="bg-card mx-auto max-w-4xl rounded-lg border"
				>
					{workExperiences.map((experience, index) => {
						const itemId = `item-${index}`
						return (
							<AccordionItem
								key={index}
								value={itemId}
								className={`border-b transition-all duration-200 last:border-b-0 ${
									openItems.includes(itemId)
										? "bg-muted/50"
										: "hover:bg-muted/30"
								}`}
							>
								<AccordionTrigger className="flex w-full px-6 py-6 text-left hover:no-underline">
									<div className="flex w-full items-center gap-4">
										<div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
											<Briefcase className="text-primary h-6 w-6" />
										</div>
										<div className="grow">
											<h3 className="text-xl font-bold">{experience.role}</h3>
											<div className="flex flex-wrap items-center gap-x-4 gap-y-1">
												<span className="font-medium">
													{experience.company}
												</span>
												<div className="text-muted-foreground hidden items-center gap-1 text-sm sm:flex">
													<Calendar className="h-3.5 w-3.5" />
													<span>{experience.duration}</span>
												</div>
											</div>
										</div>
										<div className="text-muted-foreground mr-4 hidden flex-col items-end gap-1 text-sm md:flex">
											<div className="flex items-center gap-1">
												<Calendar className="h-3.5 w-3.5" />
												<span>{experience.duration}</span>
											</div>
											<div className="flex items-center gap-1">
												<MapPin className="h-3.5 w-3.5" />
												<span>{experience.location}</span>
											</div>
										</div>
									</div>
								</AccordionTrigger>

								<AccordionContent className="border-t px-6 py-5">
									<div className="md:flex md:gap-8">
										<div className="mb-6 md:mb-0 md:w-1/2">
											<div className="mb-6 flex items-center gap-4">
												<div className="relative h-16 w-16 overflow-hidden rounded-md border">
													<Image
														src={experience.logo}
														alt={experience.company}
														className="object-cover h-full w-full"
													/>
												</div>
												<div className="text-muted-foreground flex flex-col gap-1 text-sm md:hidden">
													<div className="flex items-center gap-1">
														<MapPin className="h-3.5 w-3.5" />
														<span>{experience.location}</span>
													</div>
												</div>
											</div>

											<h4 className="text-muted-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
												Description
											</h4>
											<p className="mb-6 text-base">{experience.description}</p>

											<h4 className="text-muted-foreground mb-2 text-sm font-semibold tracking-wider uppercase">
												Skills & Technologies
											</h4>
											<div className="flex flex-wrap gap-2">
												{experience.skills.map((skill, skillIndex) => (
													<Badge key={skillIndex} variant="secondary">
														{skill}
													</Badge>
												))}
											</div>
										</div>

										<div className="md:w-1/2">
											<h4 className="text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase">
												Key Achievements
											</h4>
											<ul className="space-y-3">
												{experience.achievements.map(
													(achievement, achievementIndex) => (
														<li
															key={achievementIndex}
															className="flex items-start gap-3"
														>
															<span className="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
																{achievementIndex + 1}
															</span>
															<span>{achievement}</span>
														</li>
													)
												)}
											</ul>
										</div>
									</div>

									<div className="mt-6 flex justify-end">
										<Button asChild>
											<a href={experience.link} className="flex items-center">
												Сайт
												<ExternalLink className="ml-2 h-4 w-4" />
											</a>
										</Button>
									</div>
								</AccordionContent>
							</AccordionItem>
						)
					})}
				</Accordion>
			</Container>
		</section>
	)
}
