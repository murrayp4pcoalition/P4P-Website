import { NextResponse } from 'next/server';

// GoHighLevel Webhook URL
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/X059zzO350KHgB9dXvPT/webhook-trigger/ce9ee907-730f-4247-9a3e-f100493d30e9';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Split name into first and last name for GHL
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Send to GoHighLevel webhook
    const ghlPayload = {
      // GHL standard contact fields
      firstName: firstName,
      lastName: lastName,
      first_name: firstName,
      last_name: lastName,
      full_name: name,
      name: name,
      email: email,
      phone: phone || '',

      // Source tracking
      source: 'P4P Website Contact Form',

      // Subject as a tag (helps with filtering in GHL)
      tags: subject ? [subject, 'website-contact'] : ['website-contact'],

      // Custom fields - the message content
      customField: {
        subject: subject || 'General Inquiry',
        message: message,
        form_source: 'murrayp4p.com/contact'
      },

      // Alternative flat format (GHL accepts both)
      subject: subject || 'General Inquiry',
      message: message,
      notes: `Subject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}`,
    };

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!response.ok) {
      console.error('GHL webhook error:', response.status, await response.text());
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
