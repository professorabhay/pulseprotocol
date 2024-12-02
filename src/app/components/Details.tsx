import { Zap, Users, Shield } from 'lucide-react'

export default function Details() {
  return (
    <section id="details" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center animate-slideUp">Why Pulse Protocol?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center animate-fadeIn">
            <Zap className="w-12 h-12 mx-auto mb-4 text-white animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-gray-300">Experience social interactions with unparalleled speed through our hyper-parallel processing.</p>
          </div>
          <div className="text-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <Users className="w-12 h-12 mx-auto mb-4 text-white animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Decentralized Network</h3>
            <p className="text-gray-300">Build meaningful connections in a truly decentralized and resilient social graph.</p>
          </div>
          <div className="text-center animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <Shield className="w-12 h-12 mx-auto mb-4 text-white animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
            <p className="text-gray-300">Your data remains protected and immutable, secured by Arweave&apos;s permanent storage solution.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

