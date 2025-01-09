import type { NextPage } from 'next'
import { SwapLayout } from 'app/layouts/SwapLayout'
import LegacySwap from './legacy/swap'

const WidgetOnly: NextPage = () => {
  return (
    <div className="w-[360px] h-[600px] bg-dark-900">
      <LegacySwap banners={[]} />
    </div>
  )
}

export default WidgetOnly 