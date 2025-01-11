"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from "react"

const trendingCoins = [
  { name: "BTC", price: "$45,332.83", change: "+0.10%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "ETH", price: "$2,375.15", change: "-0.21%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "stETH", price: "$2,371.72", change: "-0.34%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "UNI", price: "$7.3192", change: "-4.02%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "CFG", price: "$0.773600", change: "-1.76%", logo: "/placeholder.svg?height=30&width=30" },
]

const youMayLike = [
  { name: "BNB", price: "$319.34", change: "+0.52%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "SOL", price: "$109.33", change: "-2.89%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "XRP", price: "$0.634810", change: "+0.78%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "ADA", price: "$0.614869", change: "-1.57%", logo: "/placeholder.svg?height=30&width=30" },
  { name: "AVAX", price: "$41.05", change: "-3.78%", logo: "/placeholder.svg?height=30&width=30" },
]

function CoinCard({ coin }: { coin: typeof trendingCoins[0] }) {
  const isPositive = coin.change.startsWith("+")
  
  return (
    <Card className="p-4 min-w-[250px]">
      <div className="flex items-center gap-2 mb-2">
        <img src={coin.logo} alt={coin.name} className="w-6 h-6" />
        <span className="font-medium">{coin.name}</span>
        <span className={`ml-auto ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {coin.change}
        </span>
      </div>
      <div className="font-bold">{coin.price}</div>
    </Card>
  )
}

function ScrollableSection({ title, coins }: { title: string; coins: typeof trendingCoins }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {coins.map((coin, index) => (
            <CoinCard key={index} coin={coin} />
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Card>
  )
}

export function TrendingSections() {
  return (
    <div className="space-y-6">
      <ScrollableSection title="You May Also Like" coins={youMayLike} />
      <ScrollableSection title="Trending Coins" coins={trendingCoins} />
    </div>
  )
}

