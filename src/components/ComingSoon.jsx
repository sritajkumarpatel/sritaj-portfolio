import React from "react";
import { Zap } from "lucide-react";

export default function ComingSoon() {
  return (
    <div>
      <h4 className="text-xl font-bold text-purple-300 mb-4">Coming Soon</h4>
      <div className="flex items-center justify-center">
        <div className="text-center w-full">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur rounded-2xl p-12 border-2 border-purple-500/30">
            <Zap className="text-purple-400 mx-auto mb-4" size={48} />
            <h4 className="text-2xl font-bold text-purple-300 mb-3">
              More Exciting Projects
            </h4>
            <p className="text-gray-400 text-base mb-6 max-w-md mx-auto">
              Working on innovative projects in test automation, AI tools,
              plugins, and related integrations. Exciting updates coming soon!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                🧪 Test Automation
              </span>
              <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                🤖 AI Tools
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                🔌 Plugins & Integrations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
