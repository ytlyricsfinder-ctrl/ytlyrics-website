import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | YTLyrics",
  description: "YTLyrics privacy policy. We respect your privacy and do not collect personal data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🎵</span>
              <span className="text-xl font-semibold text-gray-900">YTLyrics</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics is committed to protecting your privacy. This Chrome extension operates entirely on your local device and does not collect, store, or transmit any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Do NOT Collect</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>YouTube watch history or viewing habits</li>
              <li>Search queries or browsing history</li>
              <li>IP addresses or location data</li>
              <li>Login credentials or account information</li>
              <li>Any other personally identifiable information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How YTLyrics Works</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics analyzes YouTube video titles and metadata locally on your device to identify songs and retrieve lyrics. All processing happens in your browser without sending data to external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Storage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The extension uses Chrome's local storage to save your preferences such as dark mode, auto-show settings, and display options. This data never leaves your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics may retrieve lyrics from publicly available lyrics databases. These requests are made directly from your browser and do not include any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Analytics</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website uses Vercel Analytics to understand aggregate usage patterns (page views, visitor counts). No personally identifiable information is collected. The Chrome extension itself contains no analytics or tracking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics requires the following Chrome permissions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>activeTab:</strong> To interact with the current YouTube tab</li>
              <li><strong>storage:</strong> To save your preferences locally</li>
              <li><strong>scripting:</strong> To display lyrics on YouTube pages</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These permissions are used solely for the extension's core functionality and not for data collection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics does not knowingly collect information from anyone, including children under 13. Since we don't collect any personal data, there are no age restrictions for using this extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this privacy policy, please visit our{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                contact page
              </Link>.
            </p>
          </section>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-8">
            <p className="text-green-800 font-semibold">
              ✓ Chrome Web Store Compliant
            </p>
            <p className="text-green-700 text-sm mt-1">
              This privacy policy meets all Chrome Web Store requirements for extension publishing.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 py-8 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">© 2025 YTLyrics. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
