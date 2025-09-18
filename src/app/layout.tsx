import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { metaData } from "../constants/seo-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = metaData

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${poppins.variable} antialiased`}>{children}</body>
        </html>
    )
}
