import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Static images from /public/images/ that should always be visible
const STATIC_IMAGES = [
  {
    id: 'static-logo',
    name: 'P4P Logo',
    path: '/images/p4p-logo.png',
    category: 'Logo',
  },
  {
    id: 'static-hero',
    name: 'Hero Background',
    path: '/images/hero/p4p-hero.jpg',
    category: 'Hero',
  },
  {
    id: 'static-partner-salt-lake-health',
    name: 'Salt Lake County Health Department',
    path: '/images/partners/salt-lake-health.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-intermountain',
    name: 'Intermountain Medical Center',
    path: '/images/partners/intermountain-health.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-murray-school',
    name: 'Murray School District',
    path: '/images/partners/murray-school-district.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-murray-city',
    name: 'Murray City',
    path: '/images/partners/murray-city.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-select-health',
    name: 'Select Health',
    path: '/images/partners/select-health.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-murray-chamber',
    name: 'Murray Chamber of Commerce',
    path: '/images/partners/murray-chamber.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-exchange-club',
    name: 'Exchange Club',
    path: '/images/partners/exchange-club.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-murray-rotary',
    name: 'Murray Rotary',
    path: '/images/partners/murray-rotary.png',
    category: 'Partners',
  },
  {
    id: 'static-partner-murray-youth',
    name: 'Murray Youth Community Council',
    path: '/images/partners/murray-youth-council.png',
    category: 'Partners',
  },
];

export async function GET(): Promise<NextResponse> {
  try {
    // Get the host for building absolute URLs for static images
    const headersList = await headers();
    const host = headersList.get('host') || 'murrayp4p.com';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Build static images list with full URLs
    const staticMedia = STATIC_IMAGES.map((img) => ({
      id: img.id,
      name: img.name,
      url: img.path, // Use relative path - works in browser
      size: 'Static',
      uploaded: img.category,
      isStatic: true,
    }));

    // Try to get Vercel Blob images if configured
    let blobMedia: Array<{
      id: string;
      name: string;
      url: string;
      size: string;
      uploaded: string;
      uploadedAt?: Date;
      isStatic?: boolean;
    }> = [];

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { blobs } = await list({
          prefix: 'uploads/',
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        blobMedia = blobs.map((blob) => ({
          id: blob.pathname,
          name: blob.pathname.split('/').pop()?.replace(/^\d+-/, '') || blob.pathname,
          url: blob.url,
          size: formatFileSize(blob.size),
          uploaded: formatDate(blob.uploadedAt),
          uploadedAt: blob.uploadedAt,
          isStatic: false,
        }));

        // Sort blob images by upload date (newest first)
        blobMedia.sort((a, b) => {
          if (!a.uploadedAt || !b.uploadedAt) return 0;
          return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
        });

        // Remove uploadedAt from response
        blobMedia = blobMedia.map(({ uploadedAt, ...rest }) => rest);
      } catch (blobError) {
        console.error('Error loading blob media:', blobError);
        // Continue with just static images
      }
    }

    // Combine: Uploaded images first, then static images
    const allMedia = [...blobMedia, ...staticMedia];

    return NextResponse.json({ media: allMedia });
  } catch (error) {
    console.error('Error listing media:', error);
    return NextResponse.json(
      { error: String(error), media: [] },
      { status: 500 }
    );
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();

  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return Math.floor(diff / 60000) + ' min ago';
  if (diff < 86400000) return Math.floor(diff / 3600000) + ' hours ago';
  if (diff < 604800000) return Math.floor(diff / 86400000) + ' days ago';

  return new Date(date).toLocaleDateString();
}
