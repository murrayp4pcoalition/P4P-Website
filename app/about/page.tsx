'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Users, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import aboutContent from '@/content/about.json';

// Icon mapping for dynamic icons
const iconMap: Record<string, typeof Heart> = {
  Heart,
  Users,
  Shield,
  Target,
};

export default function AboutPage() {
  const { pageHeader, whoWeAre, values, valuesSection, focusAreas, focusAreasSection, cta } = aboutContent;

  return (
    <>
      <PageHeader
        badge={pageHeader.badge}
        title={pageHeader.title}
        description={pageHeader.description}
        breadcrumbs={[
          { label: 'About Us' },
        ]}
        backgroundImage={pageHeader.backgroundImage}
      />

      {/* Mission & Vision Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                  {whoWeAre.sectionLabel}
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                  {whoWeAre.title}
                </h2>
                {whoWeAre.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-6 text-white/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href={whoWeAre.primaryButton.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      {whoWeAre.primaryButton.text}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link href={whoWeAre.secondaryButton.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary"
                    >
                      {whoWeAre.secondaryButton.text}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{whoWeAre.visionTitle}</h3>
                <p className="text-white/70 leading-relaxed text-lg italic">
                  &ldquo;{whoWeAre.vision}&rdquo;
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-3">
                    {whoWeAre.visionTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                {valuesSection.label}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                {valuesSection.title}
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="glass-card p-6 h-full"
                  >
                    <div className="feature-icon">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                {focusAreasSection.label}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                {focusAreasSection.title}
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                {focusAreasSection.description}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <FadeIn key={area.title} direction="up" delay={index * 0.1}>
                <div className="glass-card p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                    <p className="text-white/60 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white">{cta.title}</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                {cta.description}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={cta.primaryButton.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glow"
                  >
                    {cta.primaryButton.text}
                  </motion.button>
                </Link>
                <Link href={cta.secondaryButton.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    {cta.secondaryButton.text}
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
