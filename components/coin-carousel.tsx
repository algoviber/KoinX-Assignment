"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import Image from "next/image"
import { useRef } from "react"
import { TrendingResponse } from "@/lib/api"

export function CoinCarousel({ title, data }: { title: string; data: TrendingResponse }) {
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
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {data.coins.map((coin) => {
            const change = coin.item.data.price_change_percentage_24h.usd
            const isPositive = change > 0

            return (
              <Card key={coin.item.id} className="p-4 min-w-[280px]">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={coin.item.small || '/placeholder.svg'}
                    alt={coin.item.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                  <span className={`ml-auto flex items-center gap-1 ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                    {Math.abs(change).toFixed(2)}%
                  </span>
                </div>
                <div className="font-bold">{coin.item.data.price}</div>
                {coin.item.sparkline && (
                  <Image
                    src={coin.item.sparkline}
                    alt={`${coin.item.name} price graph`}
                    width={240}
                    height={60}
                    className="mt-2"
                  />
                )}
              </Card>
            )
          })}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </Card>
  )
}

