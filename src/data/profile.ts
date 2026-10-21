// 프로필과 링크 목록. 내용을 바꾸고 싶으면 이 파일만 고치면 돼요.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string; // 클릭 수 집계에 쓰이는 고유 키 (바꾸면 기존 집계와 끊겨요)
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "신동호",
  bio: "예술을 지향하는 엔지니어",
  imageUrl: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
