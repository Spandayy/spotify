import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const freeFeatures = [
    { feature: "Basic audio quality", available: true },
    { feature: "Shuffle play only", available: true },
    { feature: "Ad interruptions", available: true },
    { feature: "Skip limit (6 skips/hour)", available: true },
    { feature: "No offline listening", available: false },
    { feature: "Limited mobile access", available: true },
    { feature: "Monthly payment", available: false },
  ];

  const premiumFeatures = [
    { feature: "High-quality audio (320kbps)", available: true },
    { feature: "Play any song, anytime", available: true },
    { feature: "Ad-free listening", available: true },
    { feature: "Unlimited skips", available: true },
    { feature: "Offline listening", available: true },
    { feature: "Full mobile access", available: true },
    { feature: "One-time payment", available: true },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, One-Time Pricing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare our lifetime offer with the standard Spotify Free plan and see why thousands have already upgraded.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="flex-1 bg-gray-800/50 rounded-2xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Spotify Free</h3>
              <p className="text-gray-300 mb-6">Limited features with ads</p>
              <div className="text-3xl font-bold mb-8">
                $0 <span className="text-sm font-normal text-gray-400">/ forever</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {freeFeatures.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.available ? (
                      <Check className="h-5 w-5 text-gray-400 mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500 mr-3" />
                    )}
                    <span className={item.available ? "text-gray-300" : "text-gray-500"}>
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="w-full border border-gray-600 text-gray-300 font-bold py-3 rounded-full hover:bg-gray-700/50 transition-colors">
                Current Plan
              </button>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="flex-1 bg-gradient-to-br from-green-500/20 to-green-900/20 rounded-2xl overflow-hidden border-2 border-green-500 relative">
            <div className="absolute top-0 right-0 bg-green-500 text-black font-bold px-4 py-1 rounded-bl-lg">
              BEST VALUE
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Lifetime Premium</h3>
              <p className="text-gray-300 mb-6">All premium features forever</p>
              <div className="text-3xl font-bold mb-8">
                $29.99 <span className="text-sm font-normal text-gray-400">/ one-time</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {premiumFeatures.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.available ? (
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                    ) : (
                      <X className="h-5 w-5 text-gray-500 mr-3" />
                    )}
                    <span className={item.available ? "text-white" : "text-gray-500"}>
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://discord.gg/UAYWSk3NRf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-600 transition-colors text-center"
              >
                Get Premium Forever
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have already upgraded to lifetime premium. 
            No more monthly payments, just unlimited music forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;