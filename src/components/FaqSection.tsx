import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquareText, Search, PhoneCall } from 'lucide-react';
import { FAQS, PROJECT_INFO } from '../data/propertyData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Site Visit', 'Pricing & Loans', 'Possession & Legal'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Clear Answers to All Your Homebuying Queries
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Everything you need to know about approvals, legal compliance, possession dates, and the VIP site visit experience.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search e.g. RERA, possession, cab, loan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#f8f9fa] border border-gray-200 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1a202c] text-white border border-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-gray-200 overflow-hidden bg-[#f8f9fa] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1a1a1a] hover:text-[#c5a059] transition-colors cursor-pointer"
                  >
                    <span className="font-serif">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c5a059] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3.5 bg-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-gray-500 text-sm">
              No matching questions found. Feel free to contact our support desk directly.
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#1a202c] text-white border border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-serif">
              Have a specific question about The Imperial Crest?
            </h4>
            <p className="text-xs text-gray-300">
              Our direct customer relationship desk in Indore is available 7 days a week.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20I%20have%20a%20question%20regarding%20the%20property.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquareText className="w-3.5 h-3.5" />
              WhatsApp Help
            </a>
            <a
              href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded text-xs font-bold text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
