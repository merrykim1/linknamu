export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

// TODO: 추후 MongoDB 연동 시 DB 조회로 대체
export const profile: Profile = {
  name: "홍길동",
  bio: "방문해 주셔서 감사합니다 🌳",
  avatarUrl: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "1", label: "블로그", url: "https://example.com/blog" },
  { id: "2", label: "인스타그램", url: "https://instagram.com" },
  { id: "3", label: "깃허브", url: "https://github.com" },
];
