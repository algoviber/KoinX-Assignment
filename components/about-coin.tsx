import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CoinData } from "@/lib/api"

export function AboutCoin({ coinData }: { coinData: CoinData }) {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">About {coinData.name}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">What is {coinData.name}?</h3>
          <p className="text-gray-600">
            {coinData.name}'s price today is ${coinData.market_data.current_price.usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}, with a 24-hour trading volume of [API doesn't provide this data]. {coinData.symbol.toUpperCase()} is {coinData.market_data.price_change_percentage_24h > 0 ? '+' : ''}{coinData.market_data.price_change_percentage_24h.toFixed(2)}% in the last 24 hours.
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-gray-600 mb-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
          </p>
          <p className="text-gray-600">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
          </p>
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h2 className="text-2xl font-bold mb-6">Already Holding {coinData.name}?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
            <div className="flex gap-4">
              <img 
                src="/placeholder.svg?height=80&width=80" 
                alt="Calculate Profits"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Calculate your Profits</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 text-white">
            <div className="flex gap-4">
              <img 
                src="/placeholder.svg?height=80&width=80" 
                alt="Calculate Tax Liability"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Calculate your tax liability</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-gray-600">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>
    </Card>
  )
}

