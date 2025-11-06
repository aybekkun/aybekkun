import Link from "next/link"

export default function NotFound() {
	return (
		<>
			<main className="h-screen">
				<div className="flex sticky top-60 flex-col items-center justify-center">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
						404
					</h2>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
						Could not find requested resource
					</p>
					<Link href="/" className="mt-8 text-blue-600 dark:text-blue-400">
						Return Home
					</Link>
				</div>
			</main>
		</>
	)
}
