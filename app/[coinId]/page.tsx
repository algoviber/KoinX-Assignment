import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { CoinHeader } from "@/components/coin-header"
import { TradingViewChart } from "@/components/trading-view-chart"
import { GetStartedCard } from "@/components/get-started-card"
import { TrendingCoins } from "@/components/trending-coins"
import { CryptoTabs } from "@/components/crypto-tabs"
import { FundamentalsSection } from "@/components/fundamentals-section"
import { SentimentSection } from "@/components/sentiment-section"
import { AboutCoin } from "@/components/about-coin"
import { Tokenomics } from "@/components/tokenomics"
import { TeamSection } from "@/components/team-section"
import { CoinCarousel } from "@/components/coin-carousel"
import { PerformanceSection } from "@/components/performance-section"
import { getCoinData, getTrendingCoins } from "@/lib/api"
import { notFound } from "next/navigation"

export default async function CoinPage({ params }: { params: { coinId: string } }) {
  const coinId = params.coinId === '' ? 'bitcoin' : params.coinId

  try {
    const [coinData, trendingData] = await Promise.all([
      getCoinData(coinId),
      getTrendingCoins()
    ])

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto py-4 md:py-6">
          <div className="mb-4 md:mb-6">
            <Breadcrumb coinName={coinData.name} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-6">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <CoinHeader coinData={coinData} />
              <TradingViewChart symbol={coinData.symbol.toUpperCase()} />
              <CryptoTabs />
              <PerformanceSection coinId={params.coinId} />
              <FundamentalsSection coinData={coinData} />
              <SentimentSection />
              <AboutCoin coinData={coinData} />
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
  } catch (error) {
    notFound()
  }
}

