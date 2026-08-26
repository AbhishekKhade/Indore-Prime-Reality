import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
export const SUPABASE_URL = 'https://mbuvvwoelhjfyjmedjyu.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_mlHm1o11_tejQ3FobdSaPQ_E3SH63G1';

// Create Supabase JS client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface LeadSubmission {
  full_name: string;
  phone: string;
  email: string;
  property_type: string;
  budget: string;
  buying_timeline: string;
  contact_method: string;
  lead_score?: 'HOT' | 'WARM';
  lead_status?: string;
  visit_date?: string;
  time_slot?: string;
  need_cab?: boolean;
  pickup_address?: string;
  source?: string;
}

/**
 * Calculates lead score based on rule:
 * If budget is ₹50 lakh+ OR timeline is 'Immediately', score = 'HOT', else 'WARM'.
 */
export function calculateLeadScore(budget: string, buyingTimeline: string): 'HOT' | 'WARM' {
  const isImmediate = buyingTimeline.trim().toLowerCase().includes('immediate');

  // Check budget for 50 Lakhs+
  // Typical selections: '₹50L - ₹75L', '₹75L - ₹1 Cr', '₹1 Cr - ₹1.5 Cr', '₹1.5 Cr+', '₹50 Lakh+', '50L+', etc.
  const lowerBudget = budget.toLowerCase();
  const isBudget50LPlus = 
    lowerBudget.includes('50l') ||
    lowerBudget.includes('50 l') ||
    lowerBudget.includes('50 lakh') ||
    lowerBudget.includes('75l') ||
    lowerBudget.includes('75 l') ||
    lowerBudget.includes('75 lakh') ||
    lowerBudget.includes('80l') ||
    lowerBudget.includes('85l') ||
    lowerBudget.includes('cr') ||
    lowerBudget.includes('crore') ||
    lowerBudget.includes('1.2') ||
    lowerBudget.includes('1.5') ||
    lowerBudget.includes('50+');

  if (isImmediate || isBudget50LPlus) {
    return 'HOT';
  }
  return 'WARM';
}

/**
 * Inserts a new lead into the Supabase 'Leads' table with exact database schema
 */
export async function saveLead(data: LeadSubmission): Promise<{ success: boolean; data?: any; error?: string }> {
  const scoreValue = data.lead_score || calculateLeadScore(data.budget, data.buying_timeline);
  
  const payload = {
    'Full Name': data.full_name,
    'Phone': data.phone,
    'Email': data.email,
    'Property Type': data.property_type,
    'Budget': data.budget,
    'Buying Timeline': data.buying_timeline,
    'Lead Score': scoreValue,
    'Lead Status': 'NEW',
  };

  try {
    const { data: resData, error } = await supabase
      .from('Leads')
      .insert([payload])
      .select();

    console.log("Supabase Result:", resData, error);

    if (error) {
      // Direct REST fallback if needed
      const restEndpoint = `${SUPABASE_URL}/rest/v1/Leads`;
      const response = await fetch(restEndpoint, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Supabase REST Fallback Error:", errText);
        return { success: false, error: errText };
      }

      const restData = await response.json();
      console.log("Supabase Result:", restData, null);
      return { success: true, data: restData };
    }

    return { success: true, data: resData };
  } catch (err: any) {
    console.error("Supabase Exception:", err);
    return { success: false, error: err?.message || 'Network error' };
  }
}
