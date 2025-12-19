export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-center text-white">
      <h2 className="text-4xl font-bold">Start Managing Your Projects Today</h2>
      <p className="mt-2 opacity-90">Join thousands of teams already using TaskFlow</p>

      <div className="mt-8 flex justify-center gap-6">
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg">
          Start Free Trial
        </button>
        <button className="border border-white px-6 py-3 rounded-lg">
          Schedule Demo
        </button>
      </div>
    </section>
  );
}
