export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[100%] transition-opacity duration-1000"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/80 via-[#07111f]/90 to-[#07111f]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Navbar */}

        <nav className="flex items-center justify-between py-8">

          <h1 className="text-3xl font-bold text-amber-400">
            Saarthi AI
          </h1>

          <div className="flex items-center gap-4">

            <button className="rounded-xl border border-white/20 px-5 py-2 hover:bg-white/5">
              Login
            </button>

            <button className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2 font-semibold text-black">
              Start Free
            </button>

          </div>

        </nav>

        {/* Hero */}

        <section className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
              🇮🇳 UPSC • BPSC • State PCS
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              Your AI Mentor
              <br />

              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                For Civil Services
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

              Generate exam-specific notes.

              Evaluate answer copies.

              Take AI-powered mock tests.

              Analyse weaknesses.

              Get a preparation strategy personalised for UPSC, BPSC and State PCS exams.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-black">
                Start Preparation →
              </button>

              <button className="rounded-2xl border border-white/20 px-8 py-4">
                Watch Demo
              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <h3 className="text-2xl font-bold text-amber-300">
                  50K+
                </h3>

                <p className="text-sm text-slate-400">
                  Questions
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <h3 className="text-2xl font-bold text-amber-300">
                  500+
                </h3>

                <p className="text-sm text-slate-400">
                  Topics
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <h3 className="text-2xl font-bold text-amber-300">
                  UPSC
                </h3>

                <p className="text-sm text-slate-400">
                  Ready
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <h3 className="text-2xl font-bold text-amber-300">
                  BPSC
                </h3>

                <p className="text-sm text-slate-400">
                  Specialised
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
  <h3 className="text-2xl font-bold text-amber-300">
    AI Notes Generator
  </h3>

  <p className="mt-4 text-slate-300">
    Generate exam-specific notes, MCQs,
    mains answers and revision material.
  </p>
</div>

          </div>

        </section>

      </div>

    </main>
  );
}