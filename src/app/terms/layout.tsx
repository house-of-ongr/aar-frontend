import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function TermsPageLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section>
            <Header />
            <main className="w-full h-full max-w-screen-xl mx-auto mt-[80px] md:mt-48 ">
                {children}
            </main>
            <Footer />
        </section>
    )
}