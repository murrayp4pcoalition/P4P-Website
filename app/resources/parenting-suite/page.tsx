'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MessageCircle,
  Music,
  BookOpen,
  Target,
  MapPin,
  PenTool,
  Lightbulb,
  Sun,
  Smartphone,
  Users,
  ExternalLink,
  Mail,
  Shield,
  Info,
  AlertCircle,
  ChevronDown,
  Play,
} from 'lucide-react';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';

// Config and data
import {
  parentingSuiteConfig,
  giftConnectColors,
  featuresList,
  birthToThreeStats,
} from '@/lib/parenting-suite-config';

// Phone mockup component with real images
import PhoneMockup from '@/components/parenting-suite/PhoneMockup';

// Real QR code component
import QRCode from '@/components/parenting-suite/QRCode';

// Icon mapping for features
const iconMap: Record<string, typeof MessageCircle> = {
  MessageCircle,
  Music,
  BookOpen,
  Target,
  MapPin,
  PenTool,
  Lightbulb,
  Sun,
  Smartphone,
  Users,
};


// Video Thumbnail with Play Button
function VideoThumbnail({ videoId, thumbnailSrc }: { videoId: string; thumbnailSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div style={{ paddingTop: '56.25%', position: 'relative' }}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="GIFT CONNECT Parenting Suite Overview"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#E8682A]/50"
      aria-label="Play video"
    >
      {/* Thumbnail Image */}
      <div style={{ paddingTop: '56.25%', position: 'relative' }}>
        <img
          src={thumbnailSrc}
          alt="GIFT CONNECT Parenting Suite video thumbnail"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8682A] flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d45a1c]">
            <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* "Watch Video" text */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
            Watch Video
          </span>
        </div>
      </div>
    </button>
  );
}

export default function ParentingSuitePage() {
  const config = parentingSuiteConfig;
  const colors = giftConnectColors;

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.offWhite }}>
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION A — HERO (Full-width background image)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/parenting-suite/hero-bg.jpg"
            alt="Parent with child using smartphone"
            className="w-full h-full object-cover"
          />
          {/* Navy gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3560]/95 via-[#1E3560]/85 to-[#1E3560]/70" />
          {/* Persimmon accent glow */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#E8682A]/20 to-transparent" />
        </div>

        {/* Persimmon accent band at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2 z-10"
          style={{ backgroundColor: colors.persimmon }}
        />

        {/* Content - Two column layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text + CTAs */}
            <div>
              <FadeIn direction="left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  GIFT CONNECT Parenting Suite
                </h1>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <p className="mt-6 text-xl sm:text-2xl text-white/90">
                  Free AI-powered parenting support for Murray families. Available 24/7 on any phone, in 80+ languages.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.15}>
                <p className="mt-4 text-white/70">
                  Brought to Murray by Partners 4 Prevention, in partnership with GIFT CONNECT.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn direction="left" delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={config.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white text-[#1E3560] hover:bg-gray-100 hover:-translate-y-1 shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download on the App Store
                  </a>
                  <a
                    href={config.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:-translate-y-1"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </FadeIn>

              {/* Tertiary link */}
              <FadeIn direction="left" delay={0.25}>
                <a
                  href="#meet-the-tools"
                  className="mt-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  Try it in your browser
                  <ChevronDown className="w-4 h-4" />
                </a>
              </FadeIn>
            </div>

            {/* Right column: Video with Thumbnail */}
            <FadeIn direction="right" delay={0.2}>
              <VideoThumbnail
                videoId={config.vimeoVideoId}
                thumbnailSrc="/images/parenting-suite/video-thumbnail.png"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION B — ABOUT THE PARENTING SUITE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <FadeIn direction="up">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center"
              style={{ color: colors.navy }}
            >
              What is the Parenting Suite?
            </h2>

            <div className="mt-8 space-y-6" style={{ color: colors.charcoal }}>
              <p className="text-lg leading-relaxed">
                The GIFT CONNECT Parenting Suite is a free mobile app built for parents and caregivers of children from birth to age three. It delivers trusted, evidence-based parenting support on demand, day or night, without the guesswork of an internet search.
              </p>
              <p className="text-lg leading-relaxed">
                The Suite includes a 24/7 voice assistant, a personalized lullaby generator, a custom storybook creator, developmental milestone tracking, a local resource finder, and more. It is live and in daily use by families across Delaware, with Utah rolling out now through Partners 4 Prevention.
              </p>
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 pl-6 py-4"
              style={{ borderLeft: `4px solid ${colors.persimmon}` }}
            >
              <p
                className="text-xl font-medium italic"
                style={{ color: colors.navy }}
              >
                80% of a child&apos;s brain develops by age three. The Parenting Suite helps Murray families make every one of those days count.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION C — DOWNLOAD (PRIMARY CTA BLOCK)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: colors.navy }}
              >
                Get the Parenting Suite
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Scan the QR code or tap the badge to download. The app is free.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* App Store */}
            <FadeIn direction="left" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <a
                  href={config.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-14 mx-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <div className="mt-6">
                  <QRCode url={config.appStoreUrl} label="iPhone & iPad" />
                </div>
              </div>
            </FadeIn>

            {/* Google Play */}
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <a
                  href={config.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-14 mx-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <div className="mt-6">
                  <QRCode url={config.googlePlayUrl} label="Android phones & tablets" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* SMS Access (conditional - hidden in v1) */}
          {config.smsEnabled && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                No smartphone? Text <strong>{config.smsKeyword}</strong> to <strong>{config.smsShortCode}</strong> to use Sammie over SMS.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION D — MEET THE TOOLS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="meet-the-tools" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: colors.navy }}
              >
                Meet the tools that power the Suite
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Try any of them right in your browser. No download required.
              </p>
            </div>
          </FadeIn>

          {/* Four flagship cards in 2x2 grid */}
          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Sammie Voice */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col"
              >
                <PhoneMockup
                  imageSrc="/images/parenting-suite/sammie-phone.png"
                  alt="Sammie voice assistant app screenshot"
                />
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Sammie — Your 24/7 parenting voice assistant
                </h3>
                <p className="mt-3 text-gray-600 flex-grow">
                  Ask Sammie anything about your baby or toddler, sleep, feeding, tantrums, milestones, safety, and get a calm, science-backed answer in seconds. Speak to Sammie in more than 80 languages, any time of day or night.
                </p>
                <a
                  href={config.sammieVoiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: colors.persimmon }}
                >
                  Talk to Sammie
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  Voice-to-voice · 80+ languages · Free
                </p>
              </motion.div>
            </StaggerItem>

            {/* Card 2: Geno */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col"
              >
                <PhoneMockup
                  imageSrc="/images/parenting-suite/geno-phone.png"
                  alt="Geno lullaby generator app screenshot"
                />
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Geno — Lullabies made just for your child
                </h3>
                <p className="mt-3 text-gray-600 flex-grow">
                  Geno creates a personalized lullaby using your child&apos;s name, turning bath time, bedtime, and car rides into moments that calm, bond, and build the brain. Music is one of the most powerful tools we have for early development.
                </p>
                <a
                  href={config.genoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: colors.persimmon }}
                >
                  Create a Lullaby
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  Personalized · Downloadable · Free
                </p>
              </motion.div>
            </StaggerItem>

            {/* Card 3: Stacey */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col"
              >
                <PhoneMockup
                  imageSrc="/images/parenting-suite/stacy-phone.png"
                  alt="Stacey storybook creator app screenshot"
                />
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Stacey — Custom illustrated storybooks
                </h3>
                <p className="mt-3 text-gray-600 flex-grow">
                  Stacey writes and illustrates a one-of-a-kind storybook starring your child. Each story models the Six Loving Habits, speak, sing, play, read, count, and serve and return, and can be read aloud in multiple languages.
                </p>
                <a
                  href={config.staceyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: colors.persimmon }}
                >
                  Make a Storybook
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  Illustrated PDF · Multilingual · Free
                </p>
              </motion.div>
            </StaggerItem>

            {/* Card 4: Sammie Text */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col"
              >
                <PhoneMockup
                  imageSrc="/images/parenting-suite/text-phone.png"
                  alt="Sammie text chat app screenshot"
                />
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Sammie Text — Chat when you need quiet
                </h3>
                <p className="mt-3 text-gray-600 flex-grow">
                  The same science-backed parenting support as voice Sammie, in a text-chat interface. Perfect when the baby is sleeping and you need quick, quiet answers without waking anyone.
                </p>
                <a
                  href={config.sammieTextUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: colors.persimmon }}
                >
                  Chat with Sammie
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  Text chat · 80+ languages · Free
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION E — WATCH THE VIDEO
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ color: colors.navy }}
              >
                See the Parenting Suite in action
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Watch this video to see Sammie being used in a parenting class in Delaware.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div style={{ paddingTop: '56.25%', position: 'relative' }}>
                <iframe
                  src="https://www.youtube.com/embed/RS9H9bVrS_M"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Sammie being used in a parenting class in Delaware"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION F — EVERYTHING INCLUDED
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
              style={{ color: colors.navy }}
            >
              Everything included in the Parenting Suite
            </h2>
          </FadeIn>

          <StaggerChildren staggerDelay={0.05} className="grid md:grid-cols-2 gap-6">
            {featuresList.map((feature) => {
              const Icon = iconMap[feature.icon] || MessageCircle;
              return (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${colors.navy}10` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: colors.navy }} />
                    </div>
                    <div>
                      <h3
                        className="font-semibold"
                        style={{ color: colors.navy }}
                      >
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION G — WHY BIRTH TO THREE MATTERS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Explainer */}
            <FadeIn direction="left">
              <div>
                <h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: colors.navy }}
                >
                  Why birth to three?
                </h2>
                <div className="mt-6 space-y-4" style={{ color: colors.charcoal }}>
                  <p className="text-lg leading-relaxed">
                    The first three years are the single most important window for brain development in a human life. A child&apos;s brain forms more than one million new neural connections every second during this time. What a caregiver says, sings, reads, and does together with a child in those years shapes health, learning, and relationships for a lifetime.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The Parenting Suite exists to make sure no Murray family goes through those years without support.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Stats */}
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                {birthToThreeStats.map((stat) => (
                  <div
                    key={stat.number}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div
                      className="text-4xl sm:text-5xl font-bold"
                      style={{ color: colors.navy }}
                    >
                      {stat.number}
                    </div>
                    <p
                      className="mt-2 font-medium"
                      style={{ color: colors.persimmon }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}

                <p className="text-sm text-gray-500 mt-4">
                  Sources: Center on the Developing Child, Harvard University; American Academy of Pediatrics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION H — SUPPORT, PRIVACY, DISCLAIMER
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
            {/* Panel 1: About This Page */}
            <StaggerItem>
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5" style={{ color: colors.navy }} />
                  <h4 className="font-semibold" style={{ color: colors.navy }}>
                    About this page
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This page is maintained by Murray Partners 4 Prevention to connect Murray families to the GIFT CONNECT Parenting Suite. The Suite is a program of GIFT CONNECT, a 501(c)(3) nonprofit dedicated to early childhood development.
                </p>
              </div>
            </StaggerItem>

            {/* Panel 2: Support */}
            <StaggerItem>
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5" style={{ color: colors.navy }} />
                  <h4 className="font-semibold" style={{ color: colors.navy }}>
                    Support
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Questions about the app? Email{' '}
                  <a
                    href={`mailto:${config.supportEmail}`}
                    className="font-medium hover:underline"
                    style={{ color: colors.persimmon }}
                  >
                    {config.supportEmail}
                  </a>
                  .<br />
                  Questions about P4P programs in Murray? Email{' '}
                  <a
                    href={`mailto:${config.p4pContactEmail}`}
                    className="font-medium hover:underline"
                    style={{ color: colors.persimmon }}
                  >
                    {config.p4pContactEmail}
                  </a>
                  .<br />
                  We respond within 2 business days.
                </p>
              </div>
            </StaggerItem>

            {/* Panel 3: Privacy */}
            <StaggerItem>
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5" style={{ color: colors.navy }} />
                  <h4 className="font-semibold" style={{ color: colors.navy }}>
                    Privacy
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Parenting Suite does not sell personal information and does not share it with advertisers. Read the full GIFT CONNECT privacy policy at{' '}
                  <a
                    href={config.privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                    style={{ color: colors.persimmon }}
                  >
                    {config.privacyPolicyUrl.replace('https://', '')}
                  </a>
                  .
                </p>
              </div>
            </StaggerItem>

            {/* Panel 4: Disclaimer */}
            <StaggerItem>
              <div className="bg-gray-50 rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5" style={{ color: colors.navy }} />
                  <h4 className="font-semibold" style={{ color: colors.navy }}>
                    Disclaimer
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Parenting Suite is intended for educational and supportive purposes only. It is not a substitute for professional medical, psychological, or developmental advice. Always consult a qualified healthcare provider for medical questions. In an emergency, call 911.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION I — CLOSING CTA + FOOTER
          ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Bring the Parenting Suite home today.
            </h2>
            <p className="mt-4 text-xl text-white/80">
              It&apos;s free, it&apos;s in your language, and it&apos;s ready when you are.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={config.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-white text-[#1E3560] hover:bg-gray-100 hover:-translate-y-1 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
              <a
                href={config.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>

            {/* Learn more link */}
            <a
              href={config.giftConnectMainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              Learn more about GIFT CONNECT
              <ExternalLink className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* P4P Footer */}
      <Footer />
    </main>
  );
}
