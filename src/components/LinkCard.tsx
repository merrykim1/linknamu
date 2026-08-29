import type { LinkItem } from "@/data/profile";

// TODO: 클릭 시 MongoDB에 클릭 수 집계 (추후 /api/links/[id]/click 연동)
export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-5 py-4 text-center text-sm font-medium text-[var(--foreground)] shadow-[0_8px_24px_-12px_var(--card-shadow)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_var(--card-shadow)]"
    >
      {link.label}
    </a>
  );
}
