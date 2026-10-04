export default function CurrentAffairsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] p-8 text-white">

      <h1 className="text-4xl font-bold">
        Current Affairs Hub
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white/5 p-6">
          Daily
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          Weekly
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          Monthly Magazine
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          Yearly Compilation
        </div>

      </div>

    </main>
  );
}