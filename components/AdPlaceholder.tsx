"use client";

/**
 * AdPlaceholder Component
 * 
 * This is a reusable component for Google AdSense ads.
 * 
 * HOW TO ENABLE ADSENSE:
 * 1. Get approved for Google AdSense at https://www.google.com/adsense
 * 2. Add your AdSense code to app/layout.tsx in the <head> section
 * 3. Uncomment the actual ad code below and add your ad slot ID
 * 4. Remove or comment out the placeholder div
 * 
 * IMPORTANT: Do not load AdSense automatically until you're approved!
 */

export default function AdPlaceholder() {
  // This placeholder shows where ads will appear
  // Remove this when you enable real ads
  const showPlaceholder = true; // Set to false when AdSense is ready

  if (showPlaceholder) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-sm text-gray-500 mb-2">AdSense Placeholder</p>
          <p className="text-xs text-gray-400">
            Replace this with actual AdSense code after approval
          </p>
        </div>
      </div>
    );
  }

  // UNCOMMENT BELOW WHEN ADSENSE IS APPROVED
  // Replace 'ca-pub-XXXXXXXXXX' with your actual AdSense publisher ID
  // Replace 'XXXXXXXXXX' with your actual ad slot ID
  
  /*
  return (
    <div className="max-w-4xl mx-auto">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
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
