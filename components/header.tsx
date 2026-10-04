export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Saarthi AI
        </h1>

        <p className="text-slate-400">
          Your Civil Services Copilot
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl bg-white/5 px-4 py-2">
          UPSC
        </button>

        <button className="rounded-xl bg-amber-500 px-4 py-2 font-semibold text-black">
          Profile
        </button>

      </div>

    </header>
  );
}