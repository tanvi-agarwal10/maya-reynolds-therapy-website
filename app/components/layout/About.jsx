import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-section bg-neutral-50">
      <div className="max-w-[1280px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="mb-6">About My Approach</h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                I believe that healing happens in the context of a warm, non-judgmental therapeutic
                relationship. My approach is grounded in evidence-based practices including Cognitive
                Behavioral Therapy, EMDR, and Somatic therapy.
              </p>
              <p>
                Whether you're managing anxiety, processing trauma, or exhausted from perfectionism, I
                work collaboratively with you to understand your unique experience and develop tools
                that truly fit your life. Therapy isn't just about talking - it's about
                transformation.
              </p>
              <p>
                I'm committed to creating a safe space where you can be completely yourself, share
                what's hard, and move toward the life you want to live.
              </p>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative rounded-2xl h-[520px] overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Maya Reynolds, Therapist"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
