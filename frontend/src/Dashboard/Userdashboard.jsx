import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../api";

const UserDashboard = () => {
  const [data, setData] = useState({ profile: null, dsa: [], placements: [], readiness: null });
  const [error, setError] = useState("");
  useEffect(() => {
    Promise.allSettled([apiRequest("/api/profile"), apiRequest("/api/dsa"), apiRequest("/api/placements"), apiRequest("/api/readiness")]).then((results) => {
      const [profile, dsa, placements, readiness] = results;
      setData({ profile: profile.status === "fulfilled" ? profile.value : null, dsa: dsa.status === "fulfilled" ? dsa.value : [], placements: placements.status === "fulfilled" ? placements.value : [], readiness: readiness.status === "fulfilled" ? readiness.value : null });
      const failed = results.find((result) => result.status === "rejected");
      if (failed) setError(failed.reason.message);
    });
  }, []);
  const solved = data.dsa.reduce((sum, topic) => sum + (topic.easy || 0) + (topic.medium || 0) + (topic.hard || 0), 0);
  const readiness = data.readiness;
  const progress = readiness?.categoryProgress || {};
  return (
    <div className="min-h-screen bg-[#080C18] text-white">
      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* ================= WELCOME ================= */}

        <div className="mb-8">
          <p className="font-mono text-xs text-[#10B981] uppercase tracking-widest">
            Overview
          </p>

            <h1 className="text-3xl font-bold mt-2">Welcome back{data.profile?.username ? `, ${data.profile.username}` : ""} 👋</h1>

          <p className="text-[#64748B] mt-2">
            Here's how your placement preparation is going.
          </p>
        </div>
        {error && <p role="alert" className="mb-5 text-sm text-amber-300">Some dashboard data could not load: {error}</p>}

        {/* ================= STAT CARDS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="CGPA"
            value={data.profile?.profile?.cgpa ?? "—"}
            subtitle="Current"
            color="#6366F1"
          />

          <StatCard
            title="DSA Problems"
            value={solved}
            subtitle="Problems solved"
            color="#10B981"
          />

          <StatCard
            title="Applications"
            value={data.placements.length}
            subtitle="Active applications"
            color="#F59E0B"
          />

          <StatCard
            title="Readiness"
            value={readiness?.score ?? "—"}
            subtitle="Out of 100"
            color="#A78BFA"
          />
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* READINESS OVERVIEW */}

          <div className="lg:col-span-2 bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold">Readiness Overview</h2>

                <p className="text-sm text-[#64748B] mt-1">
                  Your current placement preparation score
                </p>
              </div>

              <Link
                to="/readiness-score"
                className="text-xs text-[#818CF8] hover:text-white"
              >
                View details →
              </Link>
            </div>

            <div className="space-y-5">
              <Progress title="DSA" value={`${progress.dsa ?? 0}%`} width={`${progress.dsa ?? 0}%`} color="#10B981" />

              <Progress title="MERN" value={`${progress.mern ?? 0}%`} width={`${progress.mern ?? 0}%`} color="#6366F1" />

              <Progress title="Fundamentals" value={`${progress.fundamentals ?? 0}%`} width={`${progress.fundamentals ?? 0}%`} color="#F59E0B" />

              <Progress title="Communication" value={`${progress.communication ?? 0}%`} width={`${progress.communication ?? 0}%`} color="#F87171" />

              <Progress title="Readiness score" value={`${readiness?.score ?? 0} / 100`} width={`${readiness?.score ?? 0}%`} color="#A78BFA" />
            </div>
          </div>

          {/* SCORE */}

          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 flex flex-col items-center justify-center">
            <p className="font-mono text-xs text-[#64748B] uppercase tracking-widest">
              Readiness Score
            </p>

            <div className="relative w-36 h-36 flex items-center justify-center my-5">
              <div className="absolute inset-0 rounded-full border-8 border-[#151D35]" />

              <div
                className="absolute inset-0 rounded-full border-8 border-transparent"
                style={{
                  borderTopColor: "#6366F1",
                  borderRightColor: "#10B981",
                  transform: "rotate(-45deg)",
                }}
              />

              <div className="text-center">
                  <div className="text-4xl font-bold">{readiness?.score ?? "—"}</div>

                <div className="text-xs text-[#64748B]">/ 100</div>
              </div>
            </div>

            <span className="text-sm text-[#10B981]">{readiness?.label || "Add data to get started"}</span>
          </div>
        </div>

        {/* ================= BOTTOM GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* APPLICATIONS */}

          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold">Recent Applications</h2>

              <Link to="/placements" className="text-xs text-[#818CF8]">
                View all →
              </Link>
            </div>

            <div className="space-y-3">{data.placements.slice(0, 3).map((placement) => <Application key={placement._id} company={placement.company} role={placement.role} status={placement.status} statusColor={placement.status === "Placed" ? "#10B981" : placement.status === "Rejected" ? "#F87171" : "#F59E0B"} />)}{data.placements.length === 0 && <p className="text-sm text-[#64748B]">No placement drives yet.</p>}</div>
          </div>

          {/* QUICK ACTIONS */}

          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
            <h2 className="font-semibold mb-5">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-3">
              <QuickAction title="Update Profile" link="/profile" />

              <QuickAction title="Add Skill" link="/skills" />

              <QuickAction title="Log DSA Problem" link="/dsa-tracker" />

              <QuickAction title="Add Application" link="/placements" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({ title, value, subtitle, color }) => {
  return (
    <div className="bg-[#0F1526] border border-[#1E2A45] rounded-xl p-5">
      <div
        className="text-xs font-mono uppercase tracking-wider mb-3"
        style={{ color }}
      >
        {title}
      </div>

      <div className="text-2xl font-bold">{value}</div>

      <p className="text-xs text-[#64748B] mt-1">{subtitle}</p>
    </div>
  );
};

/* ================= PROGRESS ================= */

const Progress = ({ title, value, width, color }) => {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#94A3B8]">{title}</span>

        <span className="font-mono text-xs" style={{ color }}>
          {value}
        </span>
      </div>

      <div className="h-2 rounded-full bg-[#151D35] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width,
            background: color,
          }}
        />
      </div>
    </div>
  );
};

/* ================= APPLICATION ================= */

const Application = ({ company, role, status, statusColor }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-[#151D35]">
      <div className="w-9 h-9 rounded-lg bg-[#6366F1]/15 text-[#818CF8] flex items-center justify-center font-semibold">
        {company.charAt(0)}
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{company}</p>

        <p className="text-xs text-[#64748B]">{role}</p>
      </div>

      <span
        className="text-[10px] px-2 py-1 rounded-full border"
        style={{
          color: statusColor,
          borderColor: `${statusColor}40`,
          background: `${statusColor}10`,
        }}
      >
        {status}
      </span>
    </div>
  );
};

/* ================= QUICK ACTION ================= */

const QuickAction = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="p-4 rounded-lg border border-[#1E2A45] bg-[#080C18] text-sm text-[#94A3B8] hover:text-white hover:border-[#6366F1] transition"
    >
      {title}

      <span className="block text-xs text-[#475569] mt-1">Open →</span>
    </Link>
  );
};

export default UserDashboard;
