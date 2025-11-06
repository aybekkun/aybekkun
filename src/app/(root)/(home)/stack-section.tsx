import { FigmaIcon } from "@/shared/assets/figma-icon"
import { ViteIcon } from "@/shared/assets/vite-icon"
import { Container, GlassIcons, SectionTitle } from "@/shared/ui"
import { AiOutlineAntDesign } from "react-icons/ai"
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoVercel } from "react-icons/io5"
import { RiNextjsFill } from "react-icons/ri"
import { SiExpress, SiNestjs, SiTypescript } from "react-icons/si"
const items = [
	{
		icon: <FaReact className="size-10 text-blue-500" />,
		color: "blue",
		label: "React Js",
	},
	{
		icon: <FaNodeJs className="size-10 text-green-500" />,
		color: "green",
		label: "Node Js",
	},
	{
		icon: <FigmaIcon />,
		color: "orange",
		label: "Figma",
	},
	{
		icon: <BiLogoTailwindCss className="size-10 text-blue-400" />,
		color: "blue",
		label: "Tailwind CSS",
	},
	{
		icon: <SiTypescript className="size-10 text-blue-600" />,
		color: "blue",
		label: "TypeScript",
	},
	{
		icon: <ViteIcon />,
		color: "orange",
		label: "Vite",
	},
	{
		icon: <RiNextjsFill className="size-10 text-indigo-500" />,
		color: "indigo",
		label: "Next js",
	},
	{
		icon: <SiNestjs className="size-10 text-red-500" />,
		color: "red",
		label: "Nest js",
	},
	{
		icon: <BiLogoPostgresql className="size-10 text-blue-600" />,
		color: "blue",
		label: "PostgreSQL",
	},
	{
		icon: <IoLogoVercel className="size-10 text-indigo-600" />,
		color: "indigo",
		label: "Vercel",
	},
	{
		icon: <SiExpress className="size-10 text-purple-500" />,
		color: "purple",
		label: "Express",
	},
	{
		icon: <AiOutlineAntDesign className="size-10 text-purple-500" />,
		color: "purple",
		label: "Antd design",
	},
]
export const StackSection = () => {
	return (
		<section className="py-20 text-center dark:bg-black">
			<SectionTitle
				title="Мой стек технологий"
				subtitle="и инструменты, которые я использую."
			/>

			<Container>
				<GlassIcons items={items} />
			</Container>
		</section>
	)
}
