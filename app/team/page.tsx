'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';
import teamContent from '@/content/team.json';

export default function TeamPage() {
  const { header, officers, keyLeaders, boardMembers, cta } = teamContent;

  return (
    <>
      <PageHeader
        badge={header.badge}
        title={header.title}
        description={header.description}
        breadcrumbs={[
          { label: 'Team' },
        ]}
        backgroundImage={header.backgroundImage}
      />

      {/* Coalition Officers */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">{officers.sectionTitle}</h2>
            <p className="mt-4 text-white/60">{officers.sectionDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.members.map((member, index) => (
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

      {/* Key Leaders */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">{keyLeaders.sectionTitle}</h2>
            <p className="mt-4 text-white/60">{keyLeaders.sectionDescription}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyLeaders.members.map((leader, index) => (
              <motion.div
                key={`${leader.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="glass-card p-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-white">
                    {leader.name.split(' ').filter(n => !['Councilwoman', 'Councilman', 'Mayor', 'Sgt', 'Sgt.', 'Pro', 'Tem'].includes(n)).map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{leader.name}</h3>
                <p className="text-orange-400 text-sm font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">{boardMembers.sectionTitle}</h2>
            <p className="mt-4 text-white/60">{boardMembers.sectionDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {boardMembers.members.map((name, index) => (
                <motion.div
                  key={`${name}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.01 }}
                  className="text-center py-2"
                >
                  <span className="text-white/80 text-sm hover:text-orange-400 transition-colors">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white">{cta.title}</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={cta.primaryButtonLink}>
                <button className="btn-glow">{cta.primaryButtonText}</button>
              </Link>
              <Link href={cta.secondaryButtonLink}>
                <button className="btn-secondary">{cta.secondaryButtonText}</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
