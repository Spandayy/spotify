import React from 'react';
import { Download, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Lifetime <span className="text-green-500">Spotify Premium</span> for a One-Time Payment
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Enjoy ad-free music, offline downloads, and premium features forever. No monthly fees, just one payment of $29.99.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://discord.gg/UAYWSk3NRf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-colors text-center text-lg"
              >
                Get Premium Forever
              </a>
              <a 
                href="#features" 
                className="border border-green-500 text-green-500 hover:bg-green-500/10 font-bold px-8 py-4 rounded-full transition-colors text-center text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-green-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://user-images.githubusercontent.com/26250962/42155301-ee1010d6-7ddf-11e8-9915-4fc75f6eab66.png" 
                  alt="Spotify Premium" 
                  className="w-64 h-64 object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <svg className="h-10 w-10 text-green-500 mb-4" viewBox="0 0 496 512" fill="currentColor">
              <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.6 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">Ad-Free Listening</h3>
            <p className="text-gray-300">Enjoy your music without interruptions from ads, forever.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <Download className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Offline Downloads</h3>
            <p className="text-gray-300">Download your favorite songs and listen offline, anytime.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <Headphones className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Sound Quality</h3>
            <p className="text-gray-300">Experience high-quality audio with premium sound settings.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;