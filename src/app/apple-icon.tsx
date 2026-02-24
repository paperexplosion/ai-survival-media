import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00f0ff', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#7b2cbf', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <rect width="100" height="100" fill="#0a0a0f" />

          <circle cx="50" cy="50" r="35" fill="none" stroke="url(#cyberGrad)" strokeWidth="3" opacity="0.3" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="url(#cyberGrad)" strokeWidth="2" opacity="0.5" />

          <path
            d="M 30 35 L 50 20 L 70 35 L 70 50 L 50 65 L 30 50 Z"
            fill="none"
            stroke="url(#cyberGrad)"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          />

          <circle cx="50" cy="42" r="8" fill="url(#cyberGrad)" opacity="0.8" />

          <path d="M 50 50 L 50 75" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M 50 75 L 42 68" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M 50 75 L 58 68" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />

          <circle cx="30" cy="50" r="2" fill="#00f0ff" />
          <circle cx="70" cy="50" r="2" fill="#00f0ff" />
          <circle cx="50" cy="20" r="2" fill="#00f0ff" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
