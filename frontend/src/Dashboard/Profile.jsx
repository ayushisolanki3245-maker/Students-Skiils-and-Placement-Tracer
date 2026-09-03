
import React, { useState } from "react";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    rollNumber: "",
    course: "BCA",
    semester: "",
    cgpa: "",
    backlogs: "",
    graduationYear: "2027",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Profile Data:", profile);

    alert("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white p-6 md:p-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">

        <p className="font-mono text-xs text-[#6366F1] uppercase tracking-widest">
          Profile
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Your Profile
        </h1>

        <p className="text-[#64748B] mt-2">
          Keep your academic and personal information up to date.
        </p>

      </div>


      {/* Profile Card */}
      <div className="max-w-5xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 md:p-8"
        >

          {/* Personal Information */}

          <div className="mb-10">

            <h2 className="text-lg font-semibold mb-1">
              Personal Information
            </h2>

            <p className="text-sm text-[#64748B] mb-6">
              Basic information about you.
            </p>


            <div className="grid md:grid-cols-2 gap-5">


              {/* Name */}

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />
              </div>


              {/* Email */}

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />
              </div>


              {/* Phone */}

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />
              </div>


              {/* Roll Number */}

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Roll Number
                </label>

                <input
                  type="text"
                  name="rollNumber"
                  value={profile.rollNumber}
                  onChange={handleChange}
                  placeholder="Enter roll number"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />
              </div>

            </div>

          </div>


          {/* Academic Information */}

          <div className="border-t border-[#1E2A45] pt-8">

            <h2 className="text-lg font-semibold mb-1">
              Academic Information
            </h2>

            <p className="text-sm text-[#64748B] mb-6">
              This information will be used for your placement eligibility.
            </p>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


              {/* College */}

              <div className="lg:col-span-2">

                <label className="block text-sm text-[#94A3B8] mb-2">
                  College / University
                </label>

                <input
                  type="text"
                  name="college"
                  value={profile.college}
                  onChange={handleChange}
                  placeholder="Enter your college"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />

              </div>


              {/* Course */}

              <div>

                <label className="block text-sm text-[#94A3B8] mb-2">
                  Course
                </label>

                <select
                  name="course"
                  value={profile.course}
                  onChange={handleChange}
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                >

                  <option value="BCA">BCA</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>

                </select>

              </div>


              {/* Semester */}

              <div>

                <label className="block text-sm text-[#94A3B8] mb-2">
                  Current Semester
                </label>

                <select
                  name="semester"
                  value={profile.semester}
                  onChange={handleChange}
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                >

                  <option value="">
                    Select semester
                  </option>

                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                  <option value="8">Semester 8</option>

                </select>

              </div>


              {/* CGPA */}

              <div>

                <label className="block text-sm text-[#94A3B8] mb-2">
                  CGPA
                </label>

                <input
                  type="number"
                  name="cgpa"
                  value={profile.cgpa}
                  onChange={handleChange}
                  placeholder="e.g. 8.4"
                  min="0"
                  max="10"
                  step="0.01"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />

              </div>


              {/* Backlogs */}

              <div>

                <label className="block text-sm text-[#94A3B8] mb-2">
                  Active Backlogs
                </label>

                <input
                  type="number"
                  name="backlogs"
                  value={profile.backlogs}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                />

              </div>


              {/* Graduation Year */}

              <div>

                <label className="block text-sm text-[#94A3B8] mb-2">
                  Graduation Year
                </label>

                <select
                  name="graduationYear"
                  value={profile.graduationYear}
                  onChange={handleChange}
                  className="w-full bg-[#080C18] border border-[#1E2A45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#6366F1]"
                >

                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>

                </select>

              </div>

            </div>

          </div>


          {/* Save Button */}

          <div className="flex justify-end mt-8 pt-6 border-t border-[#1E2A45]">

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-indigo-400 text-white font-medium hover:opacity-90 transition"
            >
              Save Profile
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Profile;

