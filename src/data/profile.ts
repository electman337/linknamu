// 프로필과 링크 목록. 내용을 바꾸고 싶으면 이 파일만 고치면 돼요.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  // 원형으로 자를 때 기준점 (CSS object-position). 세로 % 를 줄이면 사진 위쪽이 보여요.
  imagePosition?: string;
  // 확대 배율 (1 = 원본, 1.1 = 10% 확대)
  imageScale?: number;
  // 좌우 이동 (%, 음수면 왼쪽). 확대한 만큼만 움직일 수 있어요: 1.1배면 대략 -4 ~ 4
  imageOffsetX?: number;
};

export type LinkItem = {
  id: string; // 클릭 수 집계에 쓰이는 고유 키 (바꾸면 기존 집계와 끊겨요)
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "쪼리",
  bio: "거대 말티즈 | 간식과 산책에 관심이 많아요",
  imageUrl: "/zzori-nobg.png",
  imagePosition: "45% 20%",
  imageScale: 1.1,
  imageOffsetX: -3,
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
