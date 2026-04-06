import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

// List of images to migrate from /public to Vercel Blob
const IMAGES_TO_MIGRATE = [
  { path: '/images/p4p-logo.png', name: 'p4p-logo.png' },
  { path: '/images/hero/p4p-hero.jpg', name: 'p4p-hero.jpg' },
  { path: '/images/partners/exchange-club.png', name: 'exchange-club.png' },
  { path: '/images/partners/intermountain-health.png', name: 'intermountain-health.png' },
  { path: '/images/partners/murray-chamber.png', name: 'murray-chamber.png' },
  { path: '/images/partners/murray-city.png', name: 'murray-city.png' },
  { path: '/images/partners/murray-rotary.png', name: 'murray-rotary.png' },
  { path: '/images/partners/murray-school-district.png', name: 'murray-school-district.png' },
  { path: '/images/partners/murray-youth-council.png', name: 'murray-youth-council.png' },
  { path: '/images/partners/salt-lake-health.png', name: 'salt-lake-health.png' },
  { path: '/images/partners/select-health.png', name: 'select-health.png' },
];

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Get the base URL from the request
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;

    const results: Array<{ name: string; status: string; url?: string; error?: string }> = [];

    for (const image of IMAGES_TO_MIGRATE) {
      try {
        // Fetch the image from the public folder
        const imageResponse = await fetch(`${baseUrl}${image.path}`);

        if (!imageResponse.ok) {
          results.push({
            name: image.name,
            status: 'error',
            error: `Failed to fetch: ${imageResponse.status}`
          });
          continue;
        }

        const imageBlob = await imageResponse.blob();

        // Upload to Vercel Blob
        const timestamp = Date.now();
        const filename = `uploads/${timestamp}-${image.name}`;

        const blob = await put(filename, imageBlob, {
          access: 'public',
        });

        results.push({
          name: image.name,
          status: 'success',
          url: blob.url
        });

      } catch (error) {
        results.push({
          name: image.name,
          status: 'error',
          error: String(error)
        });
      }
    }

    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'error').length;

    return NextResponse.json({
      message: `Migration complete: ${successful} successful, ${failed} failed`,
      results,
    });

  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// Simple GET to check status
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    message: 'Image migration endpoint ready',
    images: IMAGES_TO_MIGRATE.length,
    instructions: 'Send a POST request to migrate images to Vercel Blob',
  });
}
