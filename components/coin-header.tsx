import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import Image from "next/image"
import { CoinData } from "@/lib/api"

export function CoinHeader({ coinData }: { coinData: CoinData }) {
  const { 
    name, 
    symbol, 
    image, 
    market_data: { 
      current_price, 
      price_change_percentage_24h, 
      market_cap_rank 
    } 
  } = coinData
  const isPositive = price_change_percentage_24h > 0

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={image.small || '/placeholder.svg'}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-bold">{name}</h1>
        <span className="text-sm text-gray-500">{symbol.toUpperCase()}</span>
        <span className="px-2 py-1 text-sm text-white bg-gray-600 rounded">Rank #{market_cap_rank}</span>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline gap-4">
          <span className="text-2xl md:text-3xl font-bold">
            ${current_price.usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
          <div className={`flex items-center gap-1 px-2 py-1 text-sm ${
            isPositive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
          } rounded`}>
            {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            {Math.abs(price_change_percentage_24h).toFixed(2)}%
          </div>
          <span className="text-sm text-gray-500">(24H)</span>
        </div>
        <div className="text-base text-gray-500">
          ₹ {current_price.inr.toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  )
}

