export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-24">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-serif text-xl mb-4">Maya Reynolds, LCSW</h4>
            <p className="text-sm leading-relaxed">
              Evidence-based therapy for anxiety, trauma, and burnout in Santa Monica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors">
                  Office
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@mayareynolds.com"
                  className="hover:text-white transition-colors"
                >
                  hello@mayareynolds.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>Santa Monica, CA</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; 2026 Maya Reynolds. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
