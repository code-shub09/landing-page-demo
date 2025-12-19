import hero from '../assets/image2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="px-10 py-10 flex h-[80vh] flex-col md:flex-row items-center gap-10 bg-purple-50">
      
      {/* LEFT SIDE */}
      <div className="flex-1">
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
          ✨ New: AI-Powered Task Automation
        </span>

        <h1 className="text-5xl font-extrabold mt-6 leading-tight">
          Manage Projects <br />
          <span className="text-purple-600">Smarter, Faster,</span> Better
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          An all-in-one platform to plan, track, and collaborate with your
          team in real-time.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 flex justify-between items-center gap-2">
            <span>Get Started Free</span>
            <FaArrowRightLong></FaArrowRightLong>

          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white flex justify-between items-center gap-2">
            <CiPlay1></CiPlay1>
            <span>View Demo</span>
            
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center overflow-hidden">
        <img
          src={hero}
          alt="dashboard preview"
          className="rounded-2xl shadow-lg w-full max-w-[600px]  max-h-[70%] h-auto object-contain
"
        />
      </div>

    </section>
  );
}
