
import React, { useEffect, useState } from "react";
import { apiRequest } from "../api";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  useEffect(() => { apiRequest("/api/skills").then(setSkills).catch((e) => setError(e.message)); }, []);

  const [skillName, setSkillName] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [level, setLevel] = useState("Beginner");

  const addSkill = async (e) => {
    e.preventDefault();
    if (!skillName.trim()) return;
    try {
      setError("");
      if (editingId) {
        const updated = await apiRequest(`/api/skills/${editingId}`, { method: "PUT", body: { name: skillName.trim(), category, level } });
        setSkills((items) => items.map((item) => item._id === editingId ? updated : item));
      } else {
        const created = await apiRequest("/api/skills", { method: "POST", body: { name: skillName.trim(), category, level } });
        setSkills((items) => [...items, created]);
      }
      setEditingId(null);
    setSkillName("");
    setCategory("Frontend");
    setLevel("Beginner");
    } catch (e) { setError(e.message); }
  };

  const deleteSkill = async (id) => {
    try { await apiRequest(`/api/skills/${id}`, { method: "DELETE" }); setSkills((items) => items.filter((skill) => skill._id !== id)); }
    catch (e) { setError(e.message); }
  };

  const getLevelWidth = (level) => {
    if (level === "Beginner") return "33%";
    if (level === "Intermediate") return "66%";
    return "100%";
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">
            Skills
          </span>

          <h1 className="text-4xl font-bold mt-2">
            Skill Tracker
          </h1>

          <p className="text-[#64748B] mt-2">
            Track your technical and professional skills with proficiency
            levels.
          </p>
        </div>

        {error && <p role="alert" className="mb-5 text-sm text-red-300">{error}</p>}

        {/* Add Skill + Summary */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* Add Skill */}
          <div className="lg:col-span-2 bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">

            <h2 className="text-lg font-semibold mb-5">
              Add a new skill
            </h2>

            <form onSubmit={addSkill}>

              <div className="grid md:grid-cols-3 gap-4">

                {/* Skill Name */}
                <div>
                  <label className="text-xs text-[#64748B]">
                    Skill Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. React.js"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm focus:border-[#6366F1]"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-xs text-[#64748B]">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm text-white"
                  >
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Programming</option>
                    <option>Database</option>
                    <option>Core CS</option>
                    <option>Tools</option>
                    <option>Soft Skills</option>
                  </select>
                </div>

                {/* Level */}
                <div>
                  <label className="text-xs text-[#64748B]">
                    Proficiency
                  </label>

                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm text-white"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>

              </div>

              <button
                type="submit"
                className="mt-5 px-5 py-3 rounded-lg bg-linear-to-r from-[#6366F1] to-[#818CF8] text-sm font-semibold hover:opacity-90 transition"
              >
                {editingId ? "Save Skill" : "+ Add Skill"}
              </button>

            </form>
          </div>

          {/* Summary */}
          <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">

            <span className="text-xs text-[#64748B] uppercase tracking-widest">
              Profile Summary
            </span>

            <div className="mt-5">
              <div className="text-4xl font-bold text-white">
                {skills.length}
              </div>

              <p className="text-sm text-[#64748B] mt-1">
                Skills added
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-[#1E2A45]">

              <div className="flex justify-between text-sm">
                <span className="text-[#94A3B8]">
                  Advanced
                </span>

                <span className="text-[#10B981]">
                  {skills.filter((s) => s.level === "Advanced").length}
                </span>
              </div>

              <div className="flex justify-between text-sm mt-3">
                <span className="text-[#94A3B8]">
                  Intermediate
                </span>

                <span className="text-[#F59E0B]">
                  {skills.filter((s) => s.level === "Intermediate").length}
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Skills List */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-lg font-semibold">
                My Skills
              </h2>

              <p className="text-xs text-[#64748B] mt-1">
                Your current technical skill set
              </p>
            </div>

            <span className="text-xs text-[#6366F1] font-mono">
              {skills.length} skills
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            {skills.map((skill) => (

              <div
                key={skill._id}
                className="p-5 rounded-xl bg-[#151D35] border border-[#1E2A45] hover:border-[#6366F1]/40 transition"
              >

                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="font-semibold">
                      {skill.name}
                    </h3>

                    <span className="text-xs text-[#64748B]">
                      {skill.category}
                    </span>
                  </div>

                  <div className="flex gap-3"><button onClick={() => { setEditingId(skill._id); setSkillName(skill.name); setCategory(skill.category); setLevel(skill.level); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-[#818CF8]">Edit</button><button
                    onClick={() => deleteSkill(skill._id)}
                    className="text-xs text-[#64748B] hover:text-[#F87171]"
                  >
                    Delete
                  </button></div>

                </div>

                {/* Progress */}
                <div className="mt-5">

                  <div className="flex justify-between mb-2">

                    <span className="text-xs text-[#64748B]">
                      Proficiency
                    </span>

                    <span className="text-xs text-[#818CF8]">
                      {skill.level}
                    </span>

                  </div>

                  <div className="h-1.5 rounded-full bg-[#1E2A45] overflow-hidden">

                    <div
                      className="h-full rounded-full bg-linear-to-r from-[#6366F1] to-[#10B981]"
                      style={{
                        width: getLevelWidth(skill.level),
                      }}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Skills;
