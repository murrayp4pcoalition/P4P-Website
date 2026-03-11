'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
} from 'lucide-react';

const footerLinks = {
  'Navigation': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Members', href: '/members' },
    { label: 'Events', href: '/events' },
  ],
  'Get Involved': [
    { label: 'Volunteer', href: '/get-involved#volunteer' },
    { label: 'Donate', href: '/get-involved#donate' },
    { label: 'Partner With Us', href: '/get-involved#partner' },
    { label: 'Contact', href: '/contact' },
  ],
  'Resources': [
    { label: 'Member Directory', href: '/members' },
    { label: 'Events Calendar', href: '/events' },
    { label: 'Partner Organizations', href: '/#partners' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/MurrayP4P', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/murrayp4p', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/murrayp4p', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com/company/murray-p4p', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@murrayp4p', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer-glass relative overflow-hidden w-full">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Image
                  src="/images/p4p-logo.png"
                  alt="Murray Partners 4 Prevention"
                  width={200}
                  height={54}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
            </Link>

            <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-xs">
              A connected and compassionate Murray where all residents are empowered to thrive, grow, and build a stronger, safer community together.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:director@murrayp4p.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-orange-400" />
                director@murrayp4p.com
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-orange-500/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Murray Partners 4 Prevention. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
