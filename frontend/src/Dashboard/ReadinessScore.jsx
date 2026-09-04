import React from "react";

const ReadinessScore = () => {
  const scores = [
    {
      title: "Academics",
      score: 24,
      total: 30,
      percentage: 80,
      color: "#6366F1",
    },
    {
      title: "DSA Depth",
      score: 18,
      total: 25,
      percentage: 72,
      color: "#10B981",
    },
    {
      title: "Projects",
      score: 14,
      total: 20,
      percentage: 70,
      color: "#F59E0B",
    },
    {
      title: "Core Skills",
      score: 10,
      total: 15,
      percentage: 67,
      color: "#F87171",
    },
    {
      title: "Certifications",
      score: 6,
      total: 10,
      percentage: 60,
      color: "#A78BFA",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080C18] text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">
            Readiness
          </span>

          <h1 className="text-4xl font-bold mt-2">Your Placement Readiness</h1>

          <p className="text-[#64748B] mt-2">
            Understand where you stand and what you should improve before your
            next placement drive.
          </p>
        </div>

        {/* Main Score */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Score Card */}
          <div
            className="lg:col-span-1 rounded-2xl border p-8 flex flex-col items-center justify-center"
            style={{
              background: "#0F1526",
              borderColor: "rgba(99,102,241,0.2)",
            }}
          >
            <span className="font-mono text-xs text-[#64748B] uppercase tracking-widest">
              Overall Score
            </span>

            {/* Circle */}
            <div className="relative flex items-center justify-center my-6">
              <svg width="190" height="190" viewBox="0 0 190 190">
                <circle
                  cx="95"
                  cy="95"
                  r="72"
                  fill="none"
                  stroke="rgba(99,102,241,0.12)"
                  strokeWidth="14"
                />

                <circle
                  cx="95"
                  cy="95"
                  r="72"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="325 452"
                  transform="rotate(-90 95 95)"
                />

                <defs>
                  <linearGradient
                    id="scoreGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute text-center">
                <div className="font-mono text-5xl font-bold">72</div>

                <div className="font-mono text-xs text-[#64748B]">/ 100</div>
              </div>
            </div>

            <div className="text-[#10B981] font-semibold">Good Progress</div>

            <p className="text-xs text-[#64748B] text-center mt-2">
              You are on track for most placement drives.
            </p>
          </div>

          {/* Score Breakdown */}
          <div
            className="lg:col-span-2 rounded-2xl border p-6"
            style={{
              background: "#0F1526",
              borderColor: "rgba(99,102,241,0.15)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Score Breakdown</h2>

                <p className="text-xs text-[#64748B] mt-1">
                  Your score across five placement dimensions
                </p>
              </div>

              <span className="font-mono text-xs text-[#64748B]">Live</span>
            </div>

            <div className="space-y-5">
              {scores.map((item) => (
                <div key={item.title}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#94A3B8]">{item.title}</span>

                    <span
                      className="font-mono text-xs"
                      style={{ color: item.color }}
                    >
                      {item.score}/{item.total}
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-[#151D35] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${item.percentage}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improvement Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div
            className="rounded-2xl border p-6"
            style={{
              background: "#0F1526",
              borderColor: "rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#10B981]">
                ✓
              </div>

              <div>
                <h2 className="font-semibold">Your Strengths</h2>

                <p className="text-xs text-[#64748B]">
                  Areas where you're doing well
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#151D35]">
                <div className="flex justify-between">
                  <span className="text-sm">Academics</span>

                  <span className="text-xs text-[#10B981]">80%</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#151D35]">
                <div className="flex justify-between">
                  <span className="text-sm">DSA</span>

                  <span className="text-xs text-[#10B981]">72%</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#151D35]">
                <div className="flex justify-between">
                  <span className="text-sm">Projects</span>

                  <span className="text-xs text-[#10B981]">70%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Improvements */}
          <div
            className="rounded-2xl border p-6"
            style={{
              background: "#0F1526",
              borderColor: "rgba(245,158,11,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#F59E0B]">
                !
              </div>

              <div>
                <h2 className="font-semibold">Needs Improvement</h2>

                <p className="text-xs text-[#64748B]">
                  Focus on these areas next
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#151D35]">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Certifications</span>

                  <span className="text-xs text-[#F59E0B]">60%</span>
                </div>

                <p className="text-xs text-[#64748B]">
                  Add relevant certifications to improve your profile.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#151D35]">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Core Skills</span>

                  <span className="text-xs text-[#F59E0B]">67%</span>
                </div>

                <p className="text-xs text-[#64748B]">
                  Strengthen your technical and communication skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formula */}
        <div
          className="mt-6 rounded-xl border p-5"
          style={{
            background: "rgba(99,102,241,0.05)",
            borderColor: "rgba(99,102,241,0.15)",
          }}
        >
          <span className="font-mono text-xs text-[#64748B]">
            Score Formula
          </span>

          <p className="font-mono text-xs text-[#818CF8] mt-2 leading-relaxed">
            score = (academics × 0.30) + (dsa × 0.25) + (projects × 0.20) +
            (skills × 0.15) + (certifications × 0.10) − backlog penalty
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadinessScore;
