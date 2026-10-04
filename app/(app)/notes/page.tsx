"use client";

import { useState } from "react";
import { topics } from "@/data/topics";
import { formatForExam } from "@/lib/formatter";

export default function NotesPage() {
  const [topic, setTopic] = useState("");
  const [exam, setExam] = useState("UPSC");
  const [mode, setMode] = useState("Prelims");
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [loading, setLoading] = useState(false);

  function generateNotes() {
  const searchTerm = topic.trim().toLowerCase();

  const selectedTopic =
    topics[searchTerm as keyof typeof topics];

  if (!selectedTopic) {
    setGeneratedNotes(
      `Topic '${searchTerm}' not found. Available topics: ${Object.keys(
        topics
      ).join(", ")}`
    );
    return;
  }

  const notes = formatForExam(
    selectedTopic,
    exam
  );

  setGeneratedNotes(notes);
}
  return (
    <main className="min-h-screen bg-[#07111f] text-white p-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          AI Notes Generator
        </h1>

        <p className="mt-3 text-slate-400">
          Generate exam-specific notes.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <label className="mb-2 block text-sm text-slate-400">
            Topic
          </label>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Example: Revolt of 1857"
            className="w-full rounded-xl bg-slate-900 p-4"
          />

          <label className="mt-6 mb-2 block text-sm text-slate-400">
            Exam
          </label>

          <select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="w-full rounded-xl bg-slate-900 p-4"
          >
            <option>UPSC</option>
            <option>BPSC</option>
            <option>UPPCS</option>
            <option>Judiciary</option>
          </select>

          <label className="mt-6 mb-2 block text-sm text-slate-400">
            Mode
          </label>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full rounded-xl bg-slate-900 p-4"
          >
            <option>Prelims</option>
            <option>Mains</option>
            <option>Interview</option>
            <option>Quick Revision</option>
          </select>

          <button
            onClick={generateNotes}
            className="mt-8 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-black"
          >
            {loading
              ? "Generating..."
              : "Generate Notes"}
          </button>

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold text-amber-300">
            Generated Notes
          </h2>

          <div className="mt-6">

            <pre className="whitespace-pre-wrap text-slate-300">
              {generatedNotes ||
                "Generated notes will appear here"}
            </pre>

          </div>

        </div>

      </div>

    </main>
  );
}