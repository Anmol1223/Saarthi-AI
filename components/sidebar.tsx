import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/notes", label: "AI Notes" },
  { href: "/current-affairs", label: "Current Affairs" },
  { href: "/tests", label: "Tests" },
  { href: "/evaluation", label: "Evaluation" },
  { href: "/profile", label: "Profile" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 border-r border-white/10 bg-[#081526] p-6">
      <h1 className="mb-10 text-3xl font-bold text-amber-400">Saarthi AI</h1>

      <p className="mb-8 text-sm text-slate-400">
        AI Copilot for Civil Services
      </p>

      <nav className="space-y-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-amber-300"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 