export default function CTA() {
  return (
    <section id="contact" className="py-36 bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Schedule a free 15-minute consultation to discuss your needs and see if we&apos;re a good fit.
          </p>
          <a href="mailto:hello@mayareynolds.com" className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-lg font-semibold inline-block transition-colors duration-200">
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
