import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-[108px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold mb-6">
              <span className="text-2xl text-[#FF5024]">✱</span>
              <span>NATIONCITE</span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+911234567890"
                className="text-gray-300 hover:text-white transition-colors"
              >
                +91 1234567890
              </a>
              <a
                href="mailto:info@nationcite.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                info@nationcite.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Our Mission
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Our Vision
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Our Story
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Solutions</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/solutions"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Time Management
              </Link>
              <Link
                href="/solutions"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Productivity Enhancement
              </Link>
              <Link
                href="/solutions"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Remote Collaboration
              </Link>
              <Link
                href="/solutions"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Progress Tracking
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Case Studies
              </Link>
              <Link
                href="/resources"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Whitepapers
              </Link>
              <Link
                href="/resources"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                eBooks
              </Link>
            </div>
          </div>

          <div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#FF5024] transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#FF5024] transition-all hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76a4.8 4.8 0 0 0 2.1-2.66c-.93.55-1.95.95-3.04 1.17a4.77 4.77 0 0 0-8.13 4.35A13.54 13.54 0 0 1 2.2 4.91a4.77 4.77 0 0 0 1.48 6.37 4.73 4.73 0 0 1-2.16-.6v.06a4.77 4.77 0 0 0 3.83 4.68 4.77 4.77 0 0 1-2.15.08 4.78 4.78 0 0 0 4.46 3.31A9.57 9.57 0 0 1 1 20.12a13.5 13.5 0 0 0 7.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.61.93-.67 1.74-1.51 2.38-2.46z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#FF5024] transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <p className="text-gray-400 text-sm">© Copyright Pomacrea 2024</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Legal
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Term of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
