export type IWork = {
	company: string
	logo: string
	role: string
	location: string
	duration: string
	description: string
	achievements: string[]
	skills: string[]
	link: string
}

export const workExperiences: IWork[] = [
	{
		company: "Innovative Solutions Inc.",
		logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1374&auto=format&fit=crop",
		role: "Senior Product Designer",
		location: "San Francisco, CA",
		duration: "2021 - Present",
		description:
			"Leading the product design team in creating user-centered experiences for enterprise software applications. Collaborating with cross-functional teams to define product vision and roadmap.",
		achievements: [
			"Redesigned flagship product resulting in 40% increase in user engagement",
			"Established design system reducing development time by 30%",
			"Led research initiatives that shaped three major feature releases",
		],
		skills: [
			"UX/UI Design",
			"Design Systems",
			"User Research",
			"Figma",
			"Prototyping",
		],
		link: "#",
	},
	{
		company: "Digital Creations Studio",
		logo: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1470&auto=format&fit=crop",
		role: "UX Designer",
		location: "Remote",
		duration: "2019 - 2021",
		description:
			"Designed digital experiences for clients in finance, healthcare, and e-commerce sectors. Conducted user research and testing to inform design decisions and iterate on solutions.",
		achievements: [
			"Created mobile app interface that increased conversion by 25%",
			"Developed user personas and journey maps for 5 major clients",
			"Optimized checkout flow reducing cart abandonment by 18%",
		],
		skills: ["UX Design", "User Testing", "Wireframing", "Adobe XD", "Sketch"],
		link: "#",
	},
	{
		company: "CreativeTech Agency",
		logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop",
		role: "UI Designer",
		location: "New York, NY",
		duration: "2017 - 2019",
		description:
			"Created visually compelling user interfaces for web and mobile applications. Collaborated with developers to ensure design integrity through implementation.",
		achievements: [
			"Designed UI for award-winning healthcare application",
			"Created visual identity for startup that secured $2M in funding",
			"Improved design handoff process reducing developer questions by 40%",
		],
		skills: [
			"UI Design",
			"Visual Design",
			"Typography",
			"Illustrator",
			"Brand Guidelines",
		],
		link: "#",
	},
	{
		company: "TechStart Studios",
		logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1470&auto=format&fit=crop",
		role: "Graphic Designer",
		location: "Chicago, IL",
		duration: "2015 - 2017",
		description:
			"Designed marketing materials, website graphics, and brand assets for technology startups and small businesses. Ensured consistent brand identity across all touchpoints.",
		achievements: [
			"Created visual assets for 15+ product launches",
			"Redesigned company website increasing traffic by 30%",
			"Developed social media templates that improved engagement by 25%",
		],
		skills: [
			"Graphic Design",
			"Branding",
			"Marketing Materials",
			"Photoshop",
			"InDesign",
		],
		link: "#",
	},
]
