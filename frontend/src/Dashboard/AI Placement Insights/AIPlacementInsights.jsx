import React from "react";
import { Link } from "react-router-dom";

const AIPlacementInsights = () => {
  return (
    <div className="min-h-screen bg-[#080C18] text-white">
      {/* ================= HEADER ================= */}
      <div className="border-b border-[#1E2A45] bg-[#0B1020]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest">
                AI Placement Insights
              </p>

              <h1 className="text-2xl md:text-3xl font-bold mt-2">
                Know where you stand.
              </h1>

              <p className="text-sm text-[#64748B] mt-2 max-w-xl">
                AI-powered analysis of your academics, skills, DSA, projects,
                and placement activity.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#A78BFA]/20 bg-[#A78BFA]/10">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
              <span className="text-xs text-[#C4B5FD]">AI Analysis Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        {/* ================= OVERALL INSIGHT ================= */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#A78BFA] text-lg">✦</span>

                <h2 className="font-semibold">AI Career Summary</h2>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-2xl">
                Based on your current profile, you have a strong academic
                foundation and good project experience. Your biggest improvement
                opportunity is DSA consistency and technical interview
                preparation.
              </p>
            </div>

            <div className="text-center min-w-28">
              <div className="text-4xl font-bold text-[#A78BFA]">72</div>

              <p className="text-xs text-[#64748B] mt-1">Placement readiness</p>
            </div>
          </div>
        </div>

        {/* ================= INSIGHT GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <InsightCard
            title="Your Strength"
            icon="↑"
            color="#10B981"
            text="Your academic performance and project portfolio are currently your strongest areas."
          />

          <InsightCard
            title="Needs Attention"
            icon="!"
            color="#F59E0B"
            text="Your DSA preparation is behind the recommended level for your target roles."
          />

          <InsightCard
            title="Recommended Focus"
            icon="→"
            color="#6366F1"
            text="Focus on Arrays, Trees, Graphs and Dynamic Programming this month."
          />
        </div>

        {/* ================= TARGET ROLES ================= */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="font-semibold">AI Recommended Roles</h2>

              <p className="text-xs text-[#64748B] mt-1">
                Based on your current skills and preparation
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RoleCard
              role="Frontend Developer"
              match="86%"
              skills="React · JavaScript · HTML · CSS"
              color="#6366F1"
            />

            <RoleCard
              role="Full Stack Developer"
              match="74%"
              skills="React · Node.js · SQL · APIs"
              color="#10B981"
            />

            <RoleCard
              role="Software Engineer"
              match="68%"
              skills="DSA · Java · OOP · DBMS"
              color="#F59E0B"
            />
          </div>
        </div>

        {/* ================= ACTION PLAN ================= */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* TODAY */}
          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#10B981]">✓</span>

              <h2 className="font-semibold">AI Action Plan</h2>
            </div>

            <div className="space-y-4">
              <ActionItem
                number="01"
                title="Solve 2 DSA problems"
                description="Focus on Array and HashMap problems."
              />

              <ActionItem
                number="02"
                title="Complete one project improvement"
                description="Add authentication or improve your existing project."
              />

              <ActionItem
                number="03"
                title="Update your profile"
                description="Add missing skills and certifications."
              />
            </div>
          </div>

          {/* WARNING */}
          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#F59E0B]">⚠</span>

              <h2 className="font-semibold">Placement Gaps</h2>
            </div>

            <div className="space-y-3">
              <GapItem title="DSA" value="Needs improvement" color="#F59E0B" />

              <GapItem
                title="Certifications"
                value="Add 1–2 relevant certifications"
                color="#A78BFA"
              />

              <GapItem
                title="Interview Preparation"
                value="Start mock interviews"
                color="#F87171"
              />
            </div>

            <Link
              to="/readiness-score"
              className="inline-block mt-5 text-xs text-[#818CF8] hover:text-white transition"
            >
              View readiness breakdown →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

/* ================================================= */
/* INSIGHT CARD */
/* ================================================= */

const InsightCard = ({ title, icon, color, text }) => {
  return (
    <div className="bg-[#0F1526] border border-[#1E2A45] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center font-bold"
          style={{
            color,
            background: `${color}15`,
          }}
        >
          {icon}
        </div>

        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-[#64748B] leading-relaxed">{text}</p>
    </div>
  );
};

/* ================================================= */
/* ROLE CARD */
/* ================================================= */

const RoleCard = ({ role, match, skills, color }) => {
  return (
    <div className="rounded-xl border border-[#1E2A45] bg-[#080C18] p-5">
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-medium text-sm">{role}</h3>

        <span
          className="text-xs font-mono px-2 py-1 rounded-full"
          style={{
            color,
            background: `${color}15`,
          }}
        >
          {match} match
        </span>
      </div>

      <p className="text-xs text-[#64748B] mt-3">{skills}</p>
    </div>
  );
};

/* ================================================= */
/* ACTION ITEM */
/* ================================================= */

const ActionItem = ({ number, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="font-mono text-xs text-[#6366F1] pt-1">{number}</div>

      <div>
        <h3 className="text-sm font-medium">{title}</h3>

        <p className="text-xs text-[#64748B] mt-1">{description}</p>
      </div>
    </div>
  );
};

/* ================================================= */
/* GAP ITEM */
/* ================================================= */

const GapItem = ({ title, value, color }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#080C18]">
      <span className="text-sm text-[#94A3B8]">{title}</span>

      <span className="text-xs" style={{ color }}>
        {value}
      </span>
    </div>
  );
};

export default AIPlacementInsights;
