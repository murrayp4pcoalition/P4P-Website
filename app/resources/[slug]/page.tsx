import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Mail,
  // Whitelist of icons usable in resource JSON's `icon` field.
  // Add new entries here AND in the iconMap below to expose them to staff.
  BookOpen,
  Heart,
  HandHeart,
  Users,
  Calendar,
  Phone,
  MessageCircle,
  Music,
  Target,
  MapPin,
  PenTool,
  Lightbulb,
  Sun,
  Smartphone,
  Shield,
  Info,
  Star,
  Award,
  Check,
  Clock,
  Globe,
  Briefcase,
  GraduationCap,
  Building2,
  Sparkles,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import resourcesIndex from '@/content/resources-index.json';

// ─── Icon whitelist ─────────────────────────────────────────────────────────
// Staff can reference these by name in JSON (e.g. "icon": "Heart").
// Unknown names fall back to BookOpen.
const iconMap = {
  BookOpen, Heart, HandHeart, Users, Calendar, Phone, MessageCircle, Music,
  Target, MapPin, PenTool, Lightbulb, Sun, Smartphone, Shield, Info, Star,
  Award, Check, Clock, Globe, Briefcase, GraduationCap, Building2, Sparkles,
} as const;
type IconName = keyof typeof iconMap;

function ResourceIcon({ name, className }: { name?: string; className?: string }) {
  const Icon = (name && (iconMap as Record<string, typeof BookOpen>)[name]) || BookOpen;
  return <Icon className={className} />;
}

// ─── JSON shape ─────────────────────────────────────────────────────────────
type Cta = { label: string; href: string };

type RichTextSection = { type: 'richText'; heading?: string; body: string };
type FeatureGridSection = {
  type: 'featureGrid';
  heading?: string;
  items: Array<{ icon?: string; title: string; description: string }>;
};
type StatsSection = {
  type: 'stats';
  heading?: string;
  items: Array<{ number: string; label: string }>;
};
type CalloutSection = {
  type: 'callout';
  heading?: string;
  body?: string;
  cta?: Cta;
};
type Section = RichTextSection | FeatureGridSection | StatsSection | CalloutSection;

type ResourcePageContent = {
  metadata?: { title?: string; description?: string };
  hero: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    primaryCta?: Cta;
    secondaryCta?: Cta;
  };
  sections?: Section[];
  contact?: { email?: string };
};

type ResourceEntry = {
  slug: string;
  navLabel: string;
  cardTitle?: string;
  cardDescription?: string;
  kind?: string;
  visible: boolean;
  order: number;
};

// ─── Build-time wiring ──────────────────────────────────────────────────────
// Pre-render every resource listed in the index (regardless of `visible`,
// so hidden resources are still reachable directly).
export function generateStaticParams() {
  return (resourcesIndex.resources as ResourceEntry[])
    .filter((r) => r.kind !== 'bespoke')
    .map((r) => ({ slug: r.slug }));
}

async function loadResource(slug: string): Promise<ResourcePageContent | null> {
  try {
    // Dynamic import keeps the bundle lean and lets us treat a missing file
    // as a 404 instead of a build error.
    const mod = await import(`@/content/resources/${slug}.json`);
    return (mod.default ?? mod) as ResourcePageContent;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await loadResource(slug);
  if (!data) return {};
  return {
    title: data.metadata?.title || data.hero.headline,
    description: data.metadata?.description || data.hero.subheadline,
  };
}

// ─── Section renderers ──────────────────────────────────────────────────────
function RichText({ section }: { section: RichTextSection }) {
  // Plain text with paragraph breaks. (Markdown is intentionally out of scope.)
  const paragraphs = section.body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  return (
    <FadeIn direction="up">
      <div>
        {section.heading && (
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {section.heading}
          </h2>
        )}
        <div className="space-y-4 text-white/80 text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function FeatureGrid({ section }: { section: FeatureGridSection }) {
  return (
    <div>
      {section.heading && (
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
            {section.heading}
          </h2>
        </FadeIn>
      )}
      <StaggerChildren staggerDelay={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="glass-card h-full p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mb-4">
                <ResourceIcon name={item.icon} className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

function Stats({ section }: { section: StatsSection }) {
  return (
    <div>
      {section.heading && (
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
            {section.heading}
          </h2>
        </FadeIn>
      )}
      <StaggerChildren
        staggerDelay={0.08}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {section.items.map((stat, i) => (
          <StaggerItem key={i}>
            <div className="glass-card p-8 rounded-2xl border border-white/10 text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="mt-3 text-white/80">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}

function Callout({ section }: { section: CalloutSection }) {
  return (
    <FadeIn direction="up">
      <div className="glass-card p-8 lg:p-12 rounded-2xl border border-orange-500/30 text-center">
        {section.heading && (
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{section.heading}</h2>
        )}
        {section.body && (
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">{section.body}</p>
        )}
        {section.cta && (
          <div className="mt-8">
            <CtaLink cta={section.cta} variant="primary" />
          </div>
        )}
      </div>
    </FadeIn>
  );
}

function CtaLink({ cta, variant }: { cta: Cta; variant: 'primary' | 'secondary' }) {
  const isExternal = /^https?:\/\//i.test(cta.href);
  const className =
    variant === 'primary'
      ? 'btn-glow inline-flex items-center gap-2'
      : 'btn-secondary inline-flex items-center gap-2';

  if (isExternal) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
        <ExternalLink className="w-4 h-4" />
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default async function GenericResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // The bespoke parenting-suite route owns its slug; refuse to render the
  // generic template there even if a JSON file ever appears.
  if (slug === 'parenting-suite') notFound();

  const data = await loadResource(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-[#1C1C1C] aurora-bg">
      <PageHeader
        badge={data.hero.eyebrow || 'Resource'}
        title={data.hero.headline}
        description={data.hero.subheadline}
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: data.hero.headline },
        ]}
      />

      {(data.hero.primaryCta || data.hero.secondaryCta) && (
        <section className="relative -mt-4 pb-8">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <FadeIn direction="up">
              <div className="flex flex-wrap justify-center gap-4">
                {data.hero.primaryCta && (
                  <CtaLink cta={data.hero.primaryCta} variant="primary" />
                )}
                {data.hero.secondaryCta && (
                  <CtaLink cta={data.hero.secondaryCta} variant="secondary" />
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {data.sections && data.sections.length > 0 && (
        <div className="relative">
          {data.sections.map((section, i) => (
            <section key={i} className="py-12 lg:py-16">
              <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                {section.type === 'richText' && <RichText section={section} />}
                {section.type === 'featureGrid' && <FeatureGrid section={section} />}
                {section.type === 'stats' && <Stats section={section} />}
                {section.type === 'callout' && <Callout section={section} />}
              </div>
            </section>
          ))}
        </div>
      )}

      {data.contact?.email && (
        <section className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
            <FadeIn direction="up">
              <div className="glass-card p-8 rounded-2xl border border-white/10 inline-flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-white/80">
                  Questions? Email{' '}
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-orange-300 hover:text-orange-200 underline"
                  >
                    {data.contact.email}
                  </a>
                </span>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
