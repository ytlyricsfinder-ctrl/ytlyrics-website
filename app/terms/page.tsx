import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | YTLyrics",
  description: "Terms of service for using the YTLyrics Chrome extension.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By installing and using the YTLyrics Chrome extension, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not install or use the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics is a Chrome browser extension that displays lyrics for YouTube videos. The service uses publicly available lyrics databases and AI-powered song detection to enhance your YouTube viewing experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the extension only for personal, non-commercial purposes</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble the extension</li>
              <li>Not use the extension in any way that violates applicable laws or regulations</li>
              <li>Not interfere with or disrupt the extension's functionality</li>
              <li>Respect copyright and intellectual property rights of lyrics content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Lyrics Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics retrieves lyrics from publicly available sources. We do not claim ownership of any lyrics displayed through the extension. All lyrics are the property of their respective copyright holders. Lyrics are displayed for personal, non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics is provided "as is" without warranty of any kind. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The extension will be error-free or uninterrupted</li>
              <li>Lyrics will be available for every video</li>
              <li>Lyrics will be 100% accurate or synchronized perfectly</li>
              <li>The extension will be compatible with future YouTube or Chrome updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, YTLyrics and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              YTLyrics integrates with YouTube and third-party lyrics databases. We are not responsible for the availability, content, or policies of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify, suspend, or discontinue the extension at any time without notice. We may also update these terms periodically, and continued use of the extension constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of YTLyrics is also governed by our{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>
              . Please review it to understand our privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may stop using YTLyrics at any time by uninstalling the extension from your browser. We reserve the right to terminate or suspend access to the extension for any reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please visit our{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                contact page
              </Link>.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
            <p className="text-blue-800 font-semibold">
              By using YTLyrics, you acknowledge that you have read and understood these terms.
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
