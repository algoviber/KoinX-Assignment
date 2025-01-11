import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import Image from "next/image"
import { BitcoinPriceData } from "@/lib/api"

export function BitcoinHeader({ priceData }: { priceData: BitcoinPriceData }) {
  const { usd, usd_24h_change, inr } = priceData.bitcoin
  const isPositive = usd_24h_change > 0

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Bitcoin"
          width={32}
          height={32}
          className="rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-bold">Bitcoin</h1>
        <span className="text-sm text-gray-500">BTC</span>
        <span className="px-2 py-1 text-sm text-white bg-gray-600 rounded">Rank #1</span>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline gap-4">
          <span className="text-2xl md:text-3xl font-bold">
            ${usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
          <div className={`flex items-center gap-1 px-2 py-1 text-sm ${
            isPositive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
          } rounded`}>
            {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            {Math.abs(usd_24h_change).toFixed(2)}%
          </div>
          <span className="text-sm text-gray-500">(24H)</span>
        </div>
        <div className="text-base text-gray-500">
          ₹ {inr.toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  )
}

