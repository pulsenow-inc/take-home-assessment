// MetaMask Integration Component
// NOTE: This is provided for reference - connecting to MetaMask is NOT part of the assessment task
// You may use this as a starting point if needed

import { useState, useEffect } from 'react'

interface WindowWithEthereum extends Window {
  ethereum?: {
    isMetaMask: boolean
    request: (args: { method: string }) => Promise<string[]>
  }
}

const MetaMaskButton = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false)

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMask = () => {
      try {
        const windowWithEthereum = window as WindowWithEthereum
        if (typeof window !== 'undefined' && windowWithEthereum.ethereum && windowWithEthereum.ethereum.isMetaMask) {
          setIsMetaMaskAvailable(true)
          checkConnection()
        }
      } catch (error) {
        // Silently handle - MetaMask not available
        setIsMetaMaskAvailable(false)
      }
    }

    checkMetaMask()
    
    // Listen for MetaMask installation
    if (typeof window !== 'undefined') {
      window.addEventListener('ethereum#initialized' as any, checkMetaMask, { once: true })
      return () => {
        window.removeEventListener('ethereum#initialized' as any, checkMetaMask)
      }
    }
  }, [])

  const checkConnection = async () => {
    try {
      const windowWithEthereum = window as WindowWithEthereum
      if (windowWithEthereum.ethereum && windowWithEthereum.ethereum.isMetaMask) {
        const accounts = await windowWithEthereum.ethereum.request({ method: 'eth_accounts' })
        if (accounts && accounts.length > 0) {
          setIsConnected(true)
          setAccount(accounts[0])
        }
      }
    } catch (error) {
      // Silently handle - user may not be connected
      setIsConnected(false)
      setAccount(null)
    }
  }

  const connectWallet = async () => {
    try {
      const windowWithEthereum = window as WindowWithEthereum
      if (windowWithEthereum.ethereum && windowWithEthereum.ethereum.isMetaMask) {
        const accounts = await windowWithEthereum.ethereum.request({
          method: 'eth_requestAccounts'
        })
        if (accounts && accounts.length > 0) {
          setIsConnected(true)
          setAccount(accounts[0])
        }
      } else {
        // MetaMask not installed
        const url = 'https://metamask.io/download/'
        if (window.confirm('MetaMask is not installed. Would you like to install it?')) {
          window.open(url, '_blank')
        }
      }
    } catch (error: any) {
      // User rejected the request or other error
      if (error.code !== 4001) {
        console.error('Error connecting to MetaMask:', error)
      }
    }
  }

  const formatAddress = (addr: string | null) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const windowWithEthereum = window as WindowWithEthereum
  const ethereumAvailable = typeof window !== 'undefined' && windowWithEthereum.ethereum !== undefined

  return (
    <button
      onClick={connectWallet}
      disabled={!isMetaMaskAvailable && !ethereumAvailable}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        isConnected
          ? 'bg-green-100 text-green-800 border border-green-300'
          : isMetaMaskAvailable || ethereumAvailable
          ? 'bg-pulse-primary text-white hover:bg-pulse-secondary'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      title={!isMetaMaskAvailable && !ethereumAvailable ? 'MetaMask not installed' : ''}
    >
      {isConnected ? (
        <span>🦊 {formatAddress(account)}</span>
      ) : (
        <span>Connect MetaMask</span>
      )}
    </button>
  )
}

export default MetaMaskButton
