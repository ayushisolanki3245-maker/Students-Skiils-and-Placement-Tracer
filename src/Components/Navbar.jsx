import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#080C18] border-b border-[#1E2A45]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-linear-to-br from-indigo-500 to-emerald-500">
            <span className="text-white text-xs font-bold">P</span>
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            PlaceTrack
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/features"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
          >
            Features
          </Link>

          <Link
            to="/how-it-works"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
          >
            How It Works
          </Link>

          <Link
            to="/score-engine"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
          >
            Score Engine
          </Link>

          <Link
            to="/modules"
            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
          >
            Modules
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:block text-sm text-[#94A3B8] hover:text-white"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-linear-to-br from-indigo-500 to-indigo-400 text-white hover:opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
