import React, { useState } from "react";
import { create } from "../service/AnalyzeService";

export default function Analyze() {
  const [input, setInput] = useState({ text: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await create(input.text);
      setMessage(res);
      setInput({ text: "" });
    } catch (err) {
      console.error(err, "failed to send message");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: "url('/bg-dark-light.png')" }}
    >
      <div className="w-full max-w-6xl bg-black/30 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10 p-10">
        {/* Left: Input Form */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-400 text-center lg:text-left">
            🔮 Emotion Analyzer
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-6 text-center lg:text-left">
            Describe your emotions and thoughts — MindMender AI will decode your
            mood and guide your next move.
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              name="text"
              placeholder="How are you feeling right now?"
              value={input.text}
              onChange={handleChange}
              rows="6"
              className="w-full bg-white/10 text-white rounded-xl border border-purple-600 p-5 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder-gray-400 shadow-md"
            />
            <button
              type="submit"
              className="mt-5 w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 py-3 text-lg font-semibold rounded-xl shadow-lg hover:scale-105"
            >
              Analyze Emotion
            </button>
          </form>
        </div>

        {/* Right: AI Response */}
        <div className="lg:w-1/2 w-full">
          {message ? (
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-800 rounded-2xl shadow-xl p-8 h-full flex flex-col justify-center animate-fade-in-up transition-all duration-500">
              <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">
                🧠 Emotional Insights
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-center">
                {/* Emotion Box */}
                <div>
                  <p className="text-lg font-medium text-purple-300 mb-2">
                    Emotion Detected
                  </p>
                  <div className="text-2xl md:text-3xl font-bold bg-purple-700/20 text-purple-100 px-6 py-4 rounded-xl shadow-inner break-words text-balance">
                    {message.emotion}
                  </div>
                </div>

                {/* Confidence Box */}
                <div>
                  <p className="text-lg font-medium text-green-300 mb-2">
                    Confidence Level
                  </p>
                  <div className="text-xl md:text-2xl font-semibold bg-green-700/20 text-green-100 px-6 py-4 rounded-xl shadow-inner break-words text-balance">
                    {message.confidence}
                  </div>
                </div>
              </div>

              {/* AI Tip Box */}
              <div className="mt-10 p-6 rounded-xl border-l-4 border-purple-500 bg-purple-900/30 text-purple-100 shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  💡 AI Tip for You
                </h3>
                <p className="text-base leading-relaxed">{message.tip}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-lg text-center px-4">
              🧠 Your personalized analysis will appear here after submission.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
