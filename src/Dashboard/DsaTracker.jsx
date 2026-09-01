
import React, { useState } from "react";

const DsaTracker = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: "Arrays",
      easy: 20,
      medium: 12,
      hard: 4,
    },
    {
      id: 2,
      name: "Strings",
      easy: 15,
      medium: 8,
      hard: 2,
    },
    {
      id: 3,
      name: "Linked List",
      easy: 10,
      medium: 7,
      hard: 2,
    },
    {
      id: 4,
      name: "Trees",
      easy: 8,
      medium: 6,
      hard: 3,
    },
    {
      id: 5,
      name: "Graphs",
      easy: 5,
      medium: 4,
      hard: 2,
    },
    {
      id: 6,
      name: "Dynamic Programming",
      easy: 4,
      medium: 5,
      hard: 3,
    },
  ]);

  const [topic, setTopic] = useState("Arrays");
  const [difficulty, setDifficulty] = useState("easy");
  const [count, setCount] = useState(1);

  const addProblems = (e) => {
    e.preventDefault();

    const amount = Number(count);

    if (!amount || amount < 1) return;

    setTopics((prevTopics) =>
      prevTopics.map((item) =>
        item.name === topic
          ? {
              ...item,
              [difficulty]: item[difficulty] + amount,
            }
          : item
      )
    );

    setCount(1);
  };

  const totalEasy = topics.reduce((sum, topic) => sum + topic.easy, 0);
  const totalMedium = topics.reduce((sum, topic) => sum + topic.medium, 0);
  const totalHard = topics.reduce((sum, topic) => sum + topic.hard, 0);

  const totalSolved = totalEasy + totalMedium + totalHard;

  return (
    <div className="min-h-screen bg-[#080C18] text-white px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
            DSA Tracker
          </span>

          <h1 className="text-4xl font-bold mt-2">
            Track your DSA progress
          </h1>

          <p className="text-[#64748B] mt-2 max-w-xl">
            Keep track of solved problems across topics and difficulty levels.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <StatCard
            title="Total Solved"
            value={totalSolved}
            color="#6366F1"
          />

          <StatCard
            title="Easy"
            value={totalEasy}
            color="#10B981"
          />

          <StatCard
            title="Medium"
            value={totalMedium}
            color="#F59E0B"
          />

          <StatCard
            title="Hard"
            value={totalHard}
            color="#F87171"
          />

        </div>

        {/* Add Problems */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6 mb-8">

          <h2 className="text-lg font-semibold mb-5">
            Add solved problems
          </h2>

          <form onSubmit={addProblems}>

            <div className="grid md:grid-cols-3 gap-4">

              {/* Topic */}
              <div>

                <label className="text-xs text-[#64748B]">
                  Topic
                </label>

                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm"
                >
                  {topics.map((item) => (
                    <option key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>

              </div>

              {/* Difficulty */}
              <div>

                <label className="text-xs text-[#64748B]">
                  Difficulty
                </label>

                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>

              </div>

              {/* Count */}
              <div>

                <label className="text-xs text-[#64748B]">
                  Problems Solved
                </label>

                <input
                  type="number"
                  min="1"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-[#151D35] border border-[#1E2A45] outline-none text-sm"
                />

              </div>

            </div>

            <button
              type="submit"
              className="mt-5 px-5 py-3 rounded-lg bg-linear-to-r from-[#F59E0B] to-[#FBBF24] text-sm font-semibold text-black hover:opacity-90 transition"
            >
              + Add Problems
            </button>

          </form>

        </div>

        {/* Topic Progress */}
        <div className="bg-[#0F1526] border border-[#1E2A45] rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-lg font-semibold">
                Topic Progress
              </h2>

              <p className="text-xs text-[#64748B] mt-1">
                Problems solved by topic
              </p>
            </div>

            <span className="font-mono text-xs text-[#F59E0B]">
              {topics.length} topics
            </span>

          </div>

          <div className="space-y-5">

            {topics.map((item) => {

              const total =
                item.easy + item.medium + item.hard;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-[#151D35] border border-[#1E2A45]"
                >

                  {/* Topic Header */}
                  <div className="flex items-center justify-between mb-4">

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <span className="font-mono text-sm text-[#94A3B8]">
                      {total} solved
                    </span>

                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 rounded-full bg-[#1E2A45] overflow-hidden flex">

                    <div
                      className="h-full bg-[#10B981]"
                      style={{
                        width: `${total ? (item.easy / total) * 100 : 0}%`,
                      }}
                    />

                    <div
                      className="h-full bg-[#F59E0B]"
                      style={{
                        width: `${total ? (item.medium / total) * 100 : 0}%`,
                      }}
                    />

                    <div
                      className="h-full bg-[#F87171]"
                      style={{
                        width: `${total ? (item.hard / total) * 100 : 0}%`,
                      }}
                    />

                  </div>

                  {/* Difficulty Counts */}
                  <div className="grid grid-cols-3 gap-3 mt-4">

                    <Difficulty
                      title="Easy"
                      value={item.easy}
                      color="#10B981"
                    />

                    <Difficulty
                      title="Medium"
                      value={item.medium}
                      color="#F59E0B"
                    />

                    <Difficulty
                      title="Hard"
                      value={item.hard}
                      color="#F87171"
                    />

                  </div>

                </div>
              );
            })}

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

      <div
        className="font-mono text-3xl font-semibold"
        style={{ color }}
      >
        {value}
      </div>

      <div className="text-xs text-[#64748B] mt-1">
        {title}
      </div>

    </div>
  );
};


/* DIFFICULTY */

const Difficulty = ({ title, value, color }) => {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-2">

        <span
          className="w-2 h-2 rounded-full"
          style={{ background: color }}
        />

        <span className="text-xs text-[#64748B]">
          {title}
        </span>

      </div>

      <span
        className="font-mono text-sm"
        style={{ color }}
      >
        {value}
      </span>

    </div>
  );
};

export default DsaTracker;

