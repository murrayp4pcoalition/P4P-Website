'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './animations/FadeIn';

export default function ContactCTA() {
  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn direction="up">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-orange-600/90" />
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    Ready to Make a Difference?
                  </h3>
                  <p className="mt-4 text-lg text-white/90">
                    Connect with Murray Partners 4 Prevention and help build a stronger, safer community together.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-orange-600 bg-white shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                    >
                      <Mail className="w-5 h-5" />
                      Contact Us
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/20 border border-white/30 hover:bg-white/30 transition-all whitespace-nowrap"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
