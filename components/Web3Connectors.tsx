import styles from '../styles/Connectors.module.css'
import { connectors, getConnectorName, Web3Connector } from '../connectors'
import { useCallback } from 'react'

function Connector({ web3Connector }: { web3Connector: Web3Connector }) {
  const [connector, hooks] = web3Connector
  const isActive = hooks.useIsActive()
  const onClick = useCallback(() => {
    if (isActive) {
      connector.deactivate()
    } else {
      connectors.forEach(([connector]) => connector.deactivate())
      connector.activate()
    }
  }, [connector, isActive])

  // Only render if it's MetaMask connector
  if (getConnectorName(connector) !== 'MetaMask') {
    return null
  }

  return (
    <div className="flex justify-center mb-2">
      <button
        onClick={onClick}
        className="relative group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-xl w-full max-w-[280px]"
      >
        <div className="px-6 py-3 bg-widget-dark rounded-xl group-hover:bg-opacity-90 transition-all">
          <div className="flex items-center justify-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
              alt="MetaMask"
              className="w-6 h-6"
            />
            <span className="text-white font-semibold">
              {isActive ? 'Disconnect' : 'Connect MetaMask'}
            </span>
          </div>
        </div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all"></div>
      </button>
    </div>
  )
}

export default function Connectors() {
  return (
    <div>
      {connectors.map((web3Connector, index) => (
        <Connector key={index} web3Connector={web3Connector} />
      ))}
    </div>
  )
}
