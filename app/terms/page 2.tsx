'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our website."
        breadcrumbs={[
          { label: 'Terms & Conditions' },
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-white/70 leading-relaxed">
                    By accessing and using the Murray Partners 4 Prevention (&ldquo;P4P&rdquo;) website (murrayp4p.com), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. About Murray Partners 4 Prevention</h2>
                  <p className="text-white/70 leading-relaxed">
                    Murray Partners 4 Prevention is a community coalition dedicated to building a stronger, safer Murray. We work collaboratively with residents, organizations, and local leaders to address community challenges through prevention, education, and support.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Use of Website</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                    <li>Harassing or causing distress or inconvenience to any other user</li>
                    <li>Transmitting obscene or offensive content</li>
                    <li>Disrupting the normal flow of dialogue within our website</li>
                    <li>Using the website for any unlawful purpose</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                  <p className="text-white/70 leading-relaxed">
                    All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Murray Partners 4 Prevention or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. User Submissions</h2>
                  <p className="text-white/70 leading-relaxed">
                    Any information you submit to us through contact forms, volunteer applications, or other means becomes the property of Murray Partners 4 Prevention. We reserve the right to use such information for any lawful purpose, subject to our Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Links to Third-Party Websites</h2>
                  <p className="text-white/70 leading-relaxed">
                    Our website may contain links to third-party websites that are not owned or controlled by Murray Partners 4 Prevention. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party websites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
                  <p className="text-white/70 leading-relaxed">
                    This website is provided &ldquo;as is&rdquo; without any representations or warranties, express or implied. Murray Partners 4 Prevention makes no representations or warranties in relation to this website or the information and materials provided on this website. We do not warrant that the website will be constantly available or available at all.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                  <p className="text-white/70 leading-relaxed">
                    Murray Partners 4 Prevention will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special, or consequential loss; or for any business losses, loss of revenue, income, profits, or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
                  <p className="text-white/70 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Murray Partners 4 Prevention, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses relating to or arising out of your use of or inability to use the website, your violation of any terms of this agreement, or your violation of any rights of a third party.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Modifications to Terms</h2>
                  <p className="text-white/70 leading-relaxed">
                    Murray Partners 4 Prevention reserves the right to modify these terms at any time. We will notify users of any changes by updating the &ldquo;Effective Date&rdquo; at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                  <p className="text-white/70 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the State of Utah, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                  <p className="text-white/70 leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us at:
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
