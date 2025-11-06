import { Header } from "@/components/layout"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {

	return (
		<>
			<Header />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	)
}
