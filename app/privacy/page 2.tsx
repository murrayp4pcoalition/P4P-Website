'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        breadcrumbs={[
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-12">
              <p className="text-white/60 text-sm mb-8">
                <strong>Effective Date:</strong> January 1, 2026
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="text-white/70 leading-relaxed">
                    Murray Partners 4 Prevention (&ldquo;P4P,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (murrayp4p.com) or interact with our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li>Fill out a contact form</li>
                    <li>Sign up to volunteer</li>
                    <li>Make a donation</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Register for an event</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed mt-4">
                    This information may include your name, email address, phone number, mailing address, and any other information you choose to provide.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
                  <p className="text-white/70 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We may use the information we collect for various purposes, including to:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you information about our programs, events, and initiatives</li>
                    <li>Process donations and provide tax receipts</li>
                    <li>Coordinate volunteer activities</li>
                    <li>Improve our website and services</li>
                    <li>Analyze trends and gather demographic information</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraudulent or illegal activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li><strong>With Coalition Partners:</strong> We may share information with our coalition member organizations for collaborative programs and initiatives</li>
                    <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., email delivery, payment processing)</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                    <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
                  <p className="text-white/70 leading-relaxed">
                    Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us understand how you use our website. You can control cookies through your browser settings, but disabling cookies may affect certain features of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                  <p className="text-white/70 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li><strong>Access:</strong> You may request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions</li>
                    <li><strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed mt-4">
                    To exercise these rights, please contact us at director@murrayp4p.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
                  <p className="text-white/70 leading-relaxed">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
                  <p className="text-white/70 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-white/70 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Effective Date&rdquo; at the top. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                  <p className="text-white/70 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-white/5 rounded-xl">
                    <p className="text-white font-semibold">Murray Partners 4 Prevention</p>
                    <p className="text-white/70">Email: director@murrayp4p.com</p>
                    <p className="text-white/70">Website: murrayp4p.com</p>
                  </div>
                </section>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
