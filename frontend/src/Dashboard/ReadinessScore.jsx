import React, { useEffect, useState } from "react";
import { apiRequest } from "../api";

const ReadinessScore = () => {
  const [readiness, setReadiness] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { apiRequest("/api/readiness").then(setReadiness).catch((e) => setError(e.message)); }, []);

  const breakdown = readiness?.breakdown || {};
  const progress = readiness?.categoryProgress || {};
  const parts = [
    ["CGPA", breakdown.cgpa, 20, "#6366F1"],
    ["DSA", breakdown.dsa, 25, "#10B981"],
    ["MERN skills", breakdown.mern, 20, "#F59E0B"],
    ["Fundamentals", breakdown.fundamentals, 10, "#F87171"],
    ["Communication", breakdown.communication, 5, "#A78BFA"],
    ["Projects", breakdown.projects, 15, "#38BDF8"],
    ["Certifications", breakdown.certs, 5, "#EC4899"],
  ];

  return <div className="min-h-screen bg-[#080C18] text-white px-6 py-10"><div className="max-w-6xl mx-auto">
    <div className="mb-10"><span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">Readiness</span><h1 className="text-4xl font-bold mt-2">Your Placement Readiness</h1><p className="text-[#64748B] mt-2">Your current preparation score and progress by category.</p></div>
    {error && <p role="alert" className="mb-5 text-sm text-red-300">{error}</p>}
    {!readiness && !error && <p className="text-[#94A3B8]">Loading readiness…</p>}
    {readiness && <>
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <section className="rounded-2xl border border-indigo-500/20 p-8 bg-[#0F1526] flex flex-col items-center justify-center"><span className="font-mono text-xs text-[#64748B] uppercase tracking-widest">Overall Score</span><div className="my-6 text-center"><div className="font-mono text-6xl font-bold">{readiness.score}</div><div className="font-mono text-xs text-[#64748B]">/ 100</div></div><div className="text-[#10B981] font-semibold">{readiness.label}</div></section>
        <section className="lg:col-span-2 rounded-2xl border border-indigo-500/15 p-6 bg-[#0F1526]"><h2 className="text-lg font-semibold mb-6">Score Breakdown</h2><div className="space-y-4">{parts.map(([title, score = 0, max, color]) => <div key={title}><div className="flex justify-between mb-2"><span className="text-sm text-[#94A3B8]">{title}</span><span className="font-mono text-xs" style={{ color }}>{score}/{max}</span></div><div className="h-2 rounded-full bg-[#151D35] overflow-hidden"><div className="h-full rounded-full" style={{ width: `${Math.min(100, Math.max(0, score / max * 100))}%`, background: color }} /></div></div>)}{breakdown.backlogPenalty < 0 && <p className="text-xs text-red-300">Backlog penalty: {breakdown.backlogPenalty} points</p>}</div></section>
      </div>
      <section className="rounded-2xl border border-[#1E2A45] p-6 bg-[#0F1526]"><h2 className="text-lg font-semibold mb-1">Preparation Progress</h2><p className="text-xs text-[#64748B] mb-6">Category progress returned by the readiness service.</p><div className="grid md:grid-cols-2 gap-5">{[["DSA", progress.dsa], ["MERN", progress.mern], ["Fundamentals", progress.fundamentals], ["Communication", progress.communication]].map(([name, value = 0]) => <div key={name}><div className="flex justify-between mb-2 text-sm"><span>{name}</span><span className="text-[#818CF8]">{value}%</span></div><div className="h-2 rounded-full bg-[#151D35] overflow-hidden"><div className="h-full bg-indigo-500 rounded-full" style={{ width: `${value}%` }} /></div></div>)}</div></section>
    </>}
  </div></div>;
};

export default ReadinessScore;
