import { Button, SectionTitle } from "@/shared/ui"
import { Download } from "lucide-react"

export const ResumeSection = () => {
	return (
		<section className="py-20 text-center dark:bg-background">
			<SectionTitle
				title="Скачайте мое резюме"
				subtitle="чтобы узнать больше о моих навыках и опыте."
			/>
			<Button>
				<Download /> Скачать
			</Button>
		</section>
	)
}
