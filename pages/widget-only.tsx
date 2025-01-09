import type { NextPage } from 'next'
import { SwapWidget, Theme } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { DEFAULT_TOKEN_LIST } from '../config/tokens'
import { JSON_RPC_URL } from '../constants'

const WidgetOnly: NextPage = () => {
  const darkMode: Theme = {
    primary: '#000000',
    secondary: '#666666',
    interactive: '#333333',
    container: '#222222',
    module: '#111111',
    accent: '#4C82FB',
    outline: '#333333',
    dialog: '#000000',
    fontFamily: 'Inter',
  }

  return (
    <div className="bg-widget-dark min-h-screen flex flex-col items-center justify-start p-4 gap-8">
      {/* Uniswap Widget */}
      <div className="rounded-2xl overflow-hidden bg-widget-gray/50 backdrop-blur-sm p-4 shadow-2xl">
        <h2 className="text-white text-xl mb-4 text-center">Uniswap</h2>
        <SwapWidget
          jsonRpcEndpoint={JSON_RPC_URL}
          tokenList={DEFAULT_TOKEN_LIST}
          defaultInputTokenAddress="NATIVE"
          defaultInputAmount="1"
          theme={darkMode}
        />
      </div>

      {/* SushiSwap Interface */}
      <div className="rounded-2xl overflow-hidden bg-widget-gray/50 backdrop-blur-sm p-4 shadow-2xl">
        <h2 className="text-white text-xl mb-4 text-center">SushiSwap</h2>
        <iframe 
          src="http://localhost:3001/widget-only"
          className="w-[360px] h-[600px] border-0"
          title="SushiSwap Interface"
        />
      </div>
    </div>
  )
}

export default WidgetOnly 