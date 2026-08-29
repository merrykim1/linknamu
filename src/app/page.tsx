import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-sm rounded-[2.5rem] border-2 border-[var(--foreground)]/15 bg-[var(--background)] px-6 py-10 sm:shadow-xl">
        <div className="absolute right-5 top-5">
          <DarkModeToggle />
        </div>

        <div className="flex flex-col items-center gap-8 pt-6">
          <ProfileHeader profile={profile} />

          <div className="flex w-full flex-col gap-5">
            {links.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </div>

          <span aria-hidden className="text-lg tracking-widest opacity-40">
            ···
          </span>
        </div>
      </div>
    </main>
  );
}
