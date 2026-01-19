import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
{/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎵</span>
              <span className="text-xl font-semibold text-gray-900">YTLyrics</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Contact
              </Link>
              
                href="https://chromewebstore.google.com/detail/youtube-lyrics-extension/giihfpdmeapboodfloplndjkegmlfdma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Real-time lyrics for any
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YouTube video
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Instant, synced lyrics powered by smart detection & AI. Transform your YouTube experience with karaoke mode, multilingual support, and privacy-first technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              
                href="https://chromewebstore.google.com/detail/youtube-lyrics-extension/giihfpdmeapboodfloplndjkegmlfdma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.894L12 19.788l-5.894-4.894A6.5 6.5 0 1 1 12 5.5a6.5 6.5 0 1 1 5.894 9.394z"/>
                </svg>
                Get the Chrome Extension
              </a>
              
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                How it works
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense - Above the Fold (Best Position) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-400">Advertisement</p>
          </div>
          <AdPlaceholder slot="hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need</h2>
            <p className="text-xl text-gray-600">Powerful features designed for music lovers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense - After Features (Catches engaged users) */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-400">Advertisement</p>
          </div>
          <AdPlaceholder slot="features" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Get started in seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with privacy in mind</h2>
          <p className="text-xl text-gray-600 mb-12">Your data stays on your device. Always.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Section - Affiliate Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Sponsored</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Music Tools</h2>
            <p className="text-lg text-gray-600">Tools we love for music enthusiasts</p>
          </div>
          
          {/* AdSense - In Monetization Section */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-400">Advertisement</p>
          </div>
          <AdPlaceholder slot="monetization" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Affiliate links placeholder - replace with actual affiliate links */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Music Streaming</h3>
              <p className="text-gray-600 text-sm mb-4">Premium music services we recommend</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio Equipment</h3>
              <p className="text-gray-600 text-sm mb-4">High-quality headphones and speakers</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Music Learning</h3>
              <p className="text-gray-600 text-sm mb-4">Online courses for musicians</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl">🎵</span>
              <span className="text-lg font-semibold text-gray-900">YTLyrics</span>
            </div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Contact
              </Link>
              
                href="https://chromewebstore.google.com/detail/youtube-lyrics-extension/giihfpdmeapboodfloplndjkegmlfdma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Chrome Web Store
              </a>
            </div>
            <p className="text-sm text-gray-500">© 2025 YTLyrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Detection",
    description: "Smart song recognition automatically detects what you're watching and finds the perfect lyrics match.",
  },
  {
    icon: "⚡",
    title: "Real-Time Synced",
    description: "Lyrics scroll automatically in perfect sync with the video, creating a seamless karaoke experience.",
  },
  {
    icon: "🎤",
    title: "Karaoke Mode",
    description: "Follow along with highlighted lyrics that change as the song progresses, perfect for singing along.",
  },
  {
    icon: "🌍",
    title: "Multilingual Support",
    description: "Access lyrics in multiple languages and enjoy music from around the world.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description: "Everything runs locally on your device. No accounts, no login, no data collection.",
  },
  {
    icon: "⚙️",
    title: "Fully Customizable",
    description: "Adjust display settings, theme, and behavior to match your preferences perfectly.",
  },
];

const steps = [
  {
    title: "Install YTLyrics",
    description: "Add the extension to Chrome with one click. No signup required.",
  },
  {
    title: "Play a YouTube Video",
    description: "Open any music video or song on YouTube like you normally would.",
  },
  {
    title: "Lyrics Appear Automatically",
    description: "Our AI detects the song and displays synchronized lyrics instantly.",
  },
];

const trustItems = [
  {
    icon: "💻",
    title: "Runs Locally",
    description: "All on your device",
  },
  {
    icon: "🚫",
    title: "No Accounts",
    description: "Zero sign-up needed",
  },
  {
    icon: "🔐",
    title: "No Data Collected",
    description: "Complete privacy",
  },
  {
    icon: "✓",
    title: "Web Store Verified",
    description: "Chrome approved",
  },
];
