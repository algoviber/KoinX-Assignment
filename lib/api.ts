const COINGECKO_API = 'https://api.coingecko.com/api/v3'

export interface CoinData {
  id: string
  symbol: string
  name: string
  image: {
    large: string
    small: string
    thumb: string
  }
  market_data: {
    current_price: {
      usd: number
      inr: number
    }
    price_change_percentage_24h: number
    market_cap_rank: number
  }
}

export interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    score: number
    sparkline: string
    data: {
      price: string
      price_change_percentage_24h: {
        usd: number
      }
    }
  }
}

export interface TrendingResponse {
  coins: TrendingCoin[]
}

export async function getCoinData(id: string): Promise<CoinData> {
  const response = await fetch(
    `${COINGECKO_API}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { next: { revalidate: 60 } } // Revalidate every minute
  )
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${id}`)
  }

  return response.json()
}

export async function getTrendingCoins(): Promise<TrendingResponse> {
  const response = await fetch(
    `${COINGECKO_API}/search/trending`,
    { next: { revalidate: 60 } }
  )
  
  if (!response.ok) {
    throw new Error('Failed to fetch trending coins')
  }

  return response.json()
}

