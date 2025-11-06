import { IPrice } from "@/shared/data/priceing.data"
import { Check, X } from "lucide-react"

export const PriceCard = (price: IPrice) => {
	return (
		<div
			key={price.name}
			className={`relative cursor-pointer bg-card p-5 pt-9 rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
				price.popular ? "ring-2 ring-purple-500" : "ring-2 ring-purple-900"
			}`}
		>
			<div className="text-center pb-8">
				<h4 className="text-2xl text-black dark:text-white">{price.name}</h4>
				<div className="mt-4">
					<span className="text-2xl md:text-3xl lg:text-4xl font-bold title">
						{price.price}
					</span>
				</div>
				<p className="mt-4 text-gray-400 h-8">{price.description}</p>
			</div>
			{price.popular && (
				<span className="absolute text-white text-nowrap rounded-full p-2 -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-dark-400">
					Самый оптимальный
				</span>
			)}
			<ul className="space-y-3 mb-8">
				{price.features.map((feature, featureIndex) => (
					<li key={featureIndex} className="flex items-center text-sm">
						<Check className="h-4 w-4 text-purple-500 mr-3 shrink-0" />
						<span className="text-gray-900 dark:text-gray-100">{feature}</span>
					</li>
				))}
				{price.notIncluded.map((feature, featureIndex) => (
					<li key={featureIndex} className="flex items-center text-sm">
						<X className="h-4 w-4 text-gray-600 mr-3 shrink-0" />
						<span className="text-gray-600">{feature}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
