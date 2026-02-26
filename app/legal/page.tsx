'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { FileText, Shield, Accessibility } from 'lucide-react';
import legalContent from '@/content/legal.json';

type TabType = 'terms' | 'privacy' | 'accessibility';

export default function LegalPage() {
  const { header, effectiveDate, terms, privacy, accessibility, footer } = legalContent;
  const [activeTab, setActiveTab] = useState<TabType>('terms');

  const tabs = [
    { id: 'terms' as TabType, label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy' as TabType, label: 'Privacy Policy', icon: Shield },
    { id: 'accessibility' as TabType, label: 'Accessibility', icon: Accessibility },
  ];

  return (
    <>
      <PageHeader
        badge={header.badge}
        title={header.title}
        description={header.description}
        breadcrumbs={[
          { label: 'Legal Policies' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            {/* Organization Info */}
            <div className="text-center mb-8">
              <p className="text-white/60 text-sm">
                <strong>Website:</strong> {header.website}
              </p>
              <p className="text-white/60 text-sm">
                <strong>Address:</strong> {header.address}
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="glass-card p-8 md:p-12">
              <p className="text-white/60 text-sm mb-8">
                <strong>Effective Date:</strong> {effectiveDate}
              </p>

              {/* Terms and Conditions */}
              {activeTab === 'terms' && (
                <div className="prose prose-invert max-w-none space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">{terms.title}</h2>
                  <p className="text-white/70 leading-relaxed mb-6">{terms.intro}</p>

                  {terms.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                      <p className="text-white/70 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Privacy Policy */}
              {activeTab === 'privacy' && (
                <div className="prose prose-invert max-w-none space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">{privacy.title}</h2>
                  <p className="text-white/70 leading-relaxed mb-6">{privacy.intro}</p>

                  {privacy.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>

                      {section.content && (
                        <p className="text-white/70 leading-relaxed">{section.content}</p>
                      )}

                      {section.subsections && section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="ml-4 mt-3">
                          <h4 className="text-lg font-medium text-orange-300 mb-2">{sub.title}</h4>
                          <p className="text-white/70 leading-relaxed">{sub.content}</p>
                        </div>
                      ))}

                      {section.items && (
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mt-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Accessibility Statement */}
              {activeTab === 'accessibility' && (
                <div className="prose prose-invert max-w-none space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-4">{accessibility.title}</h2>
                  <p className="text-white/70 leading-relaxed mb-6">{accessibility.intro}</p>

                  {accessibility.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>

                      {section.content && (
                        <p className="text-white/70 leading-relaxed">{section.content}</p>
                      )}

                      {section.items && (
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mt-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {section.contactInfo && (
                        <div className="mt-4 p-4 bg-white/5 rounded-xl">
                          <p className="text-white/70">
                            <strong className="text-white">Email:</strong> {section.contactInfo.email}
                          </p>
                          <p className="text-white/70">
                            <strong className="text-white">Mail:</strong> {section.contactInfo.address}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Footer Note */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm italic">{footer}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
