import { Card } from "@/components/ui/card"
import { InfoIcon, NewspaperIcon, TrendingUpIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

export function SentimentSection() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Sentiment</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <InfoIcon className="w-5 h-5 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Market sentiment for Bitcoin</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Key Events
          <InfoIcon className="w-4 h-4 text-gray-400" />
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <Card className="p-4 bg-blue-50 min-w-[400px]">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <NewspaperIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-green-50 min-w-[400px]">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Analyst Estimates
          <InfoIcon className="w-4 h-4 text-gray-400" />
        </h3>
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-500">76%</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Buy</span>
              <Progress value={76} className="h-2 bg-gray-200">
                <div className="h-full bg-green-500 rounded" />
              </Progress>
              <span className="w-8 text-sm text-gray-500">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Hold</span>
              <Progress value={8} className="h-2 bg-gray-200">
                <div className="h-full bg-gray-500 rounded" />
              </Progress>
              <span className="w-8 text-sm text-gray-500">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Sell</span>
              <Progress value={16} className="h-2 bg-gray-200">
                <div className="h-full bg-red-500 rounded" />
              </Progress>
              <span className="w-8 text-sm text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

