import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={144}
        height={144}
        priority
        unoptimized
        className="h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-zinc-800"
      />
      <h1 className="mt-6 text-3xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
