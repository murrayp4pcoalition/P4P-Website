import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Hub | Partners 4 Prevention',
  description: 'Content Management System for P4P',
  robots: 'noindex, nofollow',
};

export default function PowerHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 bg-white overflow-auto"
      style={{ zIndex: 99999 }}
    >
      {children}
    </div>
  );
}
