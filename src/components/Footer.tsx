import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-green-500 mr-2" viewBox="0 0 496 512" fill="currentColor">
                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.6 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
              </svg>
              <span className="text-xl font-bold">SpotifyForever</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Unlock the full potential of your music experience with our lifetime Spotify Premium upgrade service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-green-500 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-green-500 transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://discord.gg/UAYWSk3NRf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors flex items-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discord
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:support@spotifyforever.com" 
                    className="text-gray-400 hover:text-green-500 transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SpotifyForever. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: SpotifyForever is not affiliated with, endorsed by, or sponsored by Spotify. 
            Spotify is a registered trademark of Spotify AB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;