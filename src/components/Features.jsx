const features = [
  {
    icon: "📝",
    title: "Task & Project Management",
    desc: "Organize tasks, set priorities, and track progress easily.",
  },
  {
    icon: "👥",
    title: "Real-time Collaboration",
    desc: "Work together seamlessly with updates and file sharing.",
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    desc: "Get insights with customizable reports.",
  },
  {
    icon: "🛡️",
    title: "Cloud Sync & Security",
    desc: "Enterprise-grade security for all your devices.",
  },
];

export default function Features() {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-4xl font-bold">Powerful Features for Modern Teams</h2>
      <p className="mt-2 text-gray-600">Everything you need in one place.</p>

      <div className="grid md:grid-cols-4 gap-8 mt-14">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
