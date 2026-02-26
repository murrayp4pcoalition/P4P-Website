'use client';

import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import Header from '@/components/power-hub/Header';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Code2,
  Globe,
  FileCode,
  Layout,
  Loader2,
  X,
  Save,
  RefreshCw,
  AlertCircle,
  Database
} from 'lucide-react';

interface CustomScript {
  id: string;
  name: string;
  location: 'header' | 'footer';
  scope: 'sitewide' | 'page';
  page_path: string | null;
  content: string;
  is_active: boolean;
}

export default function ScriptsPage() {
  const [scripts, setScripts] = useState<CustomScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [editingScript, setEditingScript] = useState<CustomScript | null>(null);
  const [error, setError] = useState('');
  const [configured, setConfigured] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    location: 'header' as 'header' | 'footer',
    scope: 'sitewide' as 'sitewide' | 'page',
    page_path: '',
    content: '',
    is_active: true
  });

  useEffect(() => {
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      setConfigured(false);
      setLoading(false);
      return;
    }
    fetchScripts();
  }, []);

  async function fetchScripts() {
    setLoading(true);
    setError('');
    try {
      const { data, error } = await supabase
        .from('custom_scripts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Error loading scripts: ' + error.message);
      } else {
        setScripts(data || []);
      }
    } catch (err) {
      setError('Failed to connect to database');
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      page_path: formData.scope === 'page' ? formData.page_path : null
    };

    if (editingScript) {
      const { error } = await supabase
        .from('custom_scripts')
        .update(payload)
        .eq('id', editingScript.id);

      if (error) setError('Error updating script: ' + error.message);
    } else {
      const { error } = await supabase
        .from('custom_scripts')
        .insert([payload]);

      if (error) setError('Error adding script: ' + error.message);
    }

    resetForm();
    await fetchScripts();
  }

  async function toggleActive(script: CustomScript) {
    const { error } = await supabase
      .from('custom_scripts')
      .update({ is_active: !script.is_active })
      .eq('id', script.id);

    if (error) {
      setError('Error toggling status: ' + error.message);
    } else {
      setScripts(scripts.map(s => s.id === script.id ? { ...s, is_active: !s.is_active } : s));
    }
  }

  async function deleteScript(id: string) {
    if (!confirm('Are you sure you want to delete this script? This cannot be undone.')) return;

    const { error } = await supabase
      .from('custom_scripts')
      .delete()
      .eq('id', id);

    if (error) {
      setError('Error deleting script: ' + error.message);
    } else {
      setScripts(scripts.filter(s => s.id !== id));
    }
  }

  function startEdit(script: CustomScript) {
    setEditingScript(script);
    setFormData({
      name: script.name,
      location: script.location,
      scope: script.scope,
      page_path: script.page_path || '',
      content: script.content,
      is_active: script.is_active
    });
    setIsAddingMode(true);
  }

  function resetForm() {
    setFormData({
      name: '',
      location: 'header',
      scope: 'sitewide',
      page_path: '',
      content: '',
      is_active: true
    });
    setEditingScript(null);
    setIsAddingMode(false);
  }

  const filteredScripts = scripts.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show configuration needed message
  if (!configured) {
    return (
      <div>
        <Header title="Custom Scripts" subtitle="Manage GTM, Analytics, Meta Pixel, and other tracking scripts" />
        <div className="p-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Database size={24} className="text-amber-600 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800">Supabase Configuration Required</h3>
                <p className="text-amber-700 mt-2">
                  To use the Scripts feature, you need to connect a Supabase database.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border border-amber-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">Setup Steps:</p>
                  <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                    <li>Create a project at <a href="https://supabase.com" target="_blank" className="text-[#F27A21] hover:underline">supabase.com</a></li>
                    <li>Go to Project Settings → API</li>
                    <li>Copy your Project URL and anon key</li>
                    <li>Add to <code className="bg-gray-100 px-1 rounded">.env.local</code>:
                      <pre className="mt-2 p-2 bg-gray-50 rounded text-xs overflow-x-auto">
{`NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`}
                      </pre>
                    </li>
                    <li>Run the SQL schema from <code className="bg-gray-100 px-1 rounded">lib/supabase.ts</code></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header title="Custom Scripts" subtitle="Manage GTM, Analytics, Meta Pixel, and other tracking scripts" />

      <div className="p-8">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAddingMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors"
            >
              <Plus size={18} />
              Add Script
            </button>
            <button
              onClick={fetchScripts}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search scripts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] w-64"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Code2 size={20} className="text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 font-medium">About Custom Scripts</p>
              <p className="text-sm text-blue-600 mt-1">
                Add tracking scripts like Google Tag Manager, Meta Pixel, or custom analytics.
                Scripts can be placed in the header or footer, and can run sitewide or on specific pages.
              </p>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6">
            <AlertCircle size={20} />
            <p>{error}</p>
            <button onClick={() => setError('')} className="ml-auto text-red-500 hover:text-red-700">
              <X size={18} />
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && scripts.length === 0 && (
          <div className="text-center py-12">
            <Loader2 size={48} className="mx-auto text-[#F27A21] animate-spin mb-4" />
            <p className="text-gray-500">Loading scripts...</p>
          </div>
        )}

        {/* Scripts Table */}
        {!loading && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Script</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Scope</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredScripts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No scripts found. Add your first tracking script above.
                    </td>
                  </tr>
                ) : (
                  filteredScripts.map((script) => (
                    <tr key={script.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center">
                            <Code2 size={18} className="text-orange-600" />
                          </div>
                          <div className="font-medium text-gray-900">{script.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm">
                          {script.location === 'header' ? (
                            <>
                              <Layout size={14} className="text-blue-500" />
                              <span className="text-gray-600">Header</span>
                            </>
                          ) : (
                            <>
                              <Layout size={14} className="text-green-500 rotate-180" />
                              <span className="text-gray-600">Footer</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          {script.scope === 'sitewide' ? (
                            <>
                              <Globe size={14} className="text-purple-500" />
                              <span>Sitewide</span>
                            </>
                          ) : (
                            <>
                              <FileCode size={14} className="text-orange-500" />
                              <span>{script.page_path}</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleActive(script)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                            script.is_active
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {script.is_active ? <Eye size={12} /> : <EyeOff size={12} />}
                          {script.is_active ? 'Active' : 'Muted'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => startEdit(script)}
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-[#F27A21] transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteScript(script.id)}
                            className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Add/Edit Modal */}
        {isAddingMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-8 relative">
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Code2 size={28} className="text-[#F27A21]" />
                {editingScript ? 'Edit Script' : 'Add New Script'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Script Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21]"
                    placeholder="e.g. Google Tag Manager"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21]"
                    >
                      <option value="header">Header (Top of &lt;head&gt;)</option>
                      <option value="footer">Footer (Bottom of &lt;body&gt;)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scope</label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value as any })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21]"
                    >
                      <option value="sitewide">Sitewide (Every Page)</option>
                      <option value="page">Page Specific</option>
                    </select>
                  </div>
                </div>

                {formData.scope === 'page' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Page Path</label>
                    <input
                      required
                      type="text"
                      value={formData.page_path}
                      onChange={(e) => setFormData({ ...formData, page_path: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21]"
                      placeholder="e.g. /contact"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Script Content (HTML/JS)</label>
                  <textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] font-mono text-sm"
                    placeholder="<script>...</script>"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors disabled:opacity-50 font-medium"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    {editingScript ? 'Update Script' : 'Save Script'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
