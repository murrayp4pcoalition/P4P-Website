import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for server-side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Default credentials (fallback if Supabase not configured or no custom credentials set)
const DEFAULT_USERNAME = process.env.PORTAL_USERNAME || 'p4padmin';
const DEFAULT_PASSWORD = process.env.PORTAL_PASSWORD || 'p4p2026';

async function getCredentials() {
  try {
    // Try to get credentials from Supabase first
    const { data } = await supabase
      .from('portal_settings')
      .select('setting_value')
      .eq('setting_key', 'credentials')
      .single();

    if (data?.setting_value?.username && data?.setting_value?.password) {
      return {
        username: data.setting_value.username,
        password: data.setting_value.password
      };
    }
  } catch {
    // Supabase not configured or table doesn't exist - use defaults
  }

  // Fall back to environment variables or defaults
  return {
    username: DEFAULT_USERNAME,
    password: DEFAULT_PASSWORD
  };
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const credentials = await getCredentials();

    if (username === credentials.username && password === credentials.password) {
      // Generate a simple token (in production, use JWT)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');

      return NextResponse.json({
        success: true,
        token,
        user: { username },
      });
    }

    return NextResponse.json(
      { error: 'Invalid username or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // Verify token
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'No token provided' },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);

  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [username] = decoded.split(':');
    const credentials = await getCredentials();

    if (username === credentials.username) {
      return NextResponse.json({
        authenticated: true,
        user: { username },
      });
    }
  } catch {
    // Invalid token format
  }

  return NextResponse.json(
    { error: 'Invalid token' },
    { status: 401 }
  );
}
