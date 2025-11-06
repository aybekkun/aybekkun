import { AboutSection } from "./about-section"
import { HeroSection } from "./hero-section"
import { PortfolioSection } from "./portfolio-section"
import { PricingSection } from "./pricing-section"
import { ResumeSection } from "./resume-section"
import { ServiceSection } from "./service-section"
import { StackSection } from "./stack-section"

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServiceSection />
			<StackSection />
			<PricingSection />

			<PortfolioSection />
			<ResumeSection />
		</>
	)
}
