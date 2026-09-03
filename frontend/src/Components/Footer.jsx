
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="border-t py-12 bg-[#080C18] text-white"
      style={{
        borderColor: "rgba(99, 102, 241, 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">

          {/* LOGO + DESCRIPTION */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">

              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #6366F1, #10B981)",
                }}
              >
                <span className="text-white text-xs font-bold">
                  P
                </span>
              </div>

              <span className="text-lg font-semibold">
                PlaceTrack
              </span>

            </Link>

            <p className="text-sm text-[#475569] max-w-xs">
              Placement intelligence for engineering students.
              Track everything. Miss nothing.
            </p>
          </div>


          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

            {/* PLATFORM */}
            <div>
              <div className="font-mono text-[10px] text-[#475569] uppercase tracking-widest mb-3">
                Platform
              </div>

              <Link
                to="/score-engine"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Score Engine
              </Link>

              <Link
                to="/dsa-tracker"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                DSA Tracker
              </Link>

              <Link
                to="/skill-tracker"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Skill Tracker
              </Link>

              <Link
                to="/modules"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Modules
              </Link>
            </div>


            {/* RESOURCES */}
            <div>
              <div className="font-mono text-[10px] text-[#475569] uppercase tracking-widest mb-3">
                Resources
              </div>

              <Link
                to="/documentation"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Documentation
              </Link>

              <Link
                to="/api"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                API Reference
              </Link>

              <Link
                to="/changelog"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Changelog
              </Link>

              <Link
                to="/status"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Status
              </Link>
            </div>


            {/* COMPANY */}
            <div>
              <div className="font-mono text-[10px] text-[#475569] uppercase tracking-widest mb-3">
                Company
              </div>

              <Link
                to="/about"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Blog
              </Link>

              <Link
                to="/careers"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className="block text-[#64748B] hover:text-white transition-colors mb-2"
              >
                Contact
              </Link>
            </div>

          </div>
        </div>


        {/* BOTTOM SECTION */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
          style={{
            borderColor: "rgba(99, 102, 241, 0.08)",
          }}
        >

          <span className="font-mono text-xs text-[#334155]">
            © 2026 PlaceTrack. Built for students.
          </span>

          <div className="flex gap-4">

            <Link
              to="/privacy"
              className="font-mono text-xs text-[#334155] hover:text-[#64748B] transition-colors"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="font-mono text-xs text-[#334155] hover:text-[#64748B] transition-colors"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="font-mono text-xs text-[#334155] hover:text-[#64748B] transition-colors"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

