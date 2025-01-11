import { Card } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import Image from "next/image"
import { TrendingResponse } from "@/lib/api"

export function TrendingCoins({ data }: { data: TrendingResponse }) {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {data.coins.slice(0, 3).map((coin) => {
          const change = coin.item.data.price_change_percentage_24h.usd
          const isPositive = change > 0

          return (
            <div key={coin.item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={coin.item.small || '/placeholder.svg'}
                  alt={coin.item.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </span>
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 text-sm ${
                isPositive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
              } rounded`}>
                {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                {Math.abs(change).toFixed(2)}%
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

