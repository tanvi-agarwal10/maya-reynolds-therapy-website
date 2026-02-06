import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image with Translucency */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: 'url(/images/background.jpg)',
        }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 to-secondary-50/80" />
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">
            Anxiety & Trauma Therapist in Santa Monica
          </h1>

          <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
            A calm, confidential space to step out of constant pressure and finally slow down. Therapy offers room to process what you’ve been carrying, quiet anxiety at its roots, and rebuild a steadier relationship with your mind and body.
            Together, we can move from overwhelm toward something lighter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Schedule a Free Consultation
            </a>
            <a href="#services" className="btn-outline">
              Learn About Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
