const feedback = [
  {
    name: "Sarah Chen",
    role: "Product Manager, TechCorp",
    text:
      "TaskFlow has transformed how our team collaborates. Productivity increased by 40%.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, StartupHub",
    text:
      "Analytics & reporting are game-changing. Support team is responsive and helpful.",
  },
  {
    name: "Emily Watson",
    role: "Operations Director, GlobalTech",
    text:
      "We migrated from 3 tools. Collaboration features are outstanding.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-4xl font-bold">Loved by Teams Worldwide</h2>
      <p className="mt-2 text-gray-600">See what our customers say</p>

      <div className="grid md:grid-cols-3 gap-10 mt-14">
        {feedback.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
            <p className="text-gray-700 italic">{f.text}</p>
            <p className="mt-4 font-bold">{f.name}</p>
            <p className="text-sm text-gray-500">{f.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
