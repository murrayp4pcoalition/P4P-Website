'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/power-hub/Header';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  MapPin,
  Loader2,
  X,
  Upload,
  ImageIcon,
  RefreshCw,
  AlertCircle,
  Save,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';

// P4P Tier display names and colors
const tierInfo = {
  founding: { label: 'Founding Partner', color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
  partner: { label: 'Partner', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  supporter: { label: 'Supporter', color: 'bg-gray-100 text-gray-700', border: 'border-gray-200' },
};

// Organization categories for coalition members
const categories = [
  'Healthcare',
  'Education',
  'Government',
  'Business',
  'Nonprofit',
  'Youth',
  'Technology',
  'Faith-Based',
  'Law Enforcement',
  'Mental Health',
  'Social Services',
  'Recreation',
  'Arts & Culture',
  'Environmental',
  'Housing',
  'Senior Services',
  'Civic Organization',
  'Media',
  'Financial Services',
  'Legal Services',
  'Other'
];

interface Member {
  id: number;
  name: string;
  category: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  image?: string;
  tier: 'founding' | 'partner' | 'supporter';
}

interface MembersContent {
  header: {
    badge: string;
    title: string;
    description: string;
    backgroundImage: string;
  };
  members: Member[];
  tierInfo: Record<string, { label: string }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function MembersPage() {
  const [content, setContent] = useState<MembersContent | null>(null);
  const [sha, setSha] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingMode, setIsAddingMode] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [uploading, setUploading] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    address: '',
    phone: '',
    website: '',
    tier: 'supporter' as 'founding' | 'partner' | 'supporter',
    image: ''
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/power-hub/content?file=members.json');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load members');
      }

      setContent(data.content);
      setSha(data.sha);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load members');
    }
    setLoading(false);
  }

  async function saveMembers(updatedMembers: Member[]) {
    if (!content) return;

    setSaving(true);
    setError('');
    try {
      const updatedContent = {
        ...content,
        members: updatedMembers
      };

      const response = await fetch('/api/power-hub/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: 'members.json',
          content: updatedContent,
          sha: sha
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to save members');
      }

      // Update local state with new SHA
      setContent(updatedContent);
      setSha(result.newSha);
      setSuccess('Members saved and deployed!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save members');
    }
    setSaving(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content) return;

    const newMember: Member = {
      id: editingMember?.id || Math.max(0, ...content.members.map(m => m.id)) + 1,
      name: formData.name,
      category: formData.category,
      description: formData.description,
      address: formData.address || undefined,
      phone: formData.phone || undefined,
      website: formData.website || undefined,
      image: formData.image || undefined,
      tier: formData.tier
    };

    let updatedMembers: Member[];
    if (editingMember) {
      updatedMembers = content.members.map(m => m.id === editingMember.id ? newMember : m);
    } else {
      updatedMembers = [...content.members, newMember];
    }

    await saveMembers(updatedMembers);
    resetForm();
  }

  async function deleteMember(id: number) {
    if (!content) return;
    if (!confirm('Are you sure you want to delete this member?')) return;

    const updatedMembers = content.members.filter(m => m.id !== id);
    await saveMembers(updatedMembers);
  }

  function startEdit(member: Member) {
    setEditingMember(member);
    setFormData({
      name: member.name,
      category: member.category,
      description: member.description,
      address: member.address || '',
      phone: member.phone || '',
      website: member.website || '',
      tier: member.tier,
      image: member.image || ''
    });
    setLogoPreview(member.image || null);
    setIsAddingMode(true);
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.');
      return;
    }

    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);

      const response = await fetch('/api/power-hub/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      setFormData({ ...formData, image: result.url });
      setLogoPreview(result.url);
    } catch (error: any) {
      alert('Error uploading logo: ' + error.message);
    } finally {
      setUploading(false);
    }
  }

  function resetForm() {
    setFormData({
      name: '',
      category: '',
      description: '',
      address: '',
      phone: '',
      website: '',
      tier: 'supporter',
      image: ''
    });
    setEditingMember(null);
    setLogoPreview(null);
    setIsAddingMode(false);
  }

  const members = content?.members || [];
  const filteredMembers = members.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort: founding first, then partner, then supporter
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    const tierOrder = { founding: 0, partner: 1, supporter: 2 };
    return tierOrder[a.tier] - tierOrder[b.tier];
  });

  return (
    <div>
      <Header title="Coalition Members" subtitle="Manage P4P coalition member organizations" />

      <div className="p-8">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAddingMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors"
            >
              <Plus size={18} />
              Add Member
            </button>
            <button
              onClick={fetchMembers}
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
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] w-64 text-gray-900 bg-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 mb-6">
            <CheckCircle size={20} />
            <p>{success}</p>
          </div>
        )}

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
        {loading && members.length === 0 && (
          <div className="text-center py-12">
            <Loader2 size={48} className="mx-auto text-[#F27A21] animate-spin mb-4" />
            <p className="text-gray-500">Loading members...</p>
          </div>
        )}

        {/* Members Table */}
        {!loading && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Organization</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Tier</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sortedMembers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                      No members found. Add your first coalition member above.
                    </td>
                  </tr>
                ) : (
                  sortedMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={32}
                                height={32}
                                className="object-contain"
                                unoptimized
                              />
                            ) : (
                              <ImageIcon size={16} className="text-gray-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{member.name}</div>
                            {member.address && (
                              <div className="text-xs text-gray-400 flex items-center gap-1">
                                <MapPin size={10} />
                                {member.address.split(',')[0]}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${tierInfo[member.tier]?.color || 'bg-gray-100 text-gray-700'}`}>
                          {tierInfo[member.tier]?.label || member.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => startEdit(member)}
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-[#F27A21] transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteMember(member.id)}
                            disabled={saving}
                            className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors disabled:opacity-50"
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

        {/* Saving Indicator */}
        {saving && (
          <div className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-[#F27A21] text-white rounded-lg shadow-lg">
            <Loader2 size={18} className="animate-spin" />
            Saving & Deploying...
          </div>
        )}

        {/* Add/Edit Modal */}
        {isAddingMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-8 relative">
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingMember ? 'Edit Member' : 'Add New Member'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Logo Upload */}
                <div className="p-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl">
                  <label className="block text-sm font-medium text-gray-700 mb-4">Organization Logo</label>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative group">
                      {logoPreview ? (
                        <>
                          <img src={logoPreview} alt="Preview" className="w-full h-full object-contain p-2" />
                          <button
                            type="button"
                            onClick={() => { setLogoPreview(null); setFormData({ ...formData, image: '' }); }}
                            className="absolute inset-0 bg-red-500/80 items-center justify-center hidden group-hover:flex"
                          >
                            <X size={20} className="text-white" />
                          </button>
                        </>
                      ) : (
                        <ImageIcon size={24} className="text-gray-300" />
                      )}
                      {uploading && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <Loader2 size={20} className="text-[#F27A21] animate-spin" />
                        </div>
                      )}
                    </div>
                    <label className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <Upload size={16} className="text-[#F27A21]" />
                      <span className="text-sm font-medium">{logoPreview ? 'Change' : 'Upload Logo'}</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                      />
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white placeholder:text-gray-400"
                      placeholder="e.g. Murray City Health Department"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white"
                    >
                      <option value="">Select a category...</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] resize-y text-gray-900 bg-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Describe the organization and their role in P4P. You can write as much as needed - this field is expandable..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white placeholder:text-gray-400"
                    placeholder="123 Main St, Murray, UT 84107"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white placeholder:text-gray-400"
                      placeholder="(801) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website (Optional)</label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white placeholder:text-gray-400"
                      placeholder="example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Tier</label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900 bg-white"
                  >
                    <option value="supporter">Supporter</option>
                    <option value="partner">Partner</option>
                    <option value="founding">Founding Partner</option>
                  </select>
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
                    disabled={saving}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors disabled:opacity-50 font-medium"
                  >
                    {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    {editingMember ? 'Update Member' : 'Add Member'}
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
