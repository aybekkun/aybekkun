import { DeviceIcon } from "@/shared/assets"
import { RocketIcon } from "@/shared/assets/rocket-icon"
import { cn } from "@/shared/lib/utils"
import { CardSwap, CardSwapItem } from "@/shared/ui"

export const CardSwapList = ({ className = "" }: { className: string }) => {
	return (
		<div className={cn("relative h-[350px] md:h-[400px]", className)}>
			<CardSwap
				width={"100%"}
				height={"100%"}
				cardDistance={60}
				verticalDistance={70}
				skewAmount={4}
				delay={5000}
				pauseOnHover={false}
			>
				<CardSwapItem className="bg-white shadow-2xl dark:bg-black">
					<div className="p-4">
						<h2 className="text-3xl md:text-6xl title">На все девайсы</h2>
						<DeviceIcon />
						<ul className="block md:hidden mt-6 space-y-2 w-[280px] sm:w-full text-black dark:text-white text-lg md:text-xl">
							<li>- Полная адаптация под смартфоны, планшеты и компьютеры</li>
							<li>- Автоматическая подстройка интерфейса под размер экрана</li>
						</ul>
					</div>
				</CardSwapItem>
				<CardSwapItem className="bg-white shadow-2xl dark:bg-black">
					<div className="p-4">
						<h2 className="text-3xl md:text-6xl title">Делаем быстро</h2>
						<div className=" ml-20">
							<RocketIcon />
						</div>
					</div>
				</CardSwapItem>
				<CardSwapItem className="bg-white shadow-2xl dark:bg-black">
					<div className="p-4">
						<h2 className="text-3xl md:text-6xl title">
							Создаём <br /> цифровое <br /> будущее
						</h2>
						<ul className="mt-6 space-y-2 w-[280px] sm:w-full text-black dark:text-white text-lg md:text-xl">
							<li>- Современные сайты и интерфейсы</li>
							<li>- Креативные анимации и брендинг</li>
							<li>- Мощная поддержка и SEO</li>
						</ul>
					</div>
				</CardSwapItem>
			</CardSwap>
		</div>
	)
}
