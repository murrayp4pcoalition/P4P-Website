// /lib/parenting-suite-config.ts
// ═══════════════════════════════════════════════════════════════════════════════
// GIFT CONNECT Parenting Suite — TRANSITIONAL SHIM
//
// @deprecated — Read content from `content/parenting-suite.json` instead.
// Staff edit this file via Power Hub (/power-hub/dashboard/content/parenting-suite).
//
// This shim re-exports the JSON values so any leftover importers don't break.
// Remove after one clean deploy / once no other files import from here.
// ═══════════════════════════════════════════════════════════════════════════════

import parentingSuiteContent from '@/content/parenting-suite.json';

// Flat shape preserved for backward compatibility with the original config object.
export const parentingSuiteConfig = {
  appStoreUrl: parentingSuiteContent.links.appStoreUrl,
  googlePlayUrl: parentingSuiteContent.links.googlePlayUrl,
  sammieVoiceUrl: parentingSuiteContent.links.sammieVoiceUrl,
  sammieTextUrl: parentingSuiteContent.links.sammieTextUrl,
  genoUrl: parentingSuiteContent.links.genoUrl,
  staceyUrl: parentingSuiteContent.links.staceyUrl,
  vimeoVideoId: parentingSuiteContent.video.vimeoVideoId,
  privacyPolicyUrl: parentingSuiteContent.links.privacyPolicyUrl,
  giftConnectMainSite: parentingSuiteContent.links.giftConnectMainSite,
  supportEmail: parentingSuiteContent.contact.supportEmail,
  p4pContactEmail: parentingSuiteContent.contact.p4pContactEmail,
  smsEnabled: parentingSuiteContent.sms.enabled,
  smsShortCode: parentingSuiteContent.sms.shortCode,
  smsKeyword: parentingSuiteContent.sms.keyword,
};

// GIFT CONNECT Brand Colors — NOT staff-editable, stay in code.
export const giftConnectColors = {
  navy: '#1E3560',          // Primary - backgrounds, headings, buttons
  navyLight: '#2A4070',     // Secondary navy for panels
  persimmon: '#E8682A',     // Accent - CTAs, highlights, stat numbers
  persimmonAlt: '#EC6338',  // Alternate persimmon
  gold: '#F5A623',          // Tertiary accent only - NOT on white (fails AA)
  goldAlt: '#FBBA33',       // Alternate gold
  charcoal: '#222222',      // Body text
  offWhite: '#FAFAF7',      // Page background
  white: '#FFFFFF',
};

// Page Metadata
export const parentingSuiteMetadata = parentingSuiteContent.metadata;

// Feature list for "Everything Included" section
export const featuresList = parentingSuiteContent.features;

// Stats for "Why Birth to Three" section
export const birthToThreeStats = parentingSuiteContent.stats;
