export type ICertificate = {
	name: string
	issuer: string
	date: string
	description: string
	image: string
	link: string
}
export const certifications: ICertificate[] = [
	{
		name: "Google UX Design Certificate",
		issuer: "Google",
		date: "2023",
		description:
			"Professional certification in user experience design principles and methodologies.",
		image:
			"https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3",
		link: "#",
	},
	{
		name: "Web Accessibility Specialist",
		issuer: "IAAP",
		date: "2022",
		description:
			"Certification in creating accessible digital experiences for all users.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
		link: "#",
	},
	{
		name: "Adobe Certified Expert",
		issuer: "Adobe",
		date: "2022",
		description:
			"Professional recognition for expertise in Adobe Creative Suite applications.",
		image:
			"https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
		link: "#",
	},
	{
		name: "Certified Scrum Master",
		issuer: "Scrum Alliance",
		date: "2021",
		description:
			"Recognition for mastery of Scrum methodology and agile project management.",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
		link: "#",
	},
	{
		name: "React Developer Certificate",
		issuer: "Meta",
		date: "2021",
		description:
			"Front-end development certification for expertise in React framework.",
		image:
			"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
		link: "#",
	},
]
