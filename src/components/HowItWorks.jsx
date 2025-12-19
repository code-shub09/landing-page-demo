const steps = [
  { num: 1, title: "Create Your Workspace", desc: "Sign up and onboard quickly." },
  { num: 2, title: "Add Projects & Tasks", desc: "Organize tasks and assign team members." },
  { num: 3, title: "Collaborate & Track", desc: "Work in real-time and monitor progress." },
];

export default function HowItWorks() {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-4xl font-bold">How It Works</h2>
      <p className="mt-2 text-gray-600">Get started in three simple steps</p>

      <div className="grid md:grid-cols-3 gap-12 mt-14">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
              {s.num}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
