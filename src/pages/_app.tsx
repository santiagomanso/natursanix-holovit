import { ItemsProvider } from '@/context/items-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ItemsProvider>
      <Component {...pageProps} />
    </ItemsProvider>
  )
}
