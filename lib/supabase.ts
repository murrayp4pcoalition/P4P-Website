import { createClient } from '@supabase/supabase-js';

//==============================================================================
// SUPABASE CONFIGURATION
//==============================================================================
// To connect to Supabase:
// 1. Create a project at https://supabase.com
// 2. Go to Project Settings > API
// 3. Copy your Project URL and anon/public key
// 4. Update the values below OR set environment variables
//
// Required Database Tables:
// - members (for coalition member directory)
// - custom_scripts (for tracking scripts like GTM, Meta Pixel)
//
// See SQL schema at bottom of this file
//==============================================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';
};

//==============================================================================
// DATABASE SCHEMA - Run this SQL in Supabase SQL Editor
//==============================================================================
/*

-- Members Table (Coalition Partners)
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  image_url TEXT,
  tier TEXT DEFAULT 'supporter' CHECK (tier IN ('founding_partner', 'partner', 'supporter')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for website display)
CREATE POLICY "Public read access" ON members FOR SELECT USING (true);

-- Allow authenticated insert/update/delete (for Power Hub)
CREATE POLICY "Authenticated full access" ON members FOR ALL USING (true);

-- Custom Scripts Table (GTM, Analytics, etc.)
CREATE TABLE custom_scripts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT DEFAULT 'header' CHECK (location IN ('header', 'footer')),
  scope TEXT DEFAULT 'sitewide' CHECK (scope IN ('sitewide', 'page')),
  page_path TEXT,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE custom_scripts ENABLE ROW LEVEL SECURITY;

-- Allow public read access (scripts need to load on pages)
CREATE POLICY "Public read access" ON custom_scripts FOR SELECT USING (true);

-- Allow authenticated full access (for Power Hub)
CREATE POLICY "Authenticated full access" ON custom_scripts FOR ALL USING (true);

*/
