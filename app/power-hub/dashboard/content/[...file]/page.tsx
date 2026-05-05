'use client';

//==============================================================================
// POWER HUB CMS - Content Editor Page
//==============================================================================
// Edits content JSON files via GitHub API.
// Save = Commit to GitHub = Auto-deploy via Vercel
//==============================================================================

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/power-hub/Header';
import {
  ArrowLeft,
  Save,
  Loader2,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  Rocket,
  GitCommit,
  HelpCircle,
  Image,
  Users,
  UserPlus,
  Edit3,
  X,
} from 'lucide-react';
import Link from 'next/link';

// Context-specific help content for different files
const FILE_HELP: Record<string, { title: string; sections: Array<{ icon: React.ReactNode; title: string; steps: string[] }> }> = {
  team: {
    title: '👥 Team Page Management Guide',
    sections: [
      {
        icon: <Users size={18} className="text-orange-500" />,
        title: 'Coalition Staff (with photos)',
        steps: [
          'Find the "officers" → "members" section below',
          'Click the orange "Add New Member" button to add a person',
          'Fill in: name, title, subtitle, bio, email',
          'For the image field: Go to Media Library, upload a photo, copy the URL, paste it here',
          'To remove: Click the red trash icon next to the person',
        ],
      },
      {
        icon: <UserPlus size={18} className="text-blue-500" />,
        title: 'Key Leaders (with photos)',
        steps: [
          'Find the "key Leaders" → "members" section below',
          'Click "Add New Member" to add a leader',
          'Fill in: name, role',
          'For the image field: Go to Media Library, upload a photo, copy the URL, paste it here',
          'Leave image empty (null) to show initials instead',
        ],
      },
      {
        icon: <Users size={18} className="text-green-500" />,
        title: 'Board Members (names only)',
        steps: [
          'Find the "board Members" → "members" section below',
          'This is a simple list of names (no photos)',
          'Click "Add New Member" to add a name',
          'Type the full name in the text field',
          'To remove: Click the red trash icon',
        ],
      },
      {
        icon: <Image size={18} className="text-purple-500" />,
        title: 'Adding Photos',
        steps: [
          'Go to Media Library (sidebar menu)',
          'Upload the person\'s photo',
          'Click "Copy URL" on the uploaded image',
          'Come back here and paste the URL in the "image" field',
          'Tip: Use square photos for best results',
        ],
      },
    ],
  },
  events: {
    title: '📅 Events Page Management Guide',
    sections: [
      {
        icon: <Plus size={18} className="text-orange-500" />,
        title: 'Adding Events',
        steps: [
          'Find the "upcoming" section for future events',
          'Click "Add New Event" button',
          'Fill in: title, date, time, location, description',
          'For badge: use "Event", "Meeting", "Workshop", etc.',
          'The registrationUrl is optional - add a link if people need to sign up',
        ],
      },
      {
        icon: <Trash2 size={18} className="text-red-500" />,
        title: 'Removing Past Events',
        steps: [
          'Find events that have already happened',
          'Click the red trash icon to remove them',
          'Or move them to the "past" section if you want to keep a record',
        ],
      },
    ],
  },
  members: {
    title: '🏢 Member Organizations Guide',
    sections: [
      {
        icon: <Plus size={18} className="text-orange-500" />,
        title: 'Adding Organizations',
        steps: [
          'Find the "organizations" section',
          'Click "Add New Member"',
          'Fill in: name, category (e.g., "Healthcare", "Education")',
          'Add website URL and description',
        ],
      },
    ],
  },
  'parenting-suite': {
    title: '👶 GIFT CONNECT Parenting Suite Page',
    sections: [
      {
        icon: <Edit3 size={18} className="text-orange-500" />,
        title: 'Update App Store & Tool Links',
        steps: [
          'Open the "links" section below',
          'Update appStoreUrl / googlePlayUrl when the apps move',
          'sammieVoiceUrl, sammieTextUrl, genoUrl, staceyUrl point at each web tool',
          'Save & Deploy when done — the change is live in ~5 minutes',
        ],
      },
      {
        icon: <Plus size={18} className="text-blue-500" />,
        title: 'Swap the Vimeo Video',
        steps: [
          'Open the "video" section',
          'Paste the new Vimeo video ID (numbers only, no URL) into vimeoVideoId',
          'Example: from https://vimeo.com/1171939931 the ID is 1171939931',
        ],
      },
      {
        icon: <Users size={18} className="text-green-500" />,
        title: 'Edit the Features List',
        steps: [
          'Open the "features" section to add, remove, or reword features',
          'Each feature has: icon (name), title, description',
          'Allowed icon names: MessageCircle, Music, BookOpen, Target, MapPin, PenTool, Lightbulb, Sun, Smartphone, Users',
          'Use the orange "Add New Item" button to add a new feature',
        ],
      },
      {
        icon: <HelpCircle size={18} className="text-purple-500" />,
        title: 'Edit Stats & Contact Info',
        steps: [
          '"stats" controls the three big numbers in the "Why Birth to Three" section',
          '"contact" controls the support email shown on the page',
          '"sms" — flip enabled to true once a short code is live, then fill shortCode & keyword',
          '"metadata" controls the browser tab title and SEO description',
        ],
      },
    ],
  },
  'resources-index': {
    title: '📚 Resources — Add, Hide, Reorder',
    sections: [
      {
        icon: <Plus size={18} className="text-orange-500" />,
        title: 'Add a New Resource Page',
        steps: [
          'Step 1 — In the "resources" list below, click "Add New Item"',
          'Step 2 — Fill in: slug (e.g. youth-programs), navLabel (Resources dropdown text), cardTitle, cardDescription',
          'Step 3 — Set kind to "generic", visible to true, order to where it should appear',
          'Step 4 — Save & Deploy this file',
          'Step 5 — Back on the Content list, you\'ll now create the page itself: it lives at content/resources/<slug>.json',
          'Step 6 — Until that JSON file exists, the page will 404. The Content list will show it once added.',
        ],
      },
      {
        icon: <Edit3 size={18} className="text-blue-500" />,
        title: 'Hide or Reorder',
        steps: [
          'Set visible to false to remove a resource from the nav and the /resources hub (the page itself stays reachable directly)',
          'Change order to reorder the dropdown — lower numbers appear first',
          'Edit navLabel to rename the link in the nav (e.g. change "Parenting" to something else)',
        ],
      },
      {
        icon: <Trash2 size={18} className="text-red-500" />,
        title: 'Remove a Resource',
        steps: [
          'Use the red trash icon to delete the entry here',
          'Then delete its content/resources/<slug>.json file (or leave it — it just won\'t be linked anywhere)',
          'parenting-suite is the bespoke flagship page; remove only if you really mean to take it down',
        ],
      },
    ],
  },
};

// Recursive JSON editor component
function JsonEditor({
  data,
  path = [],
  onChange,
  level = 0,
}: {
  data: unknown;
  path: (string | number)[];
  onChange: (path: (string | number)[], value: unknown) => void;
  level?: number;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  if (data === null || data === undefined) {
    return (
      <input
        type="text"
        value=""
        placeholder="null"
        onChange={(e) => onChange(path, e.target.value || null)}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm w-full focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900"
      />
    );
  }

  if (typeof data === 'string') {
    if (data.length > 100 || data.includes('\n')) {
      return (
        <textarea
          value={data}
          onChange={(e) => onChange(path, e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-lg text-sm w-full min-h-[80px] resize-y focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900"
          rows={3}
        />
      );
    }
    return (
      <input
        type="text"
        value={data}
        onChange={(e) => onChange(path, e.target.value)}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm w-full focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900"
      />
    );
  }

  if (typeof data === 'number') {
    return (
      <input
        type="text"
        value={data}
        onChange={(e) => onChange(path, e.target.value)}
        className="px-3 py-2 border border-gray-200 rounded-lg text-sm w-32 focus:ring-2 focus:ring-[#F27A21]/20 focus:border-[#F27A21] text-gray-900"
      />
    );
  }

  if (typeof data === 'boolean') {
    return (
      <button
        onClick={() => onChange(path, !data)}
        className={`px-3 py-2 rounded-lg text-sm font-medium ${
          data
            ? 'bg-green-100 text-green-700 hover:bg-green-200'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {data ? 'true' : 'false'}
      </button>
    );
  }

  if (Array.isArray(data)) {
    const key = path.join('.');
    const isCollapsed = collapsed[key];

    // Get contextual label based on the array name
    const arrayName = path.length > 0 ? String(path[path.length - 1]) : '';
    const getAddLabel = () => {
      if (arrayName.toLowerCase().includes('event')) return 'Add New Event';
      if (arrayName.toLowerCase().includes('member')) return 'Add New Member';
      if (arrayName.toLowerCase().includes('partner')) return 'Add New Partner';
      if (arrayName.toLowerCase().includes('team')) return 'Add New Team Member';
      return 'Add New Item';
    };

    const handleAddItem = () => {
      // Create a new item based on the first item's structure (or empty string if no items)
      const newItem = data.length > 0 && typeof data[0] === 'object'
        ? JSON.parse(JSON.stringify(data[0])) // Deep clone to avoid reference issues
        : '';
      // Clear the values but keep the structure
      if (typeof newItem === 'object' && newItem !== null) {
        Object.keys(newItem).forEach(key => {
          if (typeof newItem[key] === 'string') newItem[key] = '';
          else if (typeof newItem[key] === 'number') newItem[key] = 0;
          else if (typeof newItem[key] === 'boolean') newItem[key] = false;
        });
      }
      onChange(path, [...data, newItem]);
    };

    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
          <button
            onClick={() => setCollapsed({ ...collapsed, [key]: !isCollapsed })}
            className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-left text-sm font-medium text-gray-700"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            {data.length} {data.length === 1 ? 'item' : 'items'}
          </button>

          {/* Prominent Add Button - Always Visible */}
          <button
            onClick={handleAddItem}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F27A21] to-orange-600 text-white text-sm font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all"
          >
            <Plus size={16} />
            {getAddLabel()}
          </button>
        </div>

        {!isCollapsed && (
          <div className="p-3 space-y-3 bg-white max-h-[600px] overflow-y-auto">
            {data.map((item, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-xs font-mono text-gray-400 pt-2 min-w-[28px]">[{index + 1}]</span>
                <div className="flex-1">
                  <JsonEditor
                    data={item}
                    path={[...path, index]}
                    onChange={onChange}
                    level={level + 1}
                  />
                </div>
                <button
                  onClick={() => {
                    const newArray = [...data];
                    newArray.splice(index, 1);
                    onChange(path, newArray);
                  }}
                  className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                  title="Delete this item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (typeof data === 'object') {
    const entries = Object.entries(data as Record<string, unknown>);
    const key = path.join('.');
    const isCollapsed = collapsed[key];

    return (
      <div className={`border border-gray-200 rounded-lg overflow-hidden ${level > 0 ? 'bg-white' : ''}`}>
        {level > 0 && (
          <button
            onClick={() => setCollapsed({ ...collapsed, [key]: !isCollapsed })}
            className="w-full flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-left text-sm font-medium text-gray-700"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            Object ({entries.length} fields)
          </button>
        )}
        {(!isCollapsed || level === 0) && (
          <div className={level > 0 ? 'p-3' : ''}>
            {entries.map(([entryKey, value]) => (
              <div
                key={entryKey}
                className={`${level === 0 ? 'p-4 border-b border-gray-100 last:border-0' : 'mb-3 last:mb-0'}`}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {entryKey.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}
                </label>
                <JsonEditor
                  data={value}
                  path={[...path, entryKey]}
                  onChange={onChange}
                  level={level + 1}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return <span className="text-gray-400">Unknown type</span>;
}

// Help Panel Component
function HelpPanel({ file }: { file: string }) {
  const [isOpen, setIsOpen] = useState(true);
  const helpContent = FILE_HELP[file];

  if (!helpContent) return null;

  return (
    <div className="mb-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-orange-100/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <HelpCircle size={20} className="text-orange-500" />
          <span className="font-semibold text-gray-800">{helpContent.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-orange-600">
            {isOpen ? 'Hide Guide' : 'Show Guide'}
          </span>
          {isOpen ? <ChevronDown size={18} className="text-orange-500" /> : <ChevronRight size={18} className="text-orange-500" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4">
          <div className="grid md:grid-cols-2 gap-4">
            {helpContent.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-orange-100">
                <div className="flex items-center gap-2 mb-3">
                  {section.icon}
                  <h4 className="font-semibold text-gray-800">{section.title}</h4>
                </div>
                <ol className="space-y-2">
                  {section.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-xs flex items-center justify-center font-medium">
                        {stepIdx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/power-hub/dashboard/media"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
            >
              <Image size={16} />
              Open Media Library
            </Link>
            <a
              href="https://murrayp4p.com/team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
            >
              <Users size={16} />
              View Live Team Page
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EditContentPage({
  params,
}: {
  // Catch-all route: `file` is an array of path segments.
  // For "content/home.json"               -> ["home"]
  // For "content/resources/youth.json"    -> ["resources", "youth"]
  params: Promise<{ file: string[] }>;
}) {
  const { file: fileSegments } = use(params);
  const router = useRouter();
  // Slug used for help-text lookup and the API filename query.
  // e.g. "home" or "resources/youth-programs".
  const file = fileSegments.join('/');
  const filename = `${file}.json`;

  const [content, setContent] = useState<Record<string, unknown> | null>(null);
  const [sha, setSha] = useState<string>(''); // GitHub SHA for conflict prevention
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    fetchContent();
  }, [file]);

  const fetchContent = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/power-hub/content?file=${filename}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch content');
      }

      setContent(data.content);
      setSha(data.sha); // Store SHA for updates
      setHasChanges(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (path: (string | number)[], value: unknown) => {
    if (!content) return;

    const newContent = JSON.parse(JSON.stringify(content));
    let current = newContent;

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }

    current[path[path.length - 1]] = value;
    setContent(newContent);
    setHasChanges(true);
    setSuccess('');
  };

  // Combined Save & Deploy - commits directly to GitHub
  const handleSaveAndDeploy = async () => {
    if (!content || !sha) return;

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/power-hub/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, content, sha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save');
      }

      // Use the new SHA from the response for subsequent saves
      if (data.newSha) {
        setSha(data.newSha);
      }

      setSuccess('Changes saved and deployed! Site will update in approximately 5 minutes.');
      setHasChanges(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <Header title={`Edit ${file}`} subtitle="Edit and deploy content to your live site" />

      <div className="p-8">
        <div className="">
          {/* Actions Bar */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.push('/power-hub/dashboard/content')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Content
            </button>

            <button
              onClick={handleSaveAndDeploy}
              disabled={saving || !hasChanges}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg ${
                saving
                  ? 'bg-gray-400 text-white cursor-wait'
                  : hasChanges
                  ? 'bg-gradient-to-r from-[#F27A21] to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-orange-500/20'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {saving ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Deploying...
                </>
              ) : (
                <>
                  <Rocket size={18} />
                  Save & Deploy
                </>
              )}
            </button>
          </div>

          {/* Alerts */}
          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 mb-6">
              <Check size={20} />
              <div>
                <p className="font-medium">{success}</p>
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <GitCommit size={14} />
                  Committed to GitHub → Vercel auto-deploying
                </p>
              </div>
            </div>
          )}

          {hasChanges && !success && (
            <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700 mb-6">
              <AlertCircle size={20} />
              <span>You have unsaved changes</span>
            </div>
          )}

          {/* Context-Specific Help Panel */}
          {!loading && <HelpPanel file={file} />}

          {/* Content Editor */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={32} className="animate-spin text-[#F27A21]" />
            </div>
          ) : content ? (
            <div className="bg-white rounded-2xl border border-gray-200">
              <JsonEditor data={content} path={[]} onChange={handleChange} />
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              Content not found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
