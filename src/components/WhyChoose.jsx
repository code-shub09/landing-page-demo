import second from '../assets/image3.png'

export default function WhyChoose() {
  return (
    <section className="px-10 py-20 flex flex-col md:flex-row items-center gap-12  h-[70vh]">

      {/* LEFT SIDE */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold">Why Teams Choose TaskFlow</h2>
        <p className="mt-4 text-gray-600">
          Transform the way your team works with powerful tools.
        </p>

        <ul className="mt-6 space-y-6">
          <li>
            <span className="text-green-600 text-xl">⚡</span>
            <strong className="ml-2">Increase Team Productivity</strong>
            <p className="text-gray-600 ml-8">
              Streamline workflows to get more done.
            </p>
          </li>

          <li>
            <span className="text-blue-600 text-xl">📘</span>
            <strong className="ml-2">Centralized Project Tracking</strong>
            <p className="text-gray-600 ml-8">
              Keep everything in one place.
            </p>
          </li>

          <li>
            <span className="text-purple-600 text-xl">🎯</span>
            <strong className="ml-2">Faster Decision-Making</strong>
            <p className="text-gray-600 ml-8">
              Access insights for informed decisions.
            </p>
          </li>

          <li>
            <span className="text-cyan-600 text-xl">🔒</span>
            <strong className="ml-2">Secure and Scalable</strong>
            <p className="text-gray-600 ml-8">
              Grows with teams of all sizes.
            </p>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 flex justify-center items-center overflow-hidden h-full ">
        <img
          src={second}
          alt="people working"
          className="rounded-xl shadow-lg 
                     w-full max-w-[600px] 
                     h-auto max-h-full
                     object-contain"
        />
      </div>

    </section>
  );
}
