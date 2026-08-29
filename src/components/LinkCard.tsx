import type { LinkItem } from "@/data/profile";

// TODO: 클릭 시 MongoDB에 클릭 수 집계 (추후 /api/links/[id]/click 연동)
export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-[var(--foreground)]/20 bg-[var(--card)] px-5 py-4 text-center text-sm font-medium transition-colors hover:border-[var(--foreground)]/40 hover:bg-[var(--card)]/80"
    >
      {link.label}
    </a>
  );
}
