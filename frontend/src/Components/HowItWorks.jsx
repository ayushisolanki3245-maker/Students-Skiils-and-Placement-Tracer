
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build your academic profile",
      description:
        "Enter your CGPA, semester, roll number, and active backlogs. The platform auto-detects your placement eligibility threshold.",
    },
    {
      number: "02",
      title: "Log skills, projects & DSA progress",
      description:
        "Tag technologies with proficiency levels, paste GitHub and live demo links, and record LeetCode / CodeChef handles to import problem counts.",
    },
    {
      number: "03",
      title: "Track every company drive",
      description:
        "Add drives as they open, mark your application status, and watch the eligibility flag update the moment CGPA criteria change.",
    },
    {
      number: "04",
      title: "Watch your score climb",
      description:
        "The readiness engine recalculates live as you update data. See exactly which dimension — academics, DSA, or skills — needs attention.",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-[#080C18] text-white">

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="mb-14 text-center">

          <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest">
            Process
          </span>

          <h2 className="text-4xl font-bold mt-2">
            From signup to score in minutes
          </h2>

        </div>


        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className="relative"
            >

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute
                    top-8
                    left-full
                    w-full
                    h-px
                    z-0
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(99, 102, 241, 0.4), transparent)",
                  }}
                />
              )}


              {/* Content */}
              <div className="relative z-10">

                {/* Number */}
                <div
                  className="font-mono text-3xl font-semibold mb-4"
                  style={{
                    color: "rgba(99, 102, 241, 0.3)",
                  }}
                >
                  {step.number}
                </div>


                {/* Title */}
                <h3 className="font-semibold text-base mb-2 leading-snug">
                  {step.title}
                </h3>


                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;

