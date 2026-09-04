import React, { useState } from "react";

const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "React.js Certification",
      issuer: "Meta",
      date: "2026",
      credential: "https://example.com",
    },
    {
      id: 2,
      name: "Java Programming",
      issuer: "Oracle",
      date: "2025",
      credential: "https://example.com",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    issuer: "",
    date: "",
    credential: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCertification = (e) => {
    e.preventDefault();

    if (!form.name || !form.issuer || !form.date) {
      return;
    }

    const newCertification = {
      id: Date.now(),
      ...form,
    };

    setCertifications([...certifications, newCertification]);

    setForm({
      name: "",
      issuer: "",
      date: "",
      credential: "",
    });
  };

  const deleteCertification = (id) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest">
            Certifications
          </span>

          <h1 className="text-4xl font-bold mt-2">Certification Hub</h1>

          <p className="text-[#64748B] mt-2 max-w-xl">
            Store and manage your professional certifications in one place.
          </p>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            title="Total Certifications"
            value={certifications.length}
            color="#A78BFA"
          />

          <StatCard
            title="This Year"
            value={certifications.filter((cert) => cert.date === "2026").length}
            color="#10B981"
          />

          <StatCard
            title="Profile Status"
            value={certifications.length >= 3 ? "Strong" : "Add More"}
            color="#F59E0B"
          />
        </div>

        {/* ADD CERTIFICATION */}

        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-5">Add Certification</h2>

          <form onSubmit={addCertification}>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Certification Name */}

              <div>
                <label className="text-xs text-[#64748B]">
                  Certification Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. React.js Certification"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm focus:border-[#A78BFA]"
                />
              </div>

              {/* Issuer */}

              <div>
                <label className="text-xs text-[#64748B]">
                  Issuing Organization
                </label>

                <input
                  type="text"
                  name="issuer"
                  placeholder="e.g. Meta"
                  value={form.issuer}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm focus:border-[#A78BFA]"
                />
              </div>

              {/* Date */}

              <div>
                <label className="text-xs text-[#64748B]">Year</label>

                <input
                  type="number"
                  name="date"
                  placeholder="2026"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm focus:border-[#A78BFA]"
                />
              </div>

              {/* Credential */}

              <div>
                <label className="text-xs text-[#64748B]">Credential URL</label>

                <input
                  type="url"
                  name="credential"
                  placeholder="https://..."
                  value={form.credential}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm focus:border-[#A78BFA]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 px-5 py-3 rounded-lg bg-linear-to-r from-[#8B5CF6] to-[#A78BFA] text-sm font-semibold text-white hover:opacity-90 transition"
            >
              + Add Certification
            </button>
          </form>
        </div>

        {/* CERTIFICATIONS */}

        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">My Certifications</h2>

              <p className="text-xs text-[#64748B] mt-1">
                Your professional credentials
              </p>
            </div>

            <span className="font-mono text-xs text-[#A78BFA]">
              {certifications.length} certificates
            </span>
          </div>

          {/* EMPTY STATE */}

          {certifications.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">◇</div>

              <p className="text-[#64748B]">No certifications added yet.</p>
            </div>
          )}

          {/* CERTIFICATION CARDS */}

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[#151D35] border border-[#1E2A45] hover:border-[#A78BFA]/40 transition"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}

                  <div className="w-11 h-11 rounded-lg bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA] text-lg shrink-0">
                    ✓
                  </div>

                  {/* Details */}

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{cert.name}</h3>

                    <p className="text-xs text-[#64748B] mt-1">{cert.issuer}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#1E2A45] text-[#94A3B8]">
                        {cert.date}
                      </span>

                      {cert.credential && (
                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-[#A78BFA] hover:text-white"
                        >
                          View Credential →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete */}

                <div className="mt-4 pt-3 border-t border-[#1E2A45] flex justify-end">
                  <button
                    onClick={() => deleteCertification(cert.id)}
                    className="text-xs text-[#64748B] hover:text-[#F87171] transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* STAT CARD */

const StatCard = ({ title, value, color }) => {
  return (
    <div
      className="rounded-xl border p-5 bg-[#0F1526]"
      style={{
        borderColor: `${color}30`,
      }}
    >
      <div className="font-mono text-3xl font-semibold" style={{ color }}>
        {value}
      </div>

      <div className="text-xs text-[#64748B] mt-1">{title}</div>
    </div>
  );
};

export default Certifications;
