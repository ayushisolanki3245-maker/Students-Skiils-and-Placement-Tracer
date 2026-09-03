
import React from "react";

const Modules = () => {
  const pipeline = [
    {
      name: "Not Applied",
      count: 14,
      width: "43.75%",
      color: "#475569",
    },
    {
      name: "Applied",
      count: 9,
      width: "28.125%",
      color: "#6366F1",
    },
    {
      name: "Shortlisted",
      count: 4,
      width: "12.5%",
      color: "#F59E0B",
    },
    {
      name: "Placed",
      count: 2,
      width: "6.25%",
      color: "#10B981",
    },
    {
      name: "Rejected",
      count: 3,
      width: "9.375%",
      color: "#F87171",
    },
  ];

  const applications = [
    {
      company: "Google",
      logo: "G",
      role: "SWE Intern",
      salary: "₹80,000/mo",
      status: "Shortlisted",
      eligible: true,
    },
    {
      company: "Infosys",
      logo: "I",
      role: "Systems Engineer",
      salary: "3.6 LPA",
      status: "Applied",
      eligible: true,
    },
    {
      company: "Wipro",
      logo: "W",
      role: "Project Engineer",
      salary: "3.5 LPA",
      status: "Applied",
      eligible: true,
    },
    {
      company: "Goldman Sachs",
      logo: "G",
      role: "Technology Analyst",
      salary: "18 LPA",
      status: "Not Applied",
      eligible: false,
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-[#080C18] text-white">

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="mb-14">

          <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest">
            Placement Tracker
          </span>

          <h2 className="text-4xl font-bold mt-2 leading-tight">
            Your entire pipeline, one glance
          </h2>

          <p className="text-[#64748B] mt-3 max-w-xl">
            Track company drives, application status, eligibility,
            shortlisting and placement progress from one dashboard.
          </p>

        </div>


        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">


          {/* LEFT SIDE */}
          <div>

            <div
              className="rounded-2xl border overflow-hidden"
              style={{
                background: "#0F1526",
                borderColor: "rgba(99,102,241,0.15)",
              }}
            >

              {/* Header */}
              <div
                className="px-5 py-4 border-b flex items-center justify-between"
                style={{
                  borderColor: "rgba(99,102,241,0.1)",
                }}
              >

                <span className="text-sm font-medium">
                  Application Pipeline
                </span>

                <span className="font-mono text-xs text-[#64748B]">
                  Placement Season 2025–26
                </span>

              </div>


              {/* Pipeline */}
              <div className="p-5 space-y-4">

                {pipeline.map((item) => (

                  <div
                    key={item.name}
                    className="flex items-center gap-3"
                  >

                    {/* Dot */}
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        background: item.color,
                      }}
                    />

                    <div className="flex-1">

                      <div className="flex justify-between text-sm mb-1">

                        <span className="text-[#94A3B8]">
                          {item.name}
                        </span>

                        <span
                          className="font-mono text-xs"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.count}
                        </span>

                      </div>


                      {/* Progress */}
                      <div className="h-1.5 rounded-full bg-[#151D35] overflow-hidden">

                        <div
                          className="h-full rounded-full"
                          style={{
                            width: item.width,
                            background: item.color,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* Statistics */}
              <div className="px-5 pb-5 flex gap-3">

                <StatBox
                  number="32"
                  title="Total drives"
                />

                <StatBox
                  number="18"
                  title="Eligible"
                />

                <StatBox
                  number="2"
                  title="Placed"
                />

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {applications.map((application) => (

              <div
                key={application.company}
                className="flex items-center gap-4 p-4 rounded-xl border hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: "#0F1526",
                  borderColor: "rgba(99,102,241,0.12)",
                }}
              >

                {/* Company Logo */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    color: "#818CF8",
                  }}
                >
                  {application.logo}
                </div>


                {/* Company Information */}
                <div className="flex-1 min-w-0">

                  <div className="font-medium text-sm">
                    {application.company}
                  </div>

                  <div className="text-xs text-[#64748B] mt-0.5">
                    {application.role} · {application.salary}
                  </div>

                </div>


                {/* Status */}
                <div className="flex flex-col items-end gap-1">

                  <span
                    className="font-mono text-[10px] px-2 py-1 rounded-full border"
                    style={{
                      color:
                        application.status === "Shortlisted"
                          ? "#F59E0B"
                          : application.status === "Not Applied"
                          ? "#475569"
                          : "#6366F1",

                      borderColor:
                        application.status === "Shortlisted"
                          ? "rgba(245,158,11,0.25)"
                          : "rgba(99,102,241,0.25)",

                      background:
                        application.status === "Shortlisted"
                          ? "rgba(245,158,11,0.06)"
                          : "rgba(99,102,241,0.06)",
                    }}
                  >
                    {application.status}
                  </span>


                  <span
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                    style={{
                      color: application.eligible
                        ? "#10B981"
                        : "#F87171",

                      background: application.eligible
                        ? "rgba(16,185,129,0.1)"
                        : "rgba(248,113,113,0.1)",
                    }}
                  >
                    {application.eligible
                      ? "✓ Eligible"
                      : "✗ Ineligible"}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};


/* Statistics Box */
const StatBox = ({ number, title }) => {
  return (
    <div
      className="flex-1 p-3 rounded-lg text-center"
      style={{
        background: "#151D35",
      }}
    >

      <div className="font-mono text-lg font-semibold text-white">
        {number}
      </div>

      <div className="text-[10px] text-[#475569] mt-0.5">
        {title}
      </div>

    </div>
  );
};

export default Modules;
