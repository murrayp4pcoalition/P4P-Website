'use client';

import { useState } from 'react';
import Header from '@/components/power-hub/Header';
import { Calendar, ExternalLink, Copy, Check, AlertCircle, Settings } from 'lucide-react';

//==============================================================================
// CALENDAR CONFIGURATION
//==============================================================================
// To set up your P4P Google Calendar:
// 1. Go to calendar.google.com
// 2. Create a calendar for P4P events (or use existing)
// 3. Go to Calendar Settings → Integrate calendar
// 4. Copy the "Public URL to this calendar" embed code
// 5. Replace the URL below with your calendar URL
//
// The URL should look like:
// https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/Denver
//==============================================================================

const CALENDAR_URL = process.env.NEXT_PUBLIC_P4P_CALENDAR_URL || '';

// Placeholder URL for demo (remove when real URL is added)
const DEMO_CALENDAR_URL = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&bgcolor=%23F27A21&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&src=en.usa%23holiday%40group.v.calendar.google.com&color=%230B8043";

export default function CalendarPage() {
  const [copied, setCopied] = useState(false);

  const calendarUrl = CALENDAR_URL || DEMO_CALENDAR_URL;
  const isConfigured = Boolean(CALENDAR_URL);

  const copyUrl = () => {
    navigator.clipboard.writeText(calendarUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Header title="Events Calendar" subtitle="View and manage P4P coalition events" />

      <div className="p-8">
        {/* Configuration Notice */}
        {!isConfigured && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Settings size={20} className="text-amber-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-amber-800 font-medium">Calendar Not Configured</p>
                <p className="text-sm text-amber-600 mt-1">
                  Currently showing a demo calendar. To connect your P4P Google Calendar:
                </p>
                <ol className="text-sm text-amber-600 mt-2 list-decimal list-inside space-y-1">
                  <li>Go to <a href="https://calendar.google.com" target="_blank" className="text-[#F27A21] hover:underline">calendar.google.com</a></li>
                  <li>Open your P4P calendar settings</li>
                  <li>Copy the embed URL from "Integrate calendar"</li>
                  <li>Add to <code className="bg-amber-100 px-1 rounded">.env.local</code>:
                    <pre className="mt-1 p-2 bg-white rounded text-xs">NEXT_PUBLIC_P4P_CALENDAR_URL=your_embed_url</pre>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Calendar size={20} className="text-orange-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-orange-800 font-medium">Google Calendar Integration</p>
              <p className="text-sm text-orange-600 mt-1">
                This calendar syncs with your Google Calendar. Add or edit events directly in Google Calendar and they'll appear here automatically.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={copyUrl}
                className="flex items-center gap-1 px-3 py-1.5 text-xs bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy URL'}
              </button>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-xs bg-[#F27A21] text-white rounded-lg hover:bg-[#F9A45A] transition-colors"
              >
                <ExternalLink size={14} />
                Open Google Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Calendar iframe */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <iframe
            src={calendarUrl}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            className="w-full"
          />
        </div>

        {/* Help text */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Need to change the calendar?{' '}
            {isConfigured ? (
              <>Update <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_P4P_CALENDAR_URL</code> in your environment variables</>
            ) : (
              <>Add your calendar URL to <code className="bg-gray-100 px-1 rounded">.env.local</code></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
