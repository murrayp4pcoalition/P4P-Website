-- Seed members table with existing P4P coalition members
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard → SQL Editor

-- First, clear existing members (optional - remove this line if you want to keep existing)
-- DELETE FROM members;

-- Insert all coalition members
INSERT INTO members (name, category, description, address, phone, website, image_url, tier, is_active) VALUES
(
  'Salt Lake County Health Department',
  'Healthcare',
  'Offering a long list of programs including tobacco prevention, STD clinic, food protection, and community health initiatives.',
  'Salt Lake City, UT',
  '(385) 468-4100',
  'slco.org/health',
  '/images/partners/salt-lake-health.png',
  'founding_partner',
  true
),
(
  'Intermountain Medical Center',
  'Healthcare',
  'Providing advanced medical care in a friendly and supportive environment for the Murray community.',
  '5121 Cottonwood Street, Murray, UT 84107',
  '(801) 507-7000',
  'intermountainhealthcare.org',
  '/images/partners/intermountain-health.png',
  'founding_partner',
  true
),
(
  'Murray School District',
  'Education',
  'Dedicated to cultivating a safe, supportive, and inspiring environment where every student is empowered to succeed.',
  '5440 S. State Street, Murray, UT 84107',
  '(801) 288-1131',
  'murrayschools.org',
  '/images/partners/murray-school-district.png',
  'founding_partner',
  true
),
(
  'Murray City',
  'Government',
  'Dedicated to preserving our rich history while building a vibrant, connected, and forward-thinking community.',
  '10 East 4800 South, Murray, UT 84107',
  '(801) 270-2429',
  'murray.utah.gov',
  '/images/partners/murray-city.png',
  'founding_partner',
  true
),
(
  'Select Health',
  'Healthcare',
  'Offer plans to serve all members of our community from individuals and families to employers.',
  '5381 Green Street, Murray, UT 84123',
  '(801) 442-7955',
  'selecthealth.org',
  '/images/partners/select-health.png',
  'founding_partner',
  true
),
(
  'Murray Chamber of Commerce',
  'Business',
  'Empowering local businesses, fostering community connections, and driving economic growth in Murray.',
  '141 E 5600 S Suite 300, Murray, UT 84107',
  '(801) 263-2632',
  'themurraychamber.com',
  '/images/partners/murray-chamber.png',
  'partner',
  true
),
(
  'Exchange Club',
  'Nonprofit',
  'Proudly dedicated to serving our community through Unity for Service and prevention of child abuse.',
  'Murray, UT',
  NULL,
  'exchangeclub.org',
  '/images/partners/exchange-club.png',
  'partner',
  true
),
(
  'Murray Rotary',
  'Nonprofit',
  'Dedicated to serving our community through impactful projects, fellowship, and leadership development.',
  'Murray, UT',
  NULL,
  'rotary.org',
  '/images/partners/murray-rotary.png',
  'partner',
  true
),
(
  'Murray Youth Community Council',
  'Youth',
  'A union of student leaders and business partners who come together through networking, internships, and community service.',
  '141 E 5600 S Suite 315, Murray, UT 84107',
  '(801) 808-0830',
  NULL,
  '/images/partners/murray-youth-council.png',
  'partner',
  true
),
(
  'Total Success AI',
  'Technology',
  'Offering training, strategy and implementation for all things AI-related and ensuring a human-first strategy',
  'Sandy, UT',
  '(801) 718-3851',
  'www.totalsuccessai.com',
  '/images/p4p-logo.png',
  'founding_partner',
  true
);
