import React, { useEffect, useState } from "react";
import { apiRequest } from "../../api";

const AIPlacementInsights = () => {
  const [jobs, setJobs] = useState([]);
  const [matches, setMatches] = useState({});
  const [loadingMatch, setLoadingMatch] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { apiRequest("/api/jobs").then(setJobs).catch((e) => setError(e.message)); }, []);

  const loadMatch = async (jobId) => {
    setLoadingMatch(jobId); setError("");
    try { const result = await apiRequest(`/api/jobs/${jobId}/match`); setMatches((current) => ({ ...current, [jobId]: result })); }
    catch (e) { setError(e.message); }
    finally { setLoadingMatch(null); }
  };

  return <div className="min-h-screen bg-[#080C18] text-white">
    <header className="border-b border-[#1E2A45] bg-[#0B1020]"><div className="max-w-7xl mx-auto px-6 md:px-8 py-7"><p className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest">Career Explorer</p><h1 className="text-3xl font-bold mt-2">Job Matches</h1><p className="text-sm text-[#64748B] mt-2">Compare your saved skills with the available placement roles.</p></div></header>
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">
      {error && <p role="alert" className="mb-5 text-sm text-red-300">{error}</p>}
      {!jobs.length && !error && <p className="text-[#94A3B8]">Loading jobs…</p>}
      <div className="grid lg:grid-cols-2 gap-5">{jobs.map((job) => {
        const result = matches[job._id];
        return <article key={job._id} className="rounded-2xl border border-[#1E2A45] bg-[#0F1526] p-6">
          <div className="flex justify-between gap-4"><div><h2 className="text-lg font-semibold">{job.title}</h2><p className="text-sm text-[#94A3B8] mt-1">{job.company}{job.package ? ` · ${job.package}` : ""}</p></div>{result && <span className="shrink-0 rounded-full bg-indigo-500/15 px-3 py-1 text-sm text-indigo-300">{result.matchPercent == null ? "N/A" : `${result.matchPercent}%`} match</span>}</div>
          <div className="mt-4 flex flex-wrap gap-2">{(job.requiredSkills || []).map((skill) => <span key={skill} className="rounded-full border border-[#1E2A45] bg-[#151D35] px-2.5 py-1 text-xs text-[#94A3B8]">{skill}</span>)}</div>
          <button onClick={() => loadMatch(job._id)} disabled={loadingMatch === job._id} className="mt-5 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400 disabled:opacity-60">{loadingMatch === job._id ? "Checking…" : result ? "Refresh match" : "Check my match"}</button>
          {result && <div className="mt-5 border-t border-[#1E2A45] pt-5 space-y-4">
            <p className="text-sm text-[#94A3B8]">Priority area: <strong className="text-[#FBBF24]">{result.topPriority || "No gaps"}</strong></p>
            <div className="grid sm:grid-cols-2 gap-4"><div><h3 className="text-xs uppercase tracking-wide text-emerald-300">Matched skills</h3><p className="text-sm text-[#94A3B8] mt-2">{result.matchedSkills?.join(", ") || "None yet"}</p></div><div><h3 className="text-xs uppercase tracking-wide text-amber-300">Skills to build</h3><p className="text-sm text-[#94A3B8] mt-2">{result.missingSkills?.join(", ") || "No missing required skills"}</p></div></div>
            {!!result.categoryGaps?.length && <div><h3 className="text-xs uppercase tracking-wide text-[#64748B] mb-3">Preparation gaps</h3><div className="space-y-2">{result.categoryGaps.map((gap) => <div key={gap.category} className="flex justify-between rounded-lg bg-[#151D35] p-3 text-sm"><span className="capitalize text-[#94A3B8]">{gap.category}</span><span className="text-[#FBBF24]">{gap.userPercent}% · gap {gap.gapScore}</span></div>)}</div></div>}
          </div>}
        </article>;
      })}</div>
      <p className="mt-8 text-xs text-[#64748B]">Job matching is based on your profile data and backend scoring. AI generated recommendations are not available yet.</p>
    </main>
  </div>;
};

export default AIPlacementInsights;
