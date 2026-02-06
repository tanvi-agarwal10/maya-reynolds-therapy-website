import Image from 'next/image';

export default function Office() {
  return (
    <section id="office" className="py-section bg-white">
      <div className="section-container">
        <div className="heading-section">
          <h2>Our Office</h2>
          <p>Where Healing Begins, and Transformation Flourishes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Office Space */}
          <div className="relative rounded-lg h-64 overflow-hidden">
            <Image
              src="/images/office-space.jpg"
              alt="Office Space"
              fill
              className="object-cover"
            />
          </div>

          {/* Therapy Room */}
          <div className="relative rounded-lg h-64 overflow-hidden">
            <Image
              src="/images/therapy-room.jpg"
              alt="Therapy Room"
              fill
              className="object-cover"
            />
          </div>

          {/* Waiting Area */}
          <div className="relative rounded-lg h-64 overflow-hidden">
            <Image
              src="/images/waiting-area.jpg"
              alt="Waiting Area"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
            My office is designed to be a sanctuary - a calm, welcoming space where you can feel safe
            being yourself. With comfortable seating, soft lighting, and complete privacy, you can
            focus fully on your healing journey without distraction.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Every aspect of the space is thoughtfully created to support your sense of security and
            allow you to do the important work of therapy with confidence and trust. For those across California, secure telehealth sessions bring that same sense of presence and care into the comfort of home.
          </p>
        </div>
      </div>
    </section>
  );
}
