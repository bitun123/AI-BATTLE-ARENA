import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Send, User, Bot, Award, Star } from "lucide-react";

interface JudgeResult {
  solution_1_Score: number;
  solution_2_Score: number;
  solution_1_Reasoning: string;
  solution_2_Reasoning: string;
}

interface BattleResult {
  solution_1: string;
  solution_2: string;
  judge: JudgeResult;
}

function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<BattleResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    // Placeholder for actual API call
    console.log("Sending prompt:", input);
    // Simulating response for UI demonstration
    setTimeout(() => {
      setResults({
        solution_1: "This is message from Mistral AI model based on the prompt provided in the input field.",
        solution_2: "This is response from Cohere AI model. It provides an alternative perspective or solution.",
        judge: {
          solution_1_Score: 8,
          solution_2_Score: 7,
          solution_1_Reasoning: "The Mistral response was more concise and directly addressed the problem statement with clear syntax.",
          solution_2_Reasoning: "The Cohere response was detailed but slightly verbose in its explanation."
        }
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-[#020618] text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* AI Responses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI-1 Response */}
              <div className="flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden min-h-[300px]">
                <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={18} className="text-blue-400" />
                    <span className="font-semibold text-slate-200">AI-1 (Mistral)</span>
                  </div>
                  {results && (
                    <div className="flex items-center gap-1 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                      <Star size={14} className="text-blue-400 fill-blue-400" />
                      <span className="text-xs font-bold text-blue-400">{results.judge.solution_1_Score}/10</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 text-slate-300 leading-relaxed overflow-y-auto">
                  {results ? results.solution_1 : (loading ? "Generating response..." : "Response will appear here...")}
                </div>
              </div>

              {/* AI-2 Response */}
              <div className="flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden min-h-[300px]">
                <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={18} className="text-purple-400" />
                    <span className="font-semibold text-slate-200">AI-2 (Cohere)</span>
                  </div>
                  {results && (
                    <div className="flex items-center gap-1 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                      <Star size={14} className="text-purple-400 fill-purple-400" />
                      <span className="text-xs font-bold text-purple-400">{results.judge.solution_2_Score}/10</span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 text-slate-300 leading-relaxed overflow-y-auto">
                  {results ? results.solution_2 : (loading ? "Generating response..." : "Response will appear here...")}
                </div>
              </div>
            </div>

            {/* Judge Verification Field */}
            <div className="bg-slate-900/80 border border-indigo-500/30 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/5">
              <div className="bg-indigo-500/10 px-4 py-3 border-b border-indigo-500/20 flex items-center gap-2">
                < Award size={18} className="text-indigo-400" />
                <span className="font-semibold text-indigo-200">AI Judge (Gemini)</span>
              </div>
              <div className="p-6 space-y-4">
                {results ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider">AI-1 Evaluation</h4>
                      <p className="text-slate-300 text-sm italic">"{results.judge.solution_1_Reasoning}"</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">AI-2 Evaluation</h4>
                      <p className="text-slate-300 text-sm italic">"{results.judge.solution_2_Reasoning}"</p>
                    </div>
                    <div className="md:col-span-2 pt-4 border-t border-slate-800 text-center">
                      <span className="text-lg font-medium text-slate-200">
                        Final Verdict: <span className="text-indigo-400">{results.judge.solution_1_Score >= results.judge.solution_2_Score ? "AI-1 Wins!" : "AI-2 Wins!"}</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <p>Enter a prompt below to see the models battle it out.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Input Field */}
        <div className="p-4 md:p-6 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Enter your prompt here..."
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-6 pr-14 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
