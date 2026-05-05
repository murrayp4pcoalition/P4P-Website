import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import resourcesIndex from '@/content/resources-index.json';

type ResourceEntry = {
  slug: string;
  navLabel: string;
  cardTitle?: string;
  cardDescription?: string;
  kind?: string;
  visible: boolean;
  order: number;
};

export const metadata = {
  title: 'Resources — Murray Partners 4 Prevention',
  description:
    'Resources, tools, and programs for Murray families — curated by Murray Partners 4 Prevention.',
};

export default function ResourcesHubPage() {
  const visibleResources = (resourcesIndex.resources as ResourceEntry[])
    .filter((r) => r.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-[#1C1C1C] aurora-bg">
      <PageHeader
        badge="Resources"
        title="Resources for Murray Families"
        description="Tools, programs, and partner offerings curated by Murray Partners 4 Prevention to help every family thrive."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {visibleResources.length === 0 ? (
            <FadeIn direction="up">
              <div className="text-center text-white/70 py-12">
                <BookOpen className="w-12 h-12 mx-auto text-orange-400/60 mb-4" />
                <p className="text-lg">More resources are on the way. Check back soon.</p>
              </div>
            </FadeIn>
          ) : (
            <StaggerChildren
              staggerDelay={0.08}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {visibleResources.map((resource) => (
                <StaggerItem key={resource.slug}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group glass-card block h-full p-6 lg:p-7 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 transition-colors">
                      <BookOpen className="w-6 h-6 text-orange-400" />
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {resource.cardTitle || resource.navLabel}
                    </h2>

                    {resource.cardDescription && (
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        {resource.cardDescription}
                      </p>
                    )}

                    <div className="mt-6 inline-flex items-center gap-2 text-orange-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
