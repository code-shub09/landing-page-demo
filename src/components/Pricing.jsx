export default function Pricing() {
  return (
    <section className="px-10 py-20 text-center">
      <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 mt-2">Choose the plan that fits your team</p>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        
        {/* Free Plan */}
        <div className="p-8 rounded-2xl shadow">
          <h3 className="text-xl font-bold">Free</h3>
          <p className="text-4xl font-bold mt-4">$0</p>
          <p className="text-gray-600 mb-6">/month</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Up to 5 team members</li>
            <li>✔ 10 projects</li>
            <li>✔ Basic task management</li>
            <li>✔ 5GB storage</li>
            <li>✖ Advanced analytics</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="p-8 rounded-2xl shadow-xl bg-purple-600 text-white scale-105">
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="text-4xl font-bold mt-4">$12</p>
          <p className="mb  -6">/user/month</p>
          <ul className="space-y-2">
            <li>✔ Unlimited team members</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Advanced task management</li>
            <li>✔ 100GB storage</li>
            <li>✔ Analytics & reports</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-white text-purple-600 font-bold rounded-lg">
            Start Free Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-2xl shadow">
          <h3 className="text-xl font-bold">Enterprise</h3>
          <p className="text-4xl font-bold mt-4">Custom</p>
          <ul className="mt-6 text-gray-700 space-y-2">
            <li>✔ Everything in Pro</li>
            <li>✔ Unlimited storage</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated manager</li>
            <li>✔ 24/7 support</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}
