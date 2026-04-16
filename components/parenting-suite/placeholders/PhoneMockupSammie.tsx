// PLACEHOLDER — replace with final asset. Swap the import in ParentingSuitePage.tsx when ready.
// Sammie Voice Assistant phone mockup with mic icon and waveform

export default function PhoneMockupSammie() {
  return (
    <svg
      viewBox="0 0 220 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sammie voice assistant app mockup"
      className="w-full h-auto max-w-[180px] mx-auto"
    >
      {/* Phone frame */}
      <rect
        x="10"
        y="10"
        width="200"
        height="380"
        rx="30"
        fill="#1E3560"
        stroke="#2A4070"
        strokeWidth="2"
      />

      {/* Screen area */}
      <rect
        x="20"
        y="45"
        width="180"
        height="310"
        rx="8"
        fill="#FAFAF7"
      />

      {/* Top notch */}
      <rect x="80" y="20" width="60" height="8" rx="4" fill="#0F1629" />

      {/* "Sammie" wordmark */}
      <text
        x="110"
        y="75"
        textAnchor="middle"
        fill="#1E3560"
        fontSize="16"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        Sammie
      </text>

      {/* Large microphone circle */}
      <circle cx="110" cy="180" r="55" fill="#E8682A" />

      {/* Microphone icon */}
      <g transform="translate(85, 150)">
        {/* Mic body */}
        <rect x="15" y="5" width="20" height="35" rx="10" fill="#FAFAF7" />
        {/* Mic stand */}
        <path
          d="M25 45 L25 55"
          stroke="#FAFAF7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M15 55 L35 55"
          stroke="#FAFAF7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Mic arc */}
        <path
          d="M10 30 Q10 50 25 50 Q40 50 40 30"
          stroke="#FAFAF7"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Waveform bars - alternating Persimmon and Gold */}
      <g transform="translate(40, 260)">
        <rect x="0" y="15" width="8" height="20" rx="4" fill="#E8682A" />
        <rect x="15" y="10" width="8" height="30" rx="4" fill="#F5A623" />
        <rect x="30" y="5" width="8" height="40" rx="4" fill="#E8682A" />
        <rect x="45" y="0" width="8" height="50" rx="4" fill="#F5A623" />
        <rect x="60" y="5" width="8" height="40" rx="4" fill="#E8682A" />
        <rect x="75" y="0" width="8" height="50" rx="4" fill="#F5A623" />
        <rect x="90" y="5" width="8" height="40" rx="4" fill="#E8682A" />
        <rect x="105" y="10" width="8" height="30" rx="4" fill="#F5A623" />
        <rect x="120" y="15" width="8" height="20" rx="4" fill="#E8682A" />
      </g>

      {/* "Listening..." text */}
      <text
        x="110"
        y="335"
        textAnchor="middle"
        fill="#1E3560"
        fillOpacity="0.6"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        Listening...
      </text>

      {/* Home indicator */}
      <rect x="75" y="370" width="70" height="5" rx="2.5" fill="#2A4070" />
    </svg>
  );
}
