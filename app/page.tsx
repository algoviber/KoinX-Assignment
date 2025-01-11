import CoinPage from './[coinId]/page'

export default function HomePage() {
  return <CoinPage params={{ coinId: 'bitcoin' }} />
}

