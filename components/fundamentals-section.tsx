import { InfoIcon } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CoinData } from "@/lib/api"

export function FundamentalsSection({ coinData }: { coinData: CoinData }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Fundamentals</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon className="w-5 h-5 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Key metrics and fundamentals for {coinData.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">{coinData.name} Price</span>
            <span className="font-medium">${coinData.market_data.current_price.usd.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">24h Low / 24h High</span>
            <span className="font-medium">$16,382.07 / $16,874.12</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">7d Low / 7d High</span>
            <span className="font-medium">$16,382.07 / $16,874.12</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Trading Volume</span>
            <span className="font-medium">$23,249,202,782</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap Rank</span>
            <span className="font-medium">#1</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap</span>
            <span className="font-medium">$323,507,290,047</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Market Cap Dominance</span>
            <span className="font-medium">38.343%</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <span className="text-gray-500">Volume / Market Cap</span>
            <span className="font-medium">0.0718</span>
          </div>
          <div className="flex justify-between py-3 border-b">
            <div className="text-gray-500">All-Time High</div>
            <div className="text-right">
              <div className="font-medium">$69,044.77 <span className="text-red-500">-75.6%</span></div>
              <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
            </div>
          </div>
          <div className="flex justify-between py-3 border-b">
            <div className="text-gray-500">All-Time Low</div>
            <div className="text-right">
              <div className="font-medium">$67.81 <span className="text-green-500">24729.1%</span></div>
              <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}


