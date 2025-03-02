import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does the lifetime Spotify Premium upgrade work?",
      answer: "After your one-time payment, you'll receive instructions on how to upgrade your Spotify account to Premium status. This is a permanent upgrade that will not expire or require any additional payments."
    },
    {
      question: "Is this official from Spotify?",
      answer: "Our service provides Premium upgrades through authorized channels. While we are not directly affiliated with Spotify, we ensure all upgrades are legitimate and permanent."
    },
    {
      question: "Will I lose my playlists or account data?",
      answer: "No, your existing Spotify account, including all your playlists, saved songs, and preferences, will remain intact. The upgrade only enhances your account with Premium features."
    },
    {
      question: "What if I already have a Spotify Premium subscription?",
      answer: "If you currently have a Premium subscription, you should cancel it before applying our lifetime upgrade to avoid being charged by Spotify. Our upgrade will maintain your Premium status without the recurring payments."
    },
    {
      question: "Do you offer unlimited replacements?",
      answer: "Yes, we provide unlimited replacements for your Premium upgrade. If your Premium status ever changes, simply contact our support team through Discord, and we'll restore your Premium features at no additional cost."
    },
    {
      question: "Can I upgrade multiple accounts?",
      answer: "Yes, you can purchase multiple upgrades. Each upgrade is for a single Spotify account. Contact our support team for bulk pricing if you need more than 5 upgrades."
    },
    {
      question: "How do I contact support if I have issues?",
      answer: "Our support team is available 24/7 on our Discord server. Join using the link provided after purchase, and our team will assist you with any questions or concerns."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't see your question here, feel free to contact our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? Join our Discord server for immediate support.
          </p>
          <a 
            href="https://discord.gg/UAYWSk3NRf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-colors inline-block text-lg"
          >
            Join Discord Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;