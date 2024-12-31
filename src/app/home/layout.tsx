import Logo from "@/components/Logo"

export default function MyPageLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section className="">
            <div className="h-screen">
                <Logo showText={false} />
                {children}
            </div>
        </section>
    )
}