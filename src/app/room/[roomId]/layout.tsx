export default function RoomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-screen p-4 box-border">
            <main className="flex flex-col h-full w-full border rounded-xl overflow-hidden">
                {children}
            </main>
        </div>
    )
}
