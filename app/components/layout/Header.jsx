export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-neutral-200">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-16 py-6 h-[72px]">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-primary-600">
            Maya Reynolds
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#office"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
            >
              Office
            </a>
            <a href="#contact" className="btn-primary text-sm">
              Schedule Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
      </div>
    </header>
  );
}
