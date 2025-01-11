import { Navbar } from "./components/navbar"
import { Breadcrumb } from "./components/breadcrumb"
import { BitcoinHeader } from "./components/bitcoin-header"
import { TradingViewChart } from "./components/trading-view-chart"
import { GetStartedCard } from "./components/get-started-card"
import { TrendingCoins } from "./components/trending-coins"
import { CryptoTabs } from "./components/crypto-tabs"
import { FundamentalsSection } from "./components/fundamentals-section"
import { SentimentSection } from "./components/sentiment-section"
import { AboutBitcoin } from "./components/about-bitcoin"
import { Tokenomics } from "./components/tokenomics"
import { TeamSection } from "./components/team-section"
import { CoinCarousel } from "./components/coin-carousel"
import { PerformanceSection } from "./components/performance-section"
import { getBitcoinPrice, getTrendingCoins } from "@/lib/api"

export default async function Page() {
  const [priceData, trendingData] = await Promise.all([
    getBitcoinPrice(),
    getTrendingCoins()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-4 md:py-6">
        <div className="mb-4 md:mb-6">
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-6">
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <BitcoinHeader priceData={priceData} />
            <TradingViewChart />
            <CryptoTabs />
            <PerformanceSection />
            <FundamentalsSection />
            <SentimentSection />
            <AboutBitcoin />
            <Tokenomics />
            <TeamSection />
          </div>
          <div className="space-y-6">
            <GetStartedCard />
            <TrendingCoins data={trendingData} />
          </div>
        </div>
        <div className="mt-6 px-4 md:px-6 space-y-6">
          <CoinCarousel title="You May Also Like" data={trendingData} />
          <CoinCarousel title="Trending Coins" data={trendingData} />
        </div>
      </main>
    </div>
  )
}

