import React from "react";

const Features = () => {
  return (
    <section  className="min-h-screen py-24 bg-[#080C18] text-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <span className="font-mono text-xs text-[#6366F1] uppercase tracking-widest">
            Platform modules
          </span>

          <h2 className="text-4xl font-bold mt-2">
            Six systems. One dashboard.
          </h2>

          <p className="text-[#64748B] mt-3 max-w-lg">
            Every aspect of placement preparation — academic, technical,
            and logistical — tracked in a single coherent interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          <FeatureCard
            icon="◉"
            title="Student Profile"
            tag="Auto-eligibility"
            description="CGPA, semester, roll number, contact details, and backlog tracking in one unified card."
            color="#6366F1"
          />

          <FeatureCard
            icon="◈"
            title="Skill Tracker"
            tag="6 categories"
            description="Tag technologies by category — Frontend, Backend, Core CS, Soft Skills — with proficiency levels."
            color="#10B981"
          />

          <FeatureCard
            icon="◆"
            title="DSA Tracker"
            tag="15+ topics"
            description="Log Easy / Medium / Hard counts per topic: Arrays, Trees, DP, Graphs, and 10 more."
            color="#F59E0B"
          />

          <FeatureCard
            icon="◇"
            title="Project & Cert Hub"
            tag="Profile health"
            description="Store live demo links, GitHub URLs, certification credentials. Completeness alerts flag gaps."
            color="#F87171"
          />

          <FeatureCard
            icon="◎"
            title="Placement Tracker"
            tag="Pipeline view"
            description="Pipeline from Not Applied → Applied → Shortlisted → Placed."
            color="#A78BFA"
          />

          <FeatureCard
            icon="◐"
            title="Readiness Score"
            tag="Real-time"
            description="Live 0–100 score combining academics, DSA depth, projects, skills, and certifications."
            color="#34D399"
          />

        </div>
      </div>

    </section>
  );
};


const FeatureCard = ({
  icon,
  title,
  tag,
  description,
  color,
}) => {

  return (
    <div
      className="rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#0F1526",
        borderColor: `${color}25`,
      }}
    >

      <div className="flex items-start justify-between mb-4">

        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
          style={{
            color: color,
            background: `${color}15`,
          }}
        >
          {icon}
        </div>

        <span
          className="text-[10px] px-2 py-1 rounded-full border uppercase tracking-wider"
          style={{
            color: color,
            borderColor: `${color}30`,
            background: `${color}10`,
          }}
        >
          {tag}
        </span>

      </div>

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-[#64748B] leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default Features;