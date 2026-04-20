'use client';

import { useEffect, useState } from 'react';
import QRCodeLib from 'qrcode';

interface QRCodeProps {
  url: string;
  label: string;
  size?: number;
}

export default function QRCode({ url, label, size = 150 }: QRCodeProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  useEffect(() => {
    QRCodeLib.toDataURL(url, {
      width: size,
      margin: 2,
      color: {
        dark: '#1E3560', // Navy color to match brand
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('QR Code generation failed:', err);
      });
  }, [url, size]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="bg-white rounded-lg p-2 shadow-md flex items-center justify-center"
        style={{ width: size + 16, height: size + 16 }}
        aria-label={`QR code to download on ${label}`}
      >
        {qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt={`Scan to download on ${label}`}
            width={size}
            height={size}
          />
        ) : (
          <div
            className="animate-pulse bg-gray-200 rounded"
            style={{ width: size, height: size }}
          />
        )}
      </div>
      <span className="mt-2 text-sm text-gray-600">{label}</span>
    </div>
  );
}
