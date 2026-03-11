'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Try to get credentials from Supabase first
      let storedUsername = 'p4padmin'; // Default
      let storedPassword = 'p4p2026'; // Default

      try {
        const { data } = await supabase
          .from('portal_settings')
          .select('setting_value')
          .eq('setting_key', 'credentials')
          .single();

        if (data?.setting_value) {
          storedUsername = data.setting_value.username || storedUsername;
          storedPassword = data.setting_value.password || storedPassword;
        }
      } catch {
        // If Supabase fails, use defaults (this is fine for first-time setup)
        console.log('Using default credentials (Supabase not configured or empty)');
      }

      // Check credentials
      if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('p4p_power_hub_auth', 'true');
        router.push('/power-hub/dashboard');
      } else {
        setError('Invalid username or password');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-[#F27A21] to-[#F9A45A] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/p4p-logo.png"
                alt="Partners 4 Prevention"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">P4P Power Hub</h1>
            <p className="text-gray-500 mt-2">Content Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all pr-12 text-gray-900"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F27A21] hover:bg-[#F9A45A] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              Powered by <span className="font-medium text-[#F27A21]">Total Success AI</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
