import { ChevronRight } from 'lucide-react'
import Link from "next/link"

export function Breadcrumb({ coinName }: { coinName: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 px-4 md:px-0">
      <Link href="/cryptocurrencies" className="hover:text-gray-900">
        Cryptocurrencies
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-900">{coinName}</span>
    </div>
  )
}

