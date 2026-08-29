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
  name: "김보안",
  bio: "보안 엔지니어 | AI 보안에 관심이 많아요",
  avatarUrl: "/avatar-ai-security.svg",
};

export const links: LinkItem[] = [
  { id: "1", label: "📝 블로그", url: "https://blog.naver.com/merrykim0202" },
  { id: "2", label: "📧 이메일", url: "mailto:schu0202@naver.com" },
  { id: "3", label: "🐙 깃허브", url: "https://github.com/merrykim1" },
];
