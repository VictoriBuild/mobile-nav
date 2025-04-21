"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Briefcase, MessageCircle, User } from "lucide-react"

export function MobileNavigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // Optional: Hide navigation when scrolling down, show when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 20)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } md:hidden`}
    >
      <nav className="bg-black border-t border-gray-800 text-white">
        <div className="flex justify-around items-center h-16">
          <NavItem href="/" icon={<Home size={20} />} label="Home" isActive={pathname === "/"} />
          <NavItem href="/resume" icon={<FileText size={20} />} label="Resume" isActive={pathname === "/resume"} />
          <NavItem
            href="/portfolio"
            icon={<Briefcase size={20} />}
            label="Portfolio"
            isActive={pathname === "/portfolio"}
          />
          <NavItem
            href="/testimonials"
            icon={<MessageCircle size={20} />}
            label="Testimonials"
            isActive={pathname === "/testimonials"}
          />
          <NavItem href="/contact" icon={<User size={20} />} label="Contact" isActive={pathname === "/contact"} />
        </div>
      </nav>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center w-full py-1 ${
        isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
      }`}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </Link>
  )
}
