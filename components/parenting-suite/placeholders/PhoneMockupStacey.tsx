// PLACEHOLDER — replace with final asset. Swap the import in ParentingSuitePage.tsx when ready.
// Stacey Storybook Creator phone mockup with book cover

export default function PhoneMockupStacey() {
  return (
    <svg
      viewBox="0 0 220 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stacey storybook creator app mockup"
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

      {/* "Stacey" wordmark */}
      <text
        x="110"
        y="75"
        textAnchor="middle"
        fill="#1E3560"
        fontSize="16"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        Stacey
      </text>

      {/* Storybook cover */}
      <g transform="translate(45, 95)">
        {/* Book shadow */}
        <rect
          x="8"
          y="8"
          width="120"
          height="160"
          rx="8"
          fill="#1E3560"
          fillOpacity="0.2"
        />

        {/* Book cover - Persimmon */}
        <rect
          x="0"
          y="0"
          width="120"
          height="160"
          rx="8"
          fill="#E8682A"
        />

        {/* Book spine highlight */}
        <rect
          x="0"
          y="0"
          width="8"
          height="160"
          rx="4"
          fill="#D45A20"
        />

        {/* Title lines - Gold */}
        <rect x="20" y="25" width="80" height="6" rx="3" fill="#F5A623" />
        <rect x="30" y="38" width="60" height="4" rx="2" fill="#F5A623" fillOpacity="0.7" />

        {/* Character circle - off-white */}
        <circle cx="60" cy="90" r="30" fill="#FAFAF7" />

        {/* Simple face suggestion */}
        <circle cx="50" cy="85" r="4" fill="#1E3560" fillOpacity="0.6" />
        <circle cx="70" cy="85" r="4" fill="#1E3560" fillOpacity="0.6" />
        <path
          d="M50 98 Q60 105 70 98"
          stroke="#1E3560"
          strokeOpacity="0.6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Decorative stars */}
        <g fill="#F5A623">
          <circle cx="25" cy="130" r="4" />
          <circle cx="95" cy="130" r="4" />
          <circle cx="60" cy="140" r="3" />
        </g>
      </g>

      {/* "Chapter 1 of 3" text */}
      <text
        x="110"
        y="285"
        textAnchor="middle"
        fill="#1E3560"
        fillOpacity="0.6"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        Chapter 1 of 3
      </text>

      {/* Page dots indicator */}
      <g transform="translate(85, 305)">
        <circle cx="0" cy="0" r="5" fill="#E8682A" />
        <circle cx="20" cy="0" r="5" fill="#E5E5E0" />
        <circle cx="40" cy="0" r="5" fill="#E5E5E0" />
      </g>

      {/* Home indicator */}
      <rect x="75" y="370" width="70" height="5" rx="2.5" fill="#2A4070" />
    </svg>
  );
}
