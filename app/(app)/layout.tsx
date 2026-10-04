import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-[#07111f] text-white">

      <Sidebar />

      <div className="flex-1 overflow-y-auto">

        <div className="border-b border-white/10 bg-[#081526] px-8 py-5">
          <Header />
        </div>

        <div className="p-8">
          {children}
        </div>

      </div>

    </main>
  );
}