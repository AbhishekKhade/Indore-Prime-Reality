import React, { useState } from 'react';
import { 
  CreditCard, 
  Calculator, 
  Check, 
  Sparkles, 
  Calendar, 
  Download, 
  ShieldCheck, 
  ArrowRight,
  IndianRupee,
  Percent,
  Clock,
  Building
} from 'lucide-react';
import { BANKING_PARTNERS, PROJECT_INFO } from '../data/propertyData';

interface PricingAndEmiProps {
  onOpenBookingModal: (config?: string) => void;
  onOpenBrochureModal: () => void;
}

export const PricingAndEmi: React.FC<PricingAndEmiProps> = ({ 
  onOpenBookingModal, 
  onOpenBrochureModal 
}) => {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8.40); // 8.4%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Calculate EMI
  const calculateEmi = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  };

  const { monthlyEmi, totalPayment, totalInterest } = calculateEmi();

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const pricingTiers = [
    {
      name: "2 BHK Smart Luxury",
      carpet: "895 sq.ft Carpet",
      superArea: "1,245 sq.ft",
      price: "₹58.50 Lakhs*",
      emi: "₹38,200/mo*",
      popular: false,
      features: [
        "2 Bedrooms + 2 Bathrooms + 2 Balconies",
        "Covered Basement Car Parking Included",
        "Lifetime Club Imperia Membership Included",
        "Smart Video Door Phone & Biometric Lock",
        "Modular Kitchen Pipeline & Chimney Hookup"
      ]
    },
    {
      name: "3 BHK Grand Royale",
      carpet: "1,290 sq.ft Carpet",
      superArea: "1,785 sq.ft",
      price: "₹84.90 Lakhs*",
      emi: "₹55,400/mo*",
      popular: true,
      badge: "Most Preferred Family Choice",
      features: [
        "3 Bedrooms + 3 Bathrooms + 3 Panoramic Decks",
        "Italian Marble Finish in Living & Dining Foyer",
        "Walk-in Dressing Zone in Master Bedroom",
        "Dedicated EV Charging Point in Parking Bay",
        "Modular Kitchen Voucher worth ₹1.5 Lakhs*"
      ]
    },
    {
      name: "3.5 BHK Sky Penthouse",
      carpet: "1,780 sq.ft Carpet",
      superArea: "2,420 sq.ft",
      price: "₹1.28 Crore*",
      emi: "₹83,600/mo*",
      popular: false,
      features: [
        "3.5 Bedrooms + 4 Bathrooms + Private Sky Terrace",
        "Private High-Speed Elevator Access",
        "2 Reserved Covered Car Parking Bays",
        "Grohe/Kohler Luxury Fitting Package Included",
        "VRV Air-Conditioning Piping Provision"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <CreditCard className="w-3.5 h-3.5 text-[#c5a059]" />
            Transparent Builder Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Transparent Pricing & Custom Payment Plans
          </h2>
          <p className="text-base text-gray-600 font-normal">
            No hidden charges. 0% brokerage fees. Pre-approved loans from India’s leading banks with easy construction-linked schedules.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-[#1a202c] text-white border-2 border-[#c5a059] shadow-xl scale-105 z-10'
                  : 'bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#c5a059] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm whitespace-nowrap">
                  ★ {tier.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`text-xl font-bold font-serif ${tier.popular ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {tier.superArea} (Super)
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      • {tier.carpet}
                    </span>
                  </div>
                </div>

                <div className={`p-4 rounded-lg border ${
                  tier.popular 
                    ? 'bg-slate-900 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`text-xs ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    All-Inclusive Price Starting At
                  </div>
                  <div className={`text-3xl font-bold font-serif mt-0.5 ${
                    tier.popular ? 'text-[#c5a059]' : 'text-[#1a1a1a]'
                  }`}>
                    {tier.price}
                  </div>
                  <div className={`text-xs font-medium mt-1 flex items-center justify-between ${
                    tier.popular ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span>Pre-Approved EMI:</span>
                    <span className="font-bold text-emerald-500">{tier.emi}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className={`text-xs font-bold uppercase tracking-wider ${
                    tier.popular ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Package Inclusions:
                  </div>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.popular ? 'text-gray-200' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-700/40 space-y-2.5">
                <button
                  id={`pricing-book-${idx}-btn`}
                  onClick={() => onOpenBookingModal(tier.name)}
                  className={`w-full py-3 rounded font-bold uppercase tracking-wider text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-[#c5a059] text-white hover:bg-[#b38f4d]'
                      : 'bg-[#1a202c] text-white hover:bg-slate-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Visit & Cost Sheet</span>
                </button>

                <button
                  id={`pricing-cost-sheet-${idx}-btn`}
                  onClick={onOpenBrochureModal}
                  className={`w-full py-2 rounded text-xs font-semibold text-center transition-colors ${
                    tier.popular 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Request Official Payment Schedule PDF
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive EMI Calculator Module */}
        <div className="bg-white rounded-xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 border-b border-gray-200 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#c5a059]" />
                <h3 className="text-2xl font-bold text-[#1a1a1a] font-serif">
                  Home Loan EMI Estimator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Customize your loan parameters to simulate your monthly outflow and pre-approval eligibility.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#c5a059]/10 px-3.5 py-1.5 rounded border border-[#c5a059]/30 text-xs font-semibold text-[#c5a059]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SBI & HDFC Pre-Approved: 8.40%*</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Loan Amount Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-gray-700 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4 text-[#c5a059]" />
                    Loan Amount
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1a1a1a] bg-gray-100 px-3 py-1 rounded border border-gray-200">
                    {formatINR(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1500000}
                  max={12000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-[#c5a059] h-2 bg-gray-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-600 font-medium">
                  <span>₹15 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1.2 Crore</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-gray-700 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#c5a059]" />
                    Interest Rate (% per annum)
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1a1a1a] bg-gray-100 px-3 py-1 rounded border border-gray-200">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={12.0}
                  step={0.05}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#c5a059] h-2 bg-gray-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-600 font-medium">
                  <span>7.50% (Special)</span>
                  <span>8.40% (Standard)</span>
                  <span>12.00%</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-gray-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#c5a059]" />
                    Loan Tenure (Years)
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1a1a1a] bg-gray-100 px-3 py-1 rounded border border-gray-200">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-[#c5a059] h-2 bg-gray-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-600 font-medium">
                  <span>5 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

            </div>

            {/* Calculation Result Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#1a202c] text-white p-6 sm:p-7 rounded-xl border border-gray-700 space-y-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  Estimated Monthly Outflow
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#c5a059] font-serif">
                  ₹{monthlyEmi.toLocaleString('en-IN')} <span className="text-sm font-sans font-normal text-gray-300">/ month</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-gray-700 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Principal Loan:</span>
                  <span className="font-semibold text-white">{formatINR(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Interest Payable:</span>
                  <span className="font-semibold text-[#c5a059]">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-800 pt-2 font-bold text-sm">
                  <span className="text-white">Total Amount (P + I):</span>
                  <span className="text-emerald-400">{formatINR(totalPayment)}</span>
                </div>
              </div>

              <button
                id="emi-pre-approval-btn"
                onClick={() => onOpenBookingModal()}
                className="w-full py-3 rounded font-bold uppercase tracking-wider text-xs text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Check Bank Pre-Approval Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Banking Partners Strip */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-xs font-semibold text-gray-600 mb-3 text-center sm:text-left">
              Pre-Approved Banking Partners with Express 48-Hour Loan Sanction:
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
              {BANKING_PARTNERS.map((bank, idx) => (
                <div key={idx} className="p-2.5 rounded bg-gray-50 border border-gray-200 space-y-1">
                  <div className="font-bold text-xs text-[#1a1a1a]">{bank.name}</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">{bank.rate}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
