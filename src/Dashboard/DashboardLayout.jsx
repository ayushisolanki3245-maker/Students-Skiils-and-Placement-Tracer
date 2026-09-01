import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white">
      {/* ================= TOP NAVBAR ================= */}
      <header className="h-16 bg-[#0B1020] border-b border-[#1E2A45] flex items-center justify-between px-5 md:px-8">
        {/* LOGO */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #6366F1, #10B981)",
            }}
          >
            <span className="font-bold text-lg">P</span>
          </div>

          <span className="text-lg font-semibold">PlaceTrack</span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Profile */}
          <Link to="/profile" className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">Ayushi Solanki</p>

              <p className="text-xs text-[#64748B]">BCA · Semester 4</p>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#6366F1] flex items-center justify-center font-semibold">
              A
            </div>
          </Link>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#F87171] border border-[#F87171]/20 hover:bg-[#F87171]/10 hover:border-[#F87171]/40 transition"
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* ================= SIDEBAR ================= */}
        <aside className="hidden md:flex w-64 bg-[#0B1020] border-r border-[#1E2A45] flex-col">
          <nav className="flex-1 p-4 space-y-2">
            <SidebarLink to="/dashboard" icon="⌂" text="Dashboard" />

            <SidebarLink to="/profile" icon="👤" text="Profile" />

            <SidebarLink to="/skills" icon="◆" text="Skills" />

            <SidebarLink to="/dsa-tracker" icon="◇" text="DSA Tracker" />

            <SidebarLink to="/projects" icon="▣" text="Projects" />

            <SidebarLink to="/certifications" icon="◇" text="Certifications" />

            <SidebarLink to="/placements" icon="◎" text="Placement Tracker" />

            <SidebarLink
              to="/readiness-score"
              icon="◉"
              text="Readiness Score"
            />
            <SidebarLink to="/ai-insights" icon="🤖" text="AI Insights" />
          </nav>
        </aside>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

/* ================= SIDEBAR LINK ================= */

const SidebarLink = ({ to, icon, text }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#94A3B8] hover:bg-[#151D35] hover:text-white transition"
    >
      <span>{icon}</span>

      <span>{text}</span>
    </Link>
  );
};

export default DashboardLayout;
