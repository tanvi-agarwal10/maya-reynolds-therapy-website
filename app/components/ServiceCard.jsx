export default function ServiceCard({ title, description }) {
  return (
    <div className="p-8 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
      <h3 className="mb-4 text-primary-600">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}
