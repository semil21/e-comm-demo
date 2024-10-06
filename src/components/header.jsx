'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#D20A2E] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Logo
            </Link>
          </div>
          <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
          </nav>
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-50">
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-50">
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
