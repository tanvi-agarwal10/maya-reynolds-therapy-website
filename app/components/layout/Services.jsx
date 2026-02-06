import ServiceCard from '../ServiceCard';

const services = [
  {
    title: 'Anxiety Therapy in Santa Monica',
    description:
      "Constant worry, tension, and overthinking can leave you feeling exhausted. Through CBT, mindfulness, and body-based techniques, I'll help you find calm and feel more like yourself again.",
  },
  {
    title: 'Trauma Therapy in Santa Monica',
    description:
      'Past experiences do not have to define your present. Using EMDR and a carefully paced approach, I help adults process trauma safely-so you can feel more regulated and at peace in daily life.',
  },
  {
    title: 'Perfectionism Therapy in Santa Monica',
    description:
      "If you're a professional, entrepreneur, or creative feeling disconnected after years of pushing through, therapy can help you reconnect and build sustainable ways of living.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section bg-white">
      <div className="section-container">
        <div className="heading-section">
          <h2>How I Can Help You</h2>
          <p>Whether it's overwhelm, old wounds, or burnout - there's a path forward, and it starts here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
