// PLACEHOLDER — replace with final asset. Swap the import in ParentingSuitePage.tsx when ready.
// Geno Song Generator phone mockup with music notes and progress bar

export default function PhoneMockupGeno() {
  return (
    <svg
      viewBox="0 0 220 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Geno lullaby generator app mockup"
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

      {/* "Geno" wordmark */}
      <text
        x="110"
        y="75"
        textAnchor="middle"
        fill="#1E3560"
        fontSize="16"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        Geno
      </text>

      {/* Music notes - stacked in center */}
      <g transform="translate(60, 100)">
        {/* Large note 1 - Gold */}
        <g transform="translate(0, 0)">
          <circle cx="20" cy="80" r="15" fill="#F5A623" />
          <rect x="32" y="20" width="5" height="60" fill="#F5A623" />
          <path d="M37 20 Q55 25 55 40 Q55 55 37 50" fill="#F5A623" />
        </g>

        {/* Large note 2 - Persimmon */}
        <g transform="translate(50, -20)">
          <circle cx="20" cy="80" r="15" fill="#E8682A" />
          <rect x="32" y="25" width="5" height="55" fill="#E8682A" />
          <path d="M37 25 Q52 30 52 42 Q52 54 37 50" fill="#E8682A" />
        </g>

        {/* Small double note - Gold */}
        <g transform="translate(25, 90)">
          <circle cx="10" cy="30" r="10" fill="#F5A623" />
          <circle cx="40" cy="30" r="10" fill="#F5A623" />
          <rect x="18" y="0" width="4" height="30" fill="#F5A623" />
          <rect x="48" y="5" width="4" height="25" fill="#F5A623" />
          <rect x="18" y="0" width="34" height="4" fill="#F5A623" />
        </g>
      </g>

      {/* Progress bar background */}
      <rect x="40" y="280" width="140" height="12" rx="6" fill="#E5E5E0" />

      {/* Progress bar fill - 40% */}
      <rect x="40" y="280" width="56" height="12" rx="6" fill="#E8682A" />

      {/* "Your lullaby is almost ready..." text */}
      <text
        x="110"
        y="320"
        textAnchor="middle"
        fill="#1E3560"
        fillOpacity="0.6"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        Your lullaby is almost ready...
      </text>

      {/* Home indicator */}
      <rect x="75" y="370" width="70" height="5" rx="2.5" fill="#2A4070" />
    </svg>
  );
}
