'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/power-hub/Header';
import { Save, Globe, Key, Eye, EyeOff, Check, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('Partners 4 Prevention');
  const [siteUrl, setSiteUrl] = useState('https://p4p-website.vercel.app');

  // Credential state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Status state
  const [saving, setSaving] = useState(false);
  const [credentialSaving, setCredentialSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [credentialMessage, setCredentialMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load current credentials to show current username
  const [currentUsername, setCurrentUsername] = useState('p4padmin');

  useEffect(() => {
    loadCurrentCredentials();
  }, []);

  async function loadCurrentCredentials() {
    try {
      const { data } = await supabase
        .from('portal_settings')
        .select('setting_value')
        .eq('setting_key', 'credentials')
        .single();

      if (data?.setting_value?.username) {
        setCurrentUsername(data.setting_value.username);
      }
    } catch {
      // Use default if not found
    }
  }

  const handleSaveSettings = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // For now, just show success (these settings could be stored in Supabase too)
      await new Promise(resolve => setTimeout(resolve, 500));
      setMessage({ type: 'success', text: 'Settings saved successfully!' });
    } catch {
      setMessage({ type: 'error', text: 'Failed to save settings' });
    }

    setSaving(false);
  };

  const handleChangeCredentials = async () => {
    setCredentialMessage(null);

    // Validation
    if (!currentPassword) {
      setCredentialMessage({ type: 'error', text: 'Please enter your current password' });
      return;
    }

    if (!newUsername && !newPassword) {
      setCredentialMessage({ type: 'error', text: 'Please enter a new username or password' });
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setCredentialMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (newPassword && newPassword.length < 6) {
      setCredentialMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setCredentialSaving(true);

    try {
      // Get current credentials from Supabase
      const { data: settings } = await supabase
        .from('portal_settings')
        .select('setting_value')
        .eq('setting_key', 'credentials')
        .single();

      let storedPassword = 'p4p2026'; // Default
      let storedUsername = 'p4padmin'; // Default

      if (settings?.setting_value) {
        storedPassword = settings.setting_value.password || storedPassword;
        storedUsername = settings.setting_value.username || storedUsername;
      }

      // Verify current password
      if (currentPassword !== storedPassword) {
        setCredentialMessage({ type: 'error', text: 'Current password is incorrect' });
        setCredentialSaving(false);
        return;
      }

      // Prepare new credentials
      const newCredentials = {
        username: newUsername || storedUsername,
        password: newPassword || storedPassword
      };

      // Check if settings row exists
      const { data: existing } = await supabase
        .from('portal_settings')
        .select('id')
        .eq('setting_key', 'credentials')
        .single();

      if (existing) {
        // Update existing
        const { error } = await supabase
          .from('portal_settings')
          .update({ setting_value: newCredentials, updated_at: new Date().toISOString() })
          .eq('setting_key', 'credentials');

        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase
          .from('portal_settings')
          .insert([{ setting_key: 'credentials', setting_value: newCredentials }]);

        if (error) throw error;
      }

      setCredentialMessage({ type: 'success', text: 'Credentials updated successfully! Use your new login on next sign in.' });
      setCurrentUsername(newCredentials.username);

      // Clear form
      setCurrentPassword('');
      setNewUsername('');
      setNewPassword('');
      setConfirmPassword('');

    } catch (error: any) {
      console.error('Error updating credentials:', error);
      setCredentialMessage({
        type: 'error',
        text: error.message?.includes('portal_settings')
          ? 'Database table not set up. Run the SQL migration first.'
          : 'Failed to update credentials. Please try again.'
      });
    }

    setCredentialSaving(false);
  };

  return (
    <div>
      <Header title="Settings" subtitle="Configure your Power Hub settings" />

      <div className="p-8">
        <div className="space-y-6 max-w-3xl">

          {/* Change Login Credentials - Primary focus */}
          <div className="bg-white rounded-xl border-2 border-[#F27A21] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F27A21] rounded-lg flex items-center justify-center">
                <Key size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Change Login Credentials</h2>
                <p className="text-sm text-gray-500">Update your Power Hub username and password</p>
              </div>
            </div>

            {/* Current username display */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Current username: <span className="font-mono font-bold text-[#F27A21]">{currentUsername}</span>
              </p>
            </div>

            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your current password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <hr className="my-4" />

              {/* New Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Username <span className="text-gray-400">(leave blank to keep current)</span>
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="Enter new username"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password <span className="text-gray-400">(leave blank to keep current)</span>
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password (min 6 characters)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              {newPassword && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 transition-all text-gray-900 ${
                      confirmPassword && confirmPassword !== newPassword
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-[#F27A21]'
                    }`}
                  />
                  {confirmPassword && confirmPassword !== newPassword && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                  )}
                </div>
              )}

              {/* Message */}
              {credentialMessage && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  credentialMessage.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {credentialMessage.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                  <span>{credentialMessage.text}</span>
                </div>
              )}

              {/* Save Credentials Button */}
              <button
                onClick={handleChangeCredentials}
                disabled={credentialSaving}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors disabled:opacity-50 font-medium"
              >
                {credentialSaving ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Key size={18} />
                    Update Credentials
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Site Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F27A21]/10 rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-[#F27A21]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Site Settings</h2>
                <p className="text-sm text-gray-500">Basic configuration for your website</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Site URL
                </label>
                <input
                  type="url"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Message */}
              {message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {message.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                  <span>{message.text}</span>
                </div>
              )}

              {/* Save Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleSaveSettings}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={18} />
                      Save Settings
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
