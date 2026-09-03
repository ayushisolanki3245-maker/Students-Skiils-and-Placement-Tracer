import React, { useState } from "react";

const PlacementTracker = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer Intern",
      package: "₹80,000/month",
      status: "Shortlisted",
      eligible: true,
    },
    {
      id: 2,
      company: "Infosys",
      role: "Systems Engineer",
      package: "3.6 LPA",
      status: "Applied",
      eligible: true,
    },
    {
      id: 3,
      company: "Wipro",
      role: "Project Engineer",
      package: "3.5 LPA",
      status: "Applied",
      eligible: true,
    },
    {
      id: 4,
      company: "Goldman Sachs",
      role: "Technology Analyst",
      package: "18 LPA",
      status: "Not Applied",
      eligible: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    package: "",
    status: "Not Applied",
    eligible: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCompany = {
      id: Date.now(),
      company: formData.company,
      role: formData.role,
      package: formData.package,
      status: formData.status,
      eligible: formData.eligible === "Yes",
    };

    setCompanies([...companies, newCompany]);

    setFormData({
      company: "",
      role: "",
      package: "",
      status: "Not Applied",
      eligible: "Yes",
    });

    setShowForm(false);
  };

  const updateStatus = (id, newStatus) => {
    setCompanies(
      companies.map((company) =>
        company.id === id ? { ...company, status: newStatus } : company,
      ),
    );
  };

  const deleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Applied":
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";

      case "Shortlisted":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";

      case "Placed":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";

      case "Rejected":
        return "text-red-400 bg-red-500/10 border-red-500/20";

      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  const getInitial = (company) => {
    return company.charAt(0).toUpperCase();
  };

  const totalDrives = companies.length;
  const applied = companies.filter(
    (company) => company.status === "Applied",
  ).length;

  const shortlisted = companies.filter(
    (company) => company.status === "Shortlisted",
  ).length;

  const placed = companies.filter(
    (company) => company.status === "Placed",
  ).length;

  const rejected = companies.filter(
    (company) => company.status === "Rejected",
  ).length;

  const notApplied = companies.filter(
    (company) => company.status === "Not Applied",
  ).length;

  return (
    <div className="min-h-screen bg-[#080C18] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-widest">
              Placement Tracker
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Your entire pipeline
            </h1>

            <p className="text-[#64748B] mt-2">
              Track every company drive and monitor your placement progress.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-5 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-indigo-400 text-white text-sm font-medium hover:opacity-90 transition"
          >
            + Add Company
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <StatCard number={totalDrives} title="Total Drives" />

          <StatCard number={notApplied} title="Not Applied" />

          <StatCard number={applied} title="Applied" />

          <StatCard number={shortlisted} title="Shortlisted" />

          <StatCard number={placed} title="Placed" />

          <StatCard number={rejected} title="Rejected" />
        </div>

        {/* ADD COMPANY FORM */}
        {showForm && (
          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-5">Add Company Drive</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              {/* COMPANY */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Google"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none focus:border-indigo-500"
                />
              </div>

              {/* ROLE */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Job Role
                </label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Software Engineer"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none focus:border-indigo-500"
                />
              </div>

              {/* PACKAGE */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Package
                </label>

                <input
                  type="text"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  placeholder="6 LPA"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none focus:border-indigo-500"
                />
              </div>

              {/* STATUS */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none focus:border-indigo-500"
                >
                  <option>Not Applied</option>
                  <option>Applied</option>
                  <option>Shortlisted</option>
                  <option>Placed</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* ELIGIBILITY */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Eligibility
                </label>

                <select
                  name="eligible"
                  value={formData.eligible}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none focus:border-indigo-500"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* BUTTONS */}
              <div className="flex items-end gap-3">
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-400 transition"
                >
                  Add Drive
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-3 rounded-lg bg-[#151D35] text-[#94A3B8] hover:text-white transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* COMPANY LIST */}
        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-[#0F1526] border border-[#1E2A45] rounded-xl p-5 hover:border-indigo-500/30 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* COMPANY ICON */}
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold shrink-0">
                  {getInitial(company.company)}
                </div>

                {/* COMPANY DETAILS */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold">{company.company}</h2>

                  <p className="text-sm text-[#64748B] mt-1">
                    {company.role}
                    {company.package && ` · ${company.package}`}
                  </p>
                </div>

                {/* ELIGIBILITY */}
                <div>
                  {company.eligible ? (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ✓ Eligible
                    </span>
                  ) : (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                      ✗ Ineligible
                    </span>
                  )}
                </div>

                {/* STATUS */}
                <select
                  value={company.status}
                  onChange={(e) => updateStatus(company.id, e.target.value)}
                  className={`text-xs px-3 py-2 rounded-lg border outline-none bg-[#151D35] ${getStatusStyle(
                    company.status,
                  )}`}
                >
                  <option>Not Applied</option>
                  <option>Applied</option>
                  <option>Shortlisted</option>
                  <option>Placed</option>
                  <option>Rejected</option>
                </select>

                {/* DELETE */}
                <button
                  onClick={() => deleteCompany(company.id)}
                  className="text-xs text-[#64748B] hover:text-red-400 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {companies.length === 0 && (
          <div className="text-center py-20 bg-[#0F1526] border border-[#1E2A45] rounded-2xl">
            <div className="text-4xl mb-4">📋</div>

            <h2 className="text-xl font-semibold">No placement drives yet</h2>

            <p className="text-[#64748B] mt-2">
              Add your first company drive to start tracking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* STAT CARD */

const StatCard = ({ number, title }) => {
  return (
    <div className="bg-[#0F1526] border border-[#1E2A45] rounded-xl p-4">
      <div className="font-mono text-xl font-semibold text-white">{number}</div>

      <div className="text-[11px] text-[#64748B] mt-1">{title}</div>
    </div>
  );
};

export default PlacementTracker;
