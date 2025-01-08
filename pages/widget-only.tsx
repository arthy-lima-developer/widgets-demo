import type { NextPage } from 'next'
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { DEFAULT_TOKEN_LIST } from '../config/tokens'
import { JSON_RPC_URL } from '../constants'

const WidgetOnly: NextPage = () => {
  return (
    <div className="bg-widget-dark min-h-screen flex items-center justify-center p-4">
      <div className="rounded-2xl overflow-hidden bg-widget-gray/50 backdrop-blur-sm p-4 shadow-2xl">
        <SwapWidget
          jsonRpcEndpoint={JSON_RPC_URL}
          tokenList={DEFAULT_TOKEN_LIST}
          defaultInputTokenAddress="NATIVE"
          defaultInputAmount="1"
          theme="dark"
        />
      </div>
    </div>
  )
}

export default WidgetOnly 