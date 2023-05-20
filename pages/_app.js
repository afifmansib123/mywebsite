import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { DataProvider } from '@/store/Globalstate'
import { Notify } from '@/components/Notify'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </DataProvider>
  )
}
