"use client"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head />
            <body >
                {children}
                <Toaster />
            </body>
        </html>
    )
}
