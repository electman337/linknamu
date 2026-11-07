import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const scale = profile.imageScale ?? 1;
  const offsetX = profile.imageOffsetX ?? 0;

  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 테두리 + 아래로 떨어지는 부드러운 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-14px_var(--shadow-tint),0_2px_6px_var(--shadow-tint)] ring-1 ring-card-border dark:bg-white/10">
        {/* 확대한 사진이 원 밖으로 삐져나오지 않게 여기서 잘라 줌 */}
        <div className="h-32 w-32 overflow-hidden rounded-full bg-gradient-to-b from-orange-100 to-orange-200/80 shadow-[inset_0_2px_6px_rgb(0_0_0/0.08)] sm:h-36 sm:w-36">
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            width={144}
            height={144}
            priority
            unoptimized
            className="h-full w-full object-cover"
            style={{
              objectPosition: profile.imagePosition ?? "center",
              transform: `scale(${scale}) translateX(${offsetX}%)`,
            }}
          />
        </div>
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{profile.bio}</p>
    </header>
  );
}
