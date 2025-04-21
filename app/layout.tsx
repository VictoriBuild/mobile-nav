import type React from "react"
import { MobileNavigation } from "@/components/mobile-navigation"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Your existing layout content */}
        {children}

        {/* Add the mobile navigation */}
        <MobileNavigation />

        {/* Add padding to the bottom of the page on mobile to prevent content from being hidden behind the nav */}
        <div className="h-16 md:h-0"></div>
      </body>
    </html>
  )
}


import './globals.css'