import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-between px-10 py-8"
      style={{ backgroundImage: "url('/bg-dark-light.png')" }}
    >
      {/* Left Content */}
      <div className="max-w-2xl text-white bg-black/50   backdrop-blur-md p-10 rounded-2xl shadow-2xl">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          Unlock Your <span className="text-purple-500">Emotions</span> with{" "}
          <br />
          <span className="text-purple-400 drop-shadow-md">MindMender</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
          Your personal AI therapist — understand your mood and emotions
          instantly using cutting-edge AI.
        </p>

        <ul className="list-disc list-inside text-gray-300 text-md mb-8 space-y-2">
          <li>🧠 AI-driven mood analysis in seconds</li>
          <li>📊 Personalized emotional insights</li>
          <li>🔒 Secure & confidential processing</li>
        </ul>

        <button
          onClick={() => navigate("/analyze")}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-105"
        >
          Start Your Journey
        </button>
      </div>

      {/* Right Content */}
      <div className="w-[40%] text-white bg-black/40 border backdrop-blur-md p-8 rounded-2xl shadow-xl text-center hidden lg:flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">
          Why MindMender?
        </h2>
        <p className="text-md text-gray-300 mb-6">
          Discover how AI is revolutionizing emotional well-being. Our insights
          guide you to clarity, peace, and self-awareness.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="text-white font-medium bg-transparent border border-purple-500 px-6 py-2 rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all"
        >
          Learn How It Works
        </button>
      </div>
    </div>
  );
}
