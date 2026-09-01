import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Employee Management System",
      description:
        "A web application to manage employees, assign tasks, and track task progress.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/",
    },
    {
      id: 2,
      name: "College Management System",
      description:
        "A college management system for managing students, faculty, grades, and academic information.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    technologies: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      github: formData.github,
    };

    setProjects([...projects, newProject]);

    setFormData({
      name: "",
      description: "",
      technologies: "",
      github: "",
    });

    setShowForm(false);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white p-6 md:p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
              Portfolio
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mt-2">Projects</h1>

            <p className="text-[#64748B] mt-2">
              Showcase the projects you have built during your learning journey.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-5 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-indigo-400 text-white font-medium text-sm hover:opacity-90 transition"
          >
            + Add Project
          </button>
        </div>

        {/* Add Project Form */}
        {showForm && (
          <div className="mb-8 p-6 rounded-2xl border border-[#1E2A45] bg-[#0F1526]">
            <h2 className="text-xl font-semibold mb-5">Add New Project</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Name */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Project Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] text-white outline-none focus:border-indigo-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your project"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] text-white outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              {/* Technologies */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Technologies
                </label>

                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  placeholder="React, JavaScript, Tailwind CSS"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] text-white outline-none focus:border-indigo-500"
                />

                <p className="text-xs text-[#475569] mt-1">
                  Separate technologies with commas.
                </p>
              </div>

              {/* GitHub */}
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  GitHub Repository
                </label>

                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username/project"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] text-white outline-none focus:border-indigo-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-400 transition"
                >
                  Save Project
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#151D35] text-[#94A3B8] text-sm hover:text-white transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Project Count */}
        <div className="mb-5">
          <span className="font-mono text-xs text-[#64748B]">
            {projects.length} PROJECT{projects.length !== 1 ? "S" : ""}
          </span>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-[#1E2A45] bg-[#0F1526]">
            <div className="text-4xl mb-4">📁</div>

            <h2 className="text-xl font-semibold">No projects yet</h2>

            <p className="text-[#64748B] mt-2">
              Add your first project to build your portfolio.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl border border-[#1E2A45] bg-[#0F1526] hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                      ◆
                    </div>

                    <h2 className="text-xl font-semibold">{project.name}</h2>
                  </div>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-xs text-[#64748B] hover:text-red-400 transition"
                  >
                    Delete
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mt-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full text-xs bg-[#151D35] border border-[#1E2A45] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <div className="mt-6 pt-5 border-t border-[#1E2A45]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151D35] text-sm text-[#94A3B8] hover:text-white hover:bg-[#1E2A45] transition"
                  >
                    <span>↗</span>
                    GitHub Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
