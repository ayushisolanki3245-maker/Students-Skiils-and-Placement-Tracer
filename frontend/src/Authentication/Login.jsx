
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen bg-[#080C18] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">



        {/* Login Card */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-8">

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold mb-2">
              Welcome back
            </h1>

            <p className="text-[#64748B] text-sm">
              Sign in to continue tracking your placement journey.
            </p>
          </div>


          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">

              <label className="text-sm text-[#94A3B8]">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-[#080C18] border border-[#1E2A45] outline-none focus:border-[#6366F1] text-white placeholder:text-[#475569]"
              />

            </div>


            {/* Password */}
            <div className="mb-6">

              <label className="text-sm text-[#94A3B8]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-[#080C18] border border-[#1E2A45] outline-none focus:border-[#6366F1] text-white placeholder:text-[#475569]"
              />

            </div>


            {/* Sign In */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #6366F1, #818CF8)",
                boxShadow:
                  "0 4px 20px rgba(99,102,241,0.25)",
              }}
            >
              Sign In
            </button>

          </form>


          {/* Signup */}
          <p className="text-center text-sm text-[#64748B] mt-6">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-[#818CF8] hover:text-white"
            >
              Create account
            </Link>

          </p>

        </div>


      

      </div>
    </div>
  );
};

export default Login;

