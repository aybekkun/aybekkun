"use client"
import { cn } from "@/shared/lib/utils"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/shared/ui"
import Image from "next/image"
import React from "react"

interface CarouselGalleryProps {
	images?: string[]
	autoPlay?: boolean
	autoPlayInterval?: number
	showThumbnails?: boolean
	className?: string
}

export const CarouselGallery: React.FC<CarouselGalleryProps> = ({
	images,
	autoPlay = false,
	autoPlayInterval = 5000,
	showThumbnails = true,
	className,
}) => {
	const [api, setApi] = React.useState<CarouselApi>()
	const [currentIndex, setCurrentIndex] = React.useState(0)

	// Подписка на изменения слайдов
	React.useEffect(() => {
		if (!api) return
		setCurrentIndex(api.selectedScrollSnap())

		api.on("select", () => {
			setCurrentIndex(api.selectedScrollSnap())
		})
	}, [api])

	// Автоматическое переключение
	React.useEffect(() => {
		if (!api || !autoPlay) return

		const interval = setInterval(() => {
			api.scrollNext()
		}, autoPlayInterval)

		return () => clearInterval(interval)
	}, [api, autoPlay, autoPlayInterval])

	if (!images?.length) {
		return <p className="text-center text-gray-500">No images provided</p>
	}
	if (images.length === 0) return null

	return (
		<div className={cn("w-full p-4 md:p-6", className)}>
			{/* Main Carousel */}
			<Carousel
				setApi={setApi}
				className="overflow-hidden relative rounded-2xl"
				opts={{ loop: true, align: "start" }}
			>
				<CarouselContent className="">
					{images.map((image, index) => (
						<CarouselItem className="pl-0 basis-full" key={`slide-${index}`}>
							<Image
								src={image}
								alt={`Slide ${index + 1}`}
								className="h-full w-full aspect-video object-cover "
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2" />
				<CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2" />
			</Carousel>

			{/* Thumbnails */}
			{showThumbnails && (
				<div className="mt-4 flex gap-2 overflow-x-auto px-2 py-2">
					{images.map((image, index) => (
						<button
							key={`thumb-${index}`}
							className={cn(
								"relative h-20 w-20 shrink-0 rounded overflow-hidden transition-all duration-200",
								index === currentIndex
									? "ring-2 ring-primary ring-offset-2"
									: "opacity-70 hover:opacity-100"
							)}
							onClick={() => api?.scrollTo(index)}
						>
							<Image
								src={image}
								alt={`Thumbnail ${index + 1}`}
								className="h-full w-full object-cover"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
