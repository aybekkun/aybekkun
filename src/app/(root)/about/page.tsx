import AboutMeSection from "@/components/about-me-section"
import AccordionExperienceCards from "@/components/accordion-experience-cards"
import { CarouselOfCertifications } from "@/components/carousel-of-certifications"
import { certifications } from "@/shared/data/certificate.data"
import { workExperiences } from "@/shared/data/work.data"

const AboutPage = () => {
	return (
		<>
			<AboutMeSection
				className="section-bg"
				name="Aybek Amanbaev"
				title="React Developer & Instructor"
				experience="5+ Years"
				location="Uzbekistan"
				email="aybek.dev@example.com"
				image="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
				description={[
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
				]}
			/>
			<AccordionExperienceCards workExperiences={workExperiences} />
			<CarouselOfCertifications className="section-bg" certifications={certifications} />
		</>
	)
}

export default AboutPage
