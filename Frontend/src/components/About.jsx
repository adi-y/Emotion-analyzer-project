import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('/bg-dark-light.png')" }}
    >
      <div className="w-full max-w-5xl bg-black/30 backdrop-blur-md p-12 md:p-16 rounded-3xl shadow-2xl text-white text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-md">
          Unlock the Power of{" "}
          <span className="text-purple-400">MindMender</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Your personal AI-powered therapist — analyzing your emotions with
          precision, privacy, and purpose.
        </p>

        {/* Features List */}
        <ul className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto text-purple-100 text-md md:text-lg mb-10">
          <li className="flex gap-3 items-start">
            <span>🧠</span>
            <span>Instant Emotion Detection from your thoughts</span>
          </li>
          <li className="flex gap-3 items-start">
            <span>📈</span>
            <span>AI-backed Confidence Level in every response</span>
          </li>
          <li className="flex gap-3 items-start">
            <span>💡</span>
            <span>Smart Suggestions tailored to your emotional state</span>
          </li>
          <li className="flex gap-3 items-start">
            <span>🔒</span>
            <span>100% Private & Secure — nothing is stored</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/analyze")}
          className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105"
        >
          🎯 Try It Now
        </button>
      </div>
    </div>
  );
}
