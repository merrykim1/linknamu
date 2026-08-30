import type { LinkItem } from "@/data/profile";

export default function LinkCard({
  link,
  count,
  onClick,
}: {
  link: LinkItem;
  count: number;
  onClick?: () => void;
}) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-5 py-4 text-sm font-medium text-[var(--foreground)] shadow-[0_8px_24px_-12px_var(--card-shadow)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_var(--card-shadow)]"
    >
      <span className="flex-1 text-center">{link.label}</span>
      <span className="shrink-0 text-xs font-normal opacity-50">
        {count}회
      </span>
    </a>
  );
}
