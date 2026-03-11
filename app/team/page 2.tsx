'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Coalition Officers - Placeholder data (to be filled in)
const coalitionOfficers = [
  {
    name: 'Coalition Chair',
    title: 'Chair',
    subtitle: 'Leadership',
    bio: 'Leading the Murray Partners 4 Prevention coalition to build a stronger, safer community for all Murray residents.',
    email: 'director@murrayp4p.com',
    image: null,
  },
  {
    name: 'Vice Chair',
    title: 'Vice Chair',
    subtitle: 'Operations',
    bio: 'Supporting coalition leadership and overseeing day-to-day operations and community outreach programs.',
    email: 'director@murrayp4p.com',
    image: null,
  },
  {
    name: 'Secretary',
    title: 'Secretary',
    subtitle: 'Communications',
    bio: 'Managing coalition communications, meeting minutes, and community correspondence.',
    email: 'director@murrayp4p.com',
    image: null,
  },
  {
    name: 'Treasurer',
    title: 'Treasurer',
    subtitle: 'Finance',
    bio: 'Overseeing coalition finances and ensuring responsible stewardship of community resources.',
    email: 'director@murrayp4p.com',
    image: null,
  },
];

// Coalition Members - Placeholder data
const coalitionMembers = [
  {
    name: 'Member Representative',
    title: 'Community Representative',
    organization: 'Salt Lake County Health Department',
    bio: 'Representing public health initiatives and tobacco prevention programs.',
    email: 'director@murrayp4p.com',
  },
  {
    name: 'Member Representative',
    title: 'Education Representative',
    organization: 'Murray School District',
    bio: 'Advocating for student safety and youth empowerment programs.',
    email: 'director@murrayp4p.com',
  },
  {
    name: 'Member Representative',
    title: 'City Representative',
    organization: 'Murray City',
    bio: 'Coordinating city resources and community development initiatives.',
    email: 'director@murrayp4p.com',
  },
  {
    name: 'Member Representative',
    title: 'Healthcare Representative',
    organization: 'Intermountain Medical Center',
    bio: 'Supporting community health and wellness programs.',
    email: 'director@murrayp4p.com',
  },
  {
    name: 'Member Representative',
    title: 'Business Representative',
    organization: 'Murray Chamber of Commerce',
    bio: 'Connecting local businesses with community prevention initiatives.',
    email: 'director@murrayp4p.com',
  },
  {
    name: 'Member Representative',
    title: 'Youth Representative',
    organization: 'Murray Youth Community Council',
    bio: 'Representing youth voices and student leadership development.',
    email: 'director@murrayp4p.com',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        badge="Our Team"
        title="Coalition Leadership"
        description="Meet the dedicated community leaders who volunteer their time and expertise to guide Murray Partners 4 Prevention."
        breadcrumbs={[
          { label: 'Team' },
        ]}
      />

      {/* Coalition Officers */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Coalition Officers</h2>
            <p className="mt-4 text-white/60">Our leadership team provides strategic direction and governance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coalitionOfficers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-orange-400 text-sm font-medium">{member.title}</p>
                {member.subtitle && (
                  <p className="text-white/60 text-xs font-medium mt-1">{member.subtitle}</p>
                )}
                <p className="mt-4 text-white/60 text-sm line-clamp-3">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/60" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coalition Members */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Coalition Members</h2>
            <p className="mt-4 text-white/60">Representatives from our partner organizations working together for Murray.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coalitionMembers.map((person, index) => (
              <motion.div
                key={`${person.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-orange-400 font-medium">{person.title}</p>
                <p className="text-white/60 text-sm font-medium mt-1">{person.organization}</p>
                <p className="mt-4 text-white/60">{person.bio}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 mt-4 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Coalition CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white">Interested in Joining?</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              We welcome new members and partner organizations. Contact us to learn about opportunities to join the coalition and make a difference in Murray.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="btn-glow">Contact Us</button>
              </Link>
              <Link href="/about">
                <button className="btn-secondary">Learn More About Us</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
