
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 bg-[#080C18] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)",
          }}
        />

        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)",
          }}
        />

      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border mb-6"
              style={{
                borderColor: "rgba(99,102,241,0.3)",
                background: "rgba(99,102,241,0.08)",
                color: "#818CF8",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />

              Real-time placement intelligence
            </div>

            {/* Heading */}
            <h1
              className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white"
              style={{
                letterSpacing: "-0.02em",
              }}
            >
              Know exactly{" "}
              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(90deg, #6366F1, #818CF8, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                where you stand
              </span>{" "}
              before every drive.
            </h1>

            {/* Description */}
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 max-w-lg">
              A unified dashboard to track your CGPA, DSA depth, projects,
              certifications, and placement pipeline — with a live readiness
              score that tells you what to fix.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">

              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #6366F1, #818CF8)",
                  boxShadow:
                    "0 4px 24px rgba(99,102,241,0.4)",
                }}
              >
                Start tracking free

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-[#94A3B8] border border-[#1E2A45] hover:border-[#374461] hover:text-white transition-all duration-300"
              >
                See how it works
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center lg:items-end gap-4">

            {/* READINESS CARD */}
            <div className="relative">

              {/* Purple Glow */}
              <div
                className="absolute -inset-5 rounded-3xl blur-2xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl border p-5 w-72"
                style={{
                  background:
                    "linear-gradient(145deg, #0F1526, #151D35)",
                  borderColor:
                    "rgba(99,102,241,0.35)",
                  boxShadow:
                    "0 0 25px rgba(99,102,241,0.18), 0 0 60px rgba(99,102,241,0.08)",
                  animation:
                    "floatCard 4s ease-in-out infinite",
                }}
              >

                {/* Header */}
                <div className="flex items-center justify-between mb-4">

                  <span className="font-mono text-xs text-[#64748B] uppercase tracking-widest">
                    Readiness Score
                  </span>

                  <span className="font-mono text-xs text-[#10B981] bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-800/40">
                    Live
                  </span>

                </div>

                {/* Score Circle */}
                <div className="flex items-center justify-center mb-4">

                  <div className="relative inline-flex items-center justify-center">

                    <svg
                      width="140"
                      height="140"
                      viewBox="0 0 140 140"
                    >

                      <circle
                        cx="70"
                        cy="70"
                        r="54"
                        fill="none"
                        stroke="rgba(99,102,241,0.12)"
                        strokeWidth="10"
                      />

                      <circle
                        cx="70"
                        cy="70"
                        r="54"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="244.29 339.29"
                        strokeDashoffset="84.82"
                        transform="rotate(-90 70 70)"
                      />

                      <defs>
                        <linearGradient
                          id="scoreGradient"
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

                    <div className="absolute flex flex-col items-center">

                      <span className="font-mono text-3xl font-semibold text-white">
                        72
                      </span>

                      <span className="font-mono text-xs text-[#64748B]">
                        / 100
                      </span>

                    </div>

                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">

                  <ProgressItem
                    title="Academics"
                    value="24/30"
                    width="80%"
                    color="#6366F1"
                  />

                  <ProgressItem
                    title="DSA Depth"
                    value="18/25"
                    width="72%"
                    color="#10B981"
                  />

                  <ProgressItem
                    title="Projects"
                    value="14/20"
                    width="70%"
                    color="#F59E0B"
                  />

                  <ProgressItem
                    title="Core Skills"
                    value="10/15"
                    width="66.6%"
                    color="#F87171"
                  />

                  <ProgressItem
                    title="Certifications"
                    value="6/10"
                    width="60%"
                    color="#A78BFA"
                  />

                </div>

              </div>
            </div>

            {/* DSA CARD */}
            <div className="self-start lg:self-auto -mt-2 ml-8 lg:ml-0 lg:-mr-4 relative">

              {/* Orange Glow */}
              <div
                className="absolute -inset-4 rounded-2xl blur-xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,158,11,0.3), transparent 70%)",
                }}
              />

              {/* DSA Card */}
              <div
                className="relative rounded-xl border p-4 w-64"
                style={{
                  background: "#0F1526",
                  borderColor:
                    "rgba(245,158,11,0.25)",
                  boxShadow:
                    "0 0 25px rgba(245,158,11,0.12), 0 0 50px rgba(245,158,11,0.05)",
                  animation:
                    "floatDSA 4.5s ease-in-out infinite",
                }}
              >

                {/* Header */}
                <div className="flex items-center gap-2 mb-3">

                  <span className="text-[#F59E0B]">
                    ◆
                  </span>

                  <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest">
                    DSA Topics
                  </span>

                </div>

                <DSAItem
                  title="Arrays"
                  width="82%"
                  value="82%"
                />

                <DSAItem
                  title="Linked List"
                  width="65%"
                  value="65%"
                />

                <DSAItem
                  title="Trees"
                  width="54%"
                  value="54%"
                />

                <DSAItem
                  title="DP"
                  width="38%"
                  value="38%"
                />

                <DSAItem
                  title="Graphs"
                  width="29%"
                  value="29%"
                />

                {/* Problem Counts */}
                <div className="mt-3 pt-3 border-t border-[#1E2A45] flex gap-3">

                  <ProblemCount
                    number="84"
                    title="Easy"
                    color="#10B981"
                  />

                  <ProblemCount
                    number="62"
                    title="Med"
                    color="#F59E0B"
                  />

                  <ProblemCount
                    number="21"
                    title="Hard"
                    color="#F87171"
                  />

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes floatDSA {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>

    </section>
  );
};


/* Progress Item */
const ProgressItem = ({
  title,
  value,
  width,
  color,
}) => {
  return (
    <div className="flex items-center gap-2">

      <span className="font-mono text-[10px] text-[#64748B] w-20 shrink-0">
        {title}
      </span>

      <div className="flex-1 h-1.5 rounded-full bg-[#1E2A45] overflow-hidden">

        <div
          className="h-full rounded-full"
          style={{
            width: width,
            background: color,
          }}
        />

      </div>

      <span
        className="font-mono text-[10px]"
        style={{
          color: color,
        }}
      >
        {value}
      </span>

    </div>
  );
};


/* DSA Item */
const DSAItem = ({
  title,
  width,
  value,
}) => {
  return (
    <div className="flex items-center gap-2 mb-2">

      <span className="text-[11px] text-[#64748B] w-20 shrink-0">
        {title}
      </span>

      <div className="flex-1 h-1.5 rounded-full bg-[#1E2A45] overflow-hidden">

        <div
          className="h-full rounded-full"
          style={{
            width: width,
            background:
              "linear-gradient(90deg, #F59E0B, #FCD34D)",
          }}
        />

      </div>

      <span className="font-mono text-[10px] text-[#64748B]">
        {value}
      </span>

    </div>
  );
};


/* Problem Count */
const ProblemCount = ({
  number,
  title,
  color,
}) => {
  return (
    <div className="flex flex-col items-center flex-1">

      <span
        className="font-mono text-lg font-semibold"
        style={{
          color: color,
        }}
      >
        {number}
      </span>

      <span className="font-mono text-[9px] text-[#475569] uppercase">
        {title}
      </span>

    </div>
  );
};


export default HeroSection;




