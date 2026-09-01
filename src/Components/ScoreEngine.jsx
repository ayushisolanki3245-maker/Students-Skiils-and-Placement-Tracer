
import React from "react";

const ScoreEngine = () => {
  const scoreData = [
    {
      name: "Academics",
      weight: "30%",
      score: "24/30",
      width: "80%",
      color: "#6366F1",
    },
    {
      name: "DSA Depth",
      weight: "25%",
      score: "18/25",
      width: "72%",
      color: "#10B981",
    },
    {
      name: "Projects",
      weight: "20%",
      score: "14/20",
      width: "70%",
      color: "#F59E0B",
    },
    {
      name: "Core Skills",
      weight: "15%",
      score: "10/15",
      width: "66.6%",
      color: "#F87171",
    },
    {
      name: "Certifications",
      weight: "10%",
      score: "6/10",
      width: "60%",
      color: "#A78BFA",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-[#080C18] text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Label */}
            <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
              Score engine
            </span>

            {/* Heading */}
            <h2 className="text-4xl font-bold mt-2 mb-4 leading-tight">
              A live readiness score that actually makes sense
            </h2>

            {/* Description */}
            <p className="text-[#64748B] mb-8 leading-relaxed">
              The score is calculated across five weighted dimensions.
              Backlog penalties are applied to the academics component.
              Every update to your profile recalculates the score instantly.
            </p>


            {/* Score Progress */}
            <div className="space-y-4">

              {scoreData.map((item) => (

                <div key={item.name}>

                  {/* Label */}
                  <div className="flex justify-between text-sm mb-1.5">

                    <span className="text-[#94A3B8]">
                      {item.name}
                    </span>

                    <div className="flex items-center gap-2">

                      <span className="font-mono text-xs text-[#475569]">
                        {item.weight}
                      </span>

                      <span
                        className="font-mono text-sm"
                        style={{ color: item.color }}
                      >
                        {item.score}
                      </span>

                    </div>

                  </div>


                  {/* Progress Bar */}
                  <div className="h-2 rounded-full bg-[#151D35] overflow-hidden">

                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: item.width,
                        background: `linear-gradient(90deg, ${item.color}99, ${item.color})`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>


            {/* Formula */}
            <div
              className="mt-6 p-4 rounded-xl border"
              style={{
                background: "rgba(99,102,241,0.06)",
                borderColor: "rgba(99,102,241,0.15)",
              }}
            >

              <span className="font-mono text-xs text-[#64748B]">
                Score formula
              </span>

              <pre className="font-mono text-xs text-[#818CF8] mt-2 whitespace-pre-wrap leading-relaxed">
{`score = (cgpa_norm × 0.30)
      + (dsa_weighted × 0.25)
      + (projects × 0.20)
      + (skills × 0.15)
      + (certs × 0.10)
      − (backlog_penalty)`}
              </pre>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center">

            <div
              className="rounded-2xl border p-8 w-full max-w-sm"
              style={{
                background: "#0F1526",
                borderColor: "rgba(99,102,241,0.2)",
              }}
            >

              {/* Score Circle */}
              <div className="text-center mb-6">

                <div className="relative inline-flex items-center justify-center">

                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                  >

                    {/* Background Circle */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="rgba(99,102,241,0.12)"
                      strokeWidth="10"
                    />

                    {/* Progress Circle */}
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="url(#scoreGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="244.29 339.29"
                      strokeDashoffset="84.82"
                      transform="rotate(-90 70 70)"
                    />

                    <defs>

                      <linearGradient
                        id="scoreGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >

                        <stop
                          offset="0%"
                          stopColor="#6366F1"
                        />

                        <stop
                          offset="100%"
                          stopColor="#10B981"
                        />

                      </linearGradient>

                    </defs>

                  </svg>


                  {/* Score Number */}
                  <div className="absolute flex flex-col items-center">

                    <span className="font-mono text-3xl font-semibold text-white">
                      72
                    </span>

                    <span className="font-mono text-xs text-[#64748B] mt-0.5">
                      / 100
                    </span>

                  </div>

                </div>


                {/* Student */}
                <div className="mt-3">

                  <div className="text-xl font-semibold">
                    Arjun Sharma
                  </div>

                  <div className="text-sm text-[#64748B] mt-1">
                    B.Tech CSE · Sem 7 · CGPA 8.4
                  </div>

                </div>

              </div>


              {/* Statistics */}
              <div className="space-y-2.5">

                <StatItem
                  title="Eligible drives"
                  value="18 / 22"
                  color="#10B981"
                />

                <StatItem
                  title="DSA Problems"
                  value="167 solved"
                  color="#F59E0B"
                />

                <StatItem
                  title="Active backlogs"
                  value="0"
                  color="#F87171"
                />

                <StatItem
                  title="Applications"
                  value="9 active"
                  color="#818CF8"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


/* Statistics Component */

const StatItem = ({ title, value, color }) => {
  return (
    <div
      className="flex items-center justify-between p-3 rounded-lg"
      style={{
        background: "#151D35",
      }}
    >

      <span className="text-sm text-[#94A3B8]">
        {title}
      </span>

      <span
        className="font-mono text-sm font-medium"
        style={{ color: color }}
      >
        {value}
      </span>

    </div>
  );
};


export default ScoreEngine;

