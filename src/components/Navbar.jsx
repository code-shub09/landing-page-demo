export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2 text-xl font-bold">
        <span className="bg-purple-600 text-white rounded-md px-2 py-1 text-sm">
          🚀
        </span>
        TaskFlow
      </div>

      <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
        <li>Features</li>
        <li>How It Works</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>

      <div className="flex gap-4">
        <button className="text-gray-700 font-medium">Sign In</button>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700">
          Get Started Free
        </button>
      </div>
    </nav>
  );
}
