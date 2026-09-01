import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#080C18] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

      


        {/* Card */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-8">

          <h1 className="text-2xl font-bold mb-2">
            Create your account
          </h1>

          <p className="text-[#64748B] text-sm mb-6">
            Start tracking your placement preparation.
          </p>


          {/* Name */}
          <div className="mb-4">
            <label className="text-sm text-[#94A3B8]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#080C18] border border-[#1E2A45] outline-none focus:border-[#6366F1] text-white"
            />
          </div>


          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-[#94A3B8]">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#080C18] border border-[#1E2A45] outline-none focus:border-[#6366F1]"
            />
          </div>


          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-[#94A3B8]">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-[#080C18] border border-[#1E2A45] outline-none focus:border-[#6366F1] text-white"
            />
          </div>


          {/* Button */}
          <button
            className="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #6366F1, #818CF8)",
            }}
          >
            Create Account
          </button>


          {/* Login */}
          <p className="text-center text-sm text-[#64748B] mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#818CF8] hover:text-white"
            >
              Sign in
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;