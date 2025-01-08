import type { NextPage } from 'next'
import Head from 'next/head'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑

import styles from '../styles/Home.module.css'
import DocumentationCards from '../components/DocumentationCards'
import Web3Connectors from '../components/Web3Connectors'
import { useActiveProvider } from '../connectors'
import { useCallback, useRef, useState } from 'react'
import { JSON_RPC_URL } from '../constants'
import { DEFAULT_TOKEN_LIST } from '../config/tokens'

const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

const Home: NextPage = () => {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

  return (
    <div className="min-h-screen bg-widget-dark flex flex-col items-center justify-center">
      <Head>
        <title>Uniswap Widgets</title>
        <meta name="description" content="Uniswap Widgets" />
        <link rel="icon" href="https://app.uniswap.org/favicon.png" />
      </Head>

      <div className="absolute top-4 right-4">
        <label className="flex items-center text-white gap-2">
          <FiGlobe />
          <select 
            onChange={onSelectLocale}
            className="bg-widget-gray text-white rounded-lg px-3 py-1 text-sm border-none outline-none"
          >
            {SUPPORTED_LOCALES.map((locale) => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="w-full max-w-[400px] rounded-3xl bg-widget-gray/50 backdrop-blur-sm p-4 shadow-2xl">
        <div className="mb-6" ref={connectors} tabIndex={-1}>
          <Web3Connectors />
        </div>

        <div className="rounded-2xl overflow-hidden bg-widget-dark">
          <SwapWidget
            jsonRpcEndpoint={JSON_RPC_URL}
            tokenList={DEFAULT_TOKEN_LIST}
            provider={provider}
            locale={locale}
            onConnectWallet={focusConnectors}
            defaultInputTokenAddress="NATIVE"
            defaultInputAmount="1"
            defaultOutputTokenAddress={UNI}
            theme="dark"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
