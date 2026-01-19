"use client";

/**
 * AdPlaceholder Component
 * 
 * This is a reusable component for Google AdSense ads.
 * Now supports multiple ad units with different slots.
 * 
 * HOW TO ENABLE ADSENSE:
 * 1. Get approved for Google AdSense at https://www.google.com/adsense
 * 2. AdSense code is already in app/layout.tsx
 * 3. Create ad units in AdSense dashboard (one for each position)
 * 4. Get your ad slot IDs
 * 5. Update this component with your ad slot IDs
 * 6. Set showPlaceholder to false
 * 
 * IMPORTANT: Do not load AdSense automatically until you're approved!
 */

interface AdPlaceholderProps {
  slot?: string; // Different slot for each ad position
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdPlaceholder({ 
  slot = "default", 
  format = "auto",
  className = ""
}: AdPlaceholderProps) {
  // This placeholder shows where ads will appear
  // Remove this when you enable real ads
  const showPlaceholder = true; // Set to false when AdSense is ready

  if (showPlaceholder) {
    return (
      <div className={`max-w-4xl mx-auto ${className}`}>
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-sm text-gray-500 mb-2">AdSense Placeholder {slot !== "default" ? `(${slot})` : ""}</p>
          <p className="text-xs text-gray-400">
            Replace with actual AdSense code after approval
          </p>
        </div>
      </div>
    );
  }

  // UNCOMMENT BELOW WHEN ADSENSE IS APPROVED
  // Replace slot IDs with your actual ad slot IDs from AdSense dashboard
  
  /*
  // Map slot names to actual AdSense slot IDs
  const adSlots: { [key: string]: string } = {
    'hero': 'XXXXXXXXXX',      // Ad slot ID for above-the-fold ad
    'features': 'YYYYYYYYYY',   // Ad slot ID for after features
    'monetization': 'ZZZZZZZZZZ', // Ad slot ID for monetization section
    'default': 'XXXXXXXXXX',    // Default fallback
  };

  const currentSlot = adSlots[slot] || adSlots['default'];

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1032013142432814"
        data-ad-slot={currentSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  );
  */

  return null;
}
