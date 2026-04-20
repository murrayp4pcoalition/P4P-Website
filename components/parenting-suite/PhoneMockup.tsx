// Phone mockup component - displays pre-rendered phone mockup images
// The images already include the iPhone frame with Dynamic Island and shadow

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
}

export default function PhoneMockup({ imageSrc, alt }: PhoneMockupProps) {
  return (
    <div className="relative w-full max-w-[240px] mx-auto">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-auto block drop-shadow-lg"
      />
    </div>
  );
}
