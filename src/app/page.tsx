import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-14 sm:px-10">
      <div className="relative flex w-full max-w-sm flex-col items-center gap-10">
        <div className="absolute -top-4 right-0">
          <DarkModeToggle />
        </div>

        <ProfileHeader profile={profile} />

        <LinkList links={links} />

        <span aria-hidden className="text-lg tracking-widest opacity-40">
          ···
        </span>
      </div>
    </main>
  );
}
