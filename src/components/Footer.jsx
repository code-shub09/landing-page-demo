export default function Footer() {
  return (
    <footer className="px-10 py-14 bg-gray-900 text-white">
      <div className="grid md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-xl font-bold">TaskFlow</h3>
          <p className="text-gray-400 mt-2">Plan, track & collaborate efficiently.</p>

          <div className="flex gap-4 mt-4 text-xl">
            <span>🐦</span>
            <span>💼</span>
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">Product</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Contact</li>
            <li>API Docs</li>
            <li>Status</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
