"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          KoinX
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/crypto-taxes" className="text-sm font-medium">
            Crypto Taxes
          </Link>
          <Link href="/free-tools" className="text-sm font-medium">
            Free Tools
          </Link>
          <Link href="/resource-center" className="text-sm font-medium">
            Resource Center
          </Link>
          <Button>Get Started</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 py-4 border-t space-y-4">
          <Link href="/crypto-taxes" className="block text-sm font-medium">
            Crypto Taxes
          </Link>
          <Link href="/free-tools" className="block text-sm font-medium">
            Free Tools
          </Link>
          <Link href="/resource-center" className="block text-sm font-medium">
            Resource Center
          </Link>
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  )
}

