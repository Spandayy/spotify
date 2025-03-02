import React from 'react';
import { Download, Headphones, Shuffle, SkipForward, Globe, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <svg className="h-8 w-8 text-green-500" viewBox="0 0 496 512" fill="currentColor">
              <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.6 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
            </svg>,
      title: "Ad-Free Listening",
      description: "Enjoy uninterrupted music without any ads or promotions."
    },
    {
      icon: <Download className="h-8 w-8 text-green-500" />,
      title: "Offline Downloads",
      description: "Download up to 10,000 songs on up to 5 devices."
    },
    {
      icon: <Headphones className="h-8 w-8 text-green-500" />,
      title: "Premium Sound Quality",
      description: "Listen to music in high-quality audio up to 320 kbps."
    },
    {
      icon: <Shuffle className="h-8 w-8 text-green-500" />,
      title: "Unlimited Skips",
      description: "Skip as many songs as you want, whenever you want."
    },
    {
      icon: <SkipForward className="h-8 w-8 text-green-500" />,
      title: "Play Any Song",
      description: "Play any song, album, or playlist without restrictions."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Listen Anywhere",
      description: "Access your premium account from anywhere in the world."
    },
    {
      icon: <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>,
      title: "Multi-Device Support",
      description: "Use your premium account on multiple devices simultaneously."
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Lifetime Access",
      description: "Pay once and enjoy premium features for a lifetime."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features, Forever</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock all of Spotify's premium features with a single payment. No monthly fees, no renewals, just lifetime access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://discord.gg/UAYWSk3NRf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-colors inline-block text-lg"
          >
            Get Premium Forever
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;