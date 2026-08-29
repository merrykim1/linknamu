import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} 프로필 사진`}
        width={144}
        height={144}
        className="h-36 w-36 rounded-full border border-[var(--card-border)] object-cover"
      />
      <div>
        <h1 className="text-lg font-semibold">{profile.name}</h1>
        <p className="mt-1 text-sm text-[var(--foreground)] opacity-70">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
