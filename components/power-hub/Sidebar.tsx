'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileJson,
  Image as ImageIcon,
  Users,
  Code,
  Calendar,
  Sparkles,
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/power-hub/dashboard', icon: LayoutDashboard },
  { name: 'Content', href: '/power-hub/dashboard/content', icon: FileJson },
  { name: 'Media', href: '/power-hub/dashboard/media', icon: ImageIcon },
  { name: 'Members', href: '/power-hub/dashboard/members', icon: Users },
  { name: 'Scripts', href: '/power-hub/dashboard/scripts', icon: Code },
  { name: 'Calendar', href: '/power-hub/dashboard/calendar', icon: Calendar },
  { name: 'AI Assist', href: '/power-hub/dashboard/ai', icon: Sparkles },
  { name: 'Settings', href: '/power-hub/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('p4p_power_hub_auth');
    router.push('/power-hub');
  };

  return (
    <aside className="w-64 bg-[#F27A21] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/power-hub/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/images/p4p-logo.png"
              alt="Partners 4 Prevention"
              width={40}
              height={40}
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg">Power Hub</h1>
            <p className="text-xs text-white/60">Partners 4 Prevention</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-white/60">P4P Coalition</p>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
