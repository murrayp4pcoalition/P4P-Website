'use client';

import { motion } from 'framer-motion';
import { Heart, HandHeart, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import getInvolvedContent from '@/content/get-involved.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HandHeart,
  Heart,
  Building2,
};

export default function GetInvolvedPage() {
  const { header, detailsHeading, opportunities, impactStats, cta } = getInvolvedContent;

  return (
    <>
      <PageHeader
        badge={header.badge}
        title={header.title}
        description={header.description}
        breadcrumbs={[
          { label: 'Get Involved' },
        ]}
        backgroundImage={header.backgroundImage}
      />

      {/* Opportunities Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12">
            {opportunities.map((opp, index) => {
              const IconComponent = iconMap[opp.icon] || HandHeart;
              return (
                <FadeIn key={opp.id} direction="up" delay={index * 0.1}>
                  <div id={opp.id} className="scroll-mt-32">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-card p-8 md:p-12"
                    >
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h2 className="text-3xl font-bold text-white">{opp.title}</h2>
                          <p className="mt-4 text-white/70 text-lg leading-relaxed">
                            {opp.description}
                          </p>
                          <Link href="/contact">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="mt-6 btn-glow"
                            >
                              {opp.cta}
                              <ArrowRight className="w-5 h-5" />
                            </motion.button>
                          </Link>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                          <h3 className="text-lg font-semibold text-white mb-4">{detailsHeading}</h3>
                          <ul className="space-y-3">
                            {opp.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-orange-400 text-sm font-bold">{idx + 1}</span>
                                </span>
                                <span className="text-white/70">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-strong rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">{impactStats.title}</h2>
                <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                  {impactStats.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactStats.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">{cta.title}</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                {cta.description}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={cta.primaryButtonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glow"
                  >
                    {cta.primaryButtonText}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href={cta.secondaryButtonLink}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    {cta.secondaryButtonText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
