import { cn } from "@/shared/lib/utils"
import { Badge, Container, TextAnimate } from "@/shared/ui"

import { Calendar, Mail, MapPin } from "lucide-react"
import Image from "next/image"

interface AboutMeProps {
	name?: string
	title?: string
	experience?: string
	location?: string
	email?: string
	image?: string
	className?: string
	description?: string[]
}

export default function AboutMeSection({
	name = "Alex Morgan",
	title = "Full Stack Developer",
	experience = "8+ Years",
	location = "San Francisco, CA",
	className = "",
	email = "hello@example.com",
	image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
	description = [
		"With over 8 years of experience building web and mobile applications, I specialize in creating robust, user-focused software solutions that solve real business problems.",
		"My journey in tech began at Stanford University where I earned my degree in Computer Science.",
		"I’m passionate about clean code, thoughtful architecture, and continuous learning.",
	],
}: AboutMeProps) {
	return (
		<section className={cn("bg-background py-16 md:py-24", className)}>
			<Container>
				<div className="gap-12 md:grid md:grid-cols-12 lg:gap-16">
					{/* Profile + Stats */}
					<div className="flex flex-col items-center md:col-span-5 lg:col-span-4">
						<div className="border-primary/10 relative mb-8 h-56 w-56 overflow-hidden rounded-full border-4 md:h-64 md:w-64 lg:h-72 lg:w-72">
							<img
								src={image}
								alt={name}
								className="object-cover w-full h-full"
								fetchPriority="high"
							/>
						</div>

						<div className="bg-muted/30 w-full max-w-sm space-y-4 rounded-xl border p-6">
							<h3 className="text-lg font-semibold">Quick Facts</h3>
							<div className="grid gap-3">
								<div className="flex items-center gap-3">
									<Calendar className="text-muted-foreground h-5 w-5" />
									<div>
										<p className="text-muted-foreground text-sm">Experience</p>
										<p className="font-medium">{experience}</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<MapPin className="text-muted-foreground h-5 w-5" />
									<div>
										<p className="text-muted-foreground text-sm">Location</p>
										<p className="font-medium">{location}</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail className="text-muted-foreground h-5 w-5" />
									<div>
										<p className="text-muted-foreground text-sm">Contact</p>
										<a
											href={`mailto:${email}`}
											className="hover:text-primary font-medium"
										>
											{email}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* About Me Content */}
					<div className="mt-12 flex flex-col md:col-span-7 md:mt-0 lg:col-span-8">
						<div className="mb-2 flex items-center gap-2">
							<Badge
								variant="secondary"
								className="font-normal tracking-wide uppercase"
							>
								About Me
							</Badge>
						</div>

						<h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							Hi, I&apos;m <span className="text-primary">{name}</span>
							<br />
							{title}
						</h1>

						<div className="space-y-4 text-xl">
							{description.map((p, i) => (
								<TextAnimate once animation="slideRight" as="p" key={i}>
									{p}
								</TextAnimate>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
