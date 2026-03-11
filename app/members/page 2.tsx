'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, Phone, Globe, Filter, Grid, List, Star, Building2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

// Member organization type definition
interface Member {
  id: number;
  name: string;
  category: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  image?: string;
  tier: 'founding' | 'partner' | 'supporter';
}

// Coalition member organizations - PLACEHOLDER DATA
// Replace with actual member data from screenshots
const members: Member[] = [
  // FOUNDING PARTNERS (Core coalition members)
  {
    id: 1,
    name: 'Salt Lake County Health Department',
    category: 'Healthcare',
    description: 'Offering a long list of programs including tobacco prevention, STD clinic, food protection, and community health initiatives.',
    address: 'Salt Lake City, UT',
    phone: '(385) 468-4100',
    website: 'slco.org/health',
    image: '/images/members/slco-health.png',
    tier: 'founding',
  },
  {
    id: 2,
    name: 'Intermountain Medical Center',
    category: 'Healthcare',
    description: 'Providing advanced medical care in a friendly and supportive environment for the Murray community.',
    address: '5121 Cottonwood Street, Murray, UT 84107',
    phone: '(801) 507-7000',
    website: 'intermountainhealthcare.org',
    image: '/images/members/intermountain.png',
    tier: 'founding',
  },
  {
    id: 3,
    name: 'Murray School District',
    category: 'Education',
    description: 'Dedicated to cultivating a safe, supportive, and inspiring environment where every student is empowered to succeed.',
    address: '5440 S. State Street, Murray, UT 84107',
    phone: '(801) 288-1131',
    website: 'murrayschools.org',
    image: '/images/members/murray-schools.png',
    tier: 'founding',
  },
  {
    id: 4,
    name: 'Murray City',
    category: 'Government',
    description: 'Dedicated to preserving our rich history while building a vibrant, connected, and forward-thinking community.',
    address: '10 East 4800 South, Murray, UT 84107',
    phone: '(801) 270-2429',
    website: 'murray.utah.gov',
    image: '/images/members/murray-city.png',
    tier: 'founding',
  },
  {
    id: 5,
    name: 'Select Health',
    category: 'Healthcare',
    description: 'Offer plans to serve all members of our community from individuals and families to employers.',
    address: '5381 Green Street, Murray, UT 84123',
    phone: '(801) 442-7955',
    website: 'selecthealth.org',
    image: '/images/members/selecthealth.png',
    tier: 'founding',
  },

  // PARTNERS
  {
    id: 6,
    name: 'Murray Chamber of Commerce',
    category: 'Business',
    description: 'Empowering local businesses, fostering community connections, and driving economic growth in Murray.',
    address: '141 E 5600 S Suite 300, Murray, UT 84107',
    phone: '(801) 263-2632',
    website: 'themurraychamber.com',
    image: '/images/members/macc.png',
    tier: 'partner',
  },
  {
    id: 7,
    name: 'Exchange Club',
    category: 'Nonprofit',
    description: 'Proudly dedicated to serving our community through Unity for Service and prevention of child abuse.',
    website: 'exchangeclub.org',
    image: '/images/members/exchange-club.png',
    tier: 'partner',
  },
  {
    id: 8,
    name: 'Murray Rotary',
    category: 'Nonprofit',
    description: 'Dedicated to serving our community through impactful projects, fellowship, and leadership development.',
    website: 'rotary.org',
    image: '/images/members/rotary.png',
    tier: 'partner',
  },
  {
    id: 9,
    name: 'Murray Youth Community Council',
    category: 'Youth',
    description: 'A union of student leaders and business partners who come together through networking, internships, and community service.',
    address: '141 E 5600 S Suite 315, Murray, UT 84107',
    phone: '(801) 808-0830',
    image: '/images/members/mycc.png',
    tier: 'partner',
  },

  // SUPPORTERS - Placeholder for additional members
  // Add more members here as needed from screenshots
];

// Get unique categories
const allCategories = ['All Categories', ...Array.from(new Set(members.map(m => m.category))).sort()];

// Tier display names and colors (P4P orange theme)
const tierInfo = {
  founding: { label: 'Founding Partner', color: 'from-orange-500 to-orange-600', textColor: 'text-orange-300', bgColor: 'bg-orange-500/20' },
  partner: { label: 'Partner', color: 'from-amber-500 to-amber-600', textColor: 'text-amber-300', bgColor: 'bg-amber-500/20' },
  supporter: { label: 'Supporter', color: 'from-slate-500 to-slate-600', textColor: 'text-white/70', bgColor: 'bg-white/10' },
};

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTier, setSelectedTier] = useState<'all' | 'founding' | 'partner' | 'supporter'>('all');

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || member.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || member.tier === selectedTier;
    return matchesSearch && matchesCategory && matchesTier;
  });

  // Sort: founding partners first, then partners, then supporters
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    const tierOrder = { founding: 0, partner: 1, supporter: 2 };
    return tierOrder[a.tier] - tierOrder[b.tier];
  });

  return (
    <>
      <PageHeader
        badge="Coalition Members"
        title="Member Organizations"
        description="Meet the dedicated organizations working together to build a stronger, safer Murray community."
        breadcrumbs={[
          { label: 'Members' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search and Filters */}
          <FadeIn direction="up">
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search organizations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-glass pl-12 w-full"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-glass select-glass pl-12 w-full lg:w-64"
                  >
                    {allCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-orange-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-orange-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tier Filter */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(['all', 'founding', 'partner', 'supporter'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTier === tier
                        ? tier === 'all' ? 'bg-white/20 text-white' : `${tierInfo[tier as keyof typeof tierInfo]?.bgColor} ${tierInfo[tier as keyof typeof tierInfo]?.textColor}`
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {tier === 'all' ? 'All Members' : tierInfo[tier]?.label}
                    {tier !== 'all' && (
                      <span className="ml-2 text-xs">
                        ({members.filter(m => m.tier === tier).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Results Count */}
          <p className="text-white/60 mb-6">
            Showing {sortedMembers.length} of {members.length} organizations
          </p>

          {/* Members Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                className={`glass-card overflow-hidden group ${viewMode === 'list' ? 'flex' : ''}`}
              >
                {/* Member Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-32 sm:w-48 shrink-0' : 'h-40'} overflow-hidden bg-gradient-to-br from-orange-600/20 to-orange-500/10`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-orange-400/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  {/* Tier Badge on Image */}
                  {member.tier !== 'supporter' && (
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${tierInfo[member.tier].bgColor} ${tierInfo[member.tier].textColor} flex items-center gap-1`}>
                      <Star className="w-3 h-3" />
                      {tierInfo[member.tier].label}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium text-orange-300 bg-orange-500/20 rounded-full mb-2">
                    {member.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-white/60 text-sm line-clamp-2">
                    {member.description}
                  </p>

                  <div className="mt-3 space-y-1.5">
                    {member.address && (
                      <div className="flex items-start gap-2 text-sm text-white/50">
                        <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{member.address}</span>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                        <a href={`tel:${member.phone}`} className="hover:text-white transition-colors">{member.phone}</a>
                      </div>
                    )}
                    {member.website && (
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                        <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate">
                          {member.website}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Visit Website Button */}
                  {member.website && (
                    <a
                      href={`https://${member.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {sortedMembers.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">No organizations found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white">Want to Join the Coalition?</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Organizations of all types are welcome to join Murray Partners 4 Prevention. Together, we can build a stronger, safer community.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-8 btn-glow"
              >
                Become a Member
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
