import Sidebar from "@/components/sidebar";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#07111f] text-white">

      <Sidebar />

      <section className="flex-1 p-8">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome to Saarthi AI.
        </p>

      </section>

    </main>
  );
}