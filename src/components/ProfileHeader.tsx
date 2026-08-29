import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        className="rounded-full p-[3px] shadow-[0_16px_32px_-12px_var(--avatar-shadow)]"
        style={{
          background: `linear-gradient(160deg, var(--avatar-ring-start), var(--avatar-ring-end))`,
        }}
      >
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          width={144}
          height={144}
          className="h-32 w-32 rounded-full object-cover shadow-inner sm:h-36 sm:w-36"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
