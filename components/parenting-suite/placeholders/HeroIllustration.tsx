// PLACEHOLDER — replace with final asset. Swap the import in ParentingSuitePage.tsx when ready.
// Hero Illustration: Parent holding child silhouette with warm accents

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a parent holding a young child"
      className="w-full h-auto max-w-[500px] mx-auto"
    >
      {/* Background panel */}
      <rect
        x="50"
        y="50"
        width="500"
        height="500"
        rx="40"
        fill="#2A4070"
        fillOpacity="0.5"
      />

      {/* Persimmon accent circles - warmth/lullaby notes */}
      <circle cx="150" cy="150" r="60" fill="#E8682A" fillOpacity="0.6" />
      <circle cx="480" cy="200" r="45" fill="#E8682A" fillOpacity="0.7" />
      <circle cx="120" cy="450" r="50" fill="#E8682A" fillOpacity="0.5" />
      <circle cx="450" cy="480" r="35" fill="#E8682A" fillOpacity="0.65" />

      {/* Gold sparkle accents - top right */}
      <path
        d="M500 100 L505 115 L520 120 L505 125 L500 140 L495 125 L480 120 L495 115 Z"
        fill="#F5A623"
        fillOpacity="0.9"
      />
      <path
        d="M540 160 L543 170 L553 173 L543 176 L540 186 L537 176 L527 173 L537 170 Z"
        fill="#F5A623"
        fillOpacity="0.8"
      />

      {/* Parent silhouette - standing, holding child */}
      <g transform="translate(180, 120)">
        {/* Parent body */}
        <ellipse cx="120" cy="60" rx="45" ry="55" fill="#FAFAF7" />
        {/* Parent head */}
        <circle cx="120" cy="85" r="38" fill="#FAFAF7" />
        {/* Parent arms creating embrace */}
        <path
          d="M80 140 Q60 200 70 280 Q75 320 100 340"
          stroke="#FAFAF7"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M160 140 Q180 200 170 280 Q165 320 140 340"
          stroke="#FAFAF7"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />
        {/* Parent torso */}
        <path
          d="M75 130 Q70 250 85 380 L155 380 Q170 250 165 130 Z"
          fill="#FAFAF7"
        />

        {/* Child silhouette - being held */}
        <g transform="translate(85, 180)">
          {/* Child head */}
          <circle cx="35" cy="20" r="28" fill="#FAFAF7" />
          {/* Child body */}
          <ellipse cx="35" cy="70" rx="25" ry="40" fill="#FAFAF7" />
          {/* Child legs */}
          <path
            d="M20 100 Q15 140 25 170"
            stroke="#FAFAF7"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 100 Q55 140 45 170"
            stroke="#FAFAF7"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>

      {/* Additional warmth circles behind figures */}
      <circle cx="300" cy="350" r="120" fill="#E8682A" fillOpacity="0.15" />
      <circle cx="300" cy="300" r="80" fill="#F5A623" fillOpacity="0.1" />
    </svg>
  );
}
