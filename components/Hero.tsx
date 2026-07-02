'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './animations/FadeIn';
import ScaleIn from './animations/ScaleIn';
import homeContent from '@/content/home.json';

export default function Hero() {
  const { hero } = homeContent;
  // Staff-editable highlight phrase — if it appears in the headline, it gets
  // the orange gradient treatment. Edit in Power Hub → home → headlineHighlight.
  const highlight = hero.headlineHighlight || '';

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Murray Partners 4 Prevention Community"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Orange Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-orange-800/20" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20">
        {/* Badge */}
        <FadeIn direction="up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
            <Heart className="w-4 h-4 text-orange-400" />
            {hero.badge}
          </span>
        </FadeIn>

        {/* Main Mission Statement */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            {highlight && hero.headline.includes(highlight) ? (
              <>
                <span className="text-white">{hero.headline.split(highlight)[0]}</span>
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
                  {highlight}
                </span>
                <span className="text-white">{hero.headline.split(highlight)[1]}</span>
              </>
            ) : (
              <span className="text-white">{hero.headline}</span>
            )}
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
        </FadeIn>

        {/* Tagline Pills */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {hero.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={hero.cta.primary.href}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>{hero.cta.primary.text}</span>
              </motion.button>
            </Link>
            <Link href={hero.cta.secondary.href}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>{hero.cta.secondary.text}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </FadeIn>

        {/* Stats Row */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {hero.stats.map((stat, index) => (
              <ScaleIn key={stat.label} delay={0.8 + index * 0.1}>
                <div className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm mt-2">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
