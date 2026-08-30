"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 표시한다.
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((counts: Record<string, number>) => {
        if (!cancelled) setClickCounts(counts);
      })
      .catch((error) => {
        console.error("클릭 수를 불러오지 못했습니다:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    // 낙관적으로 화면 카운트를 먼저 올린다.
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    // 실제 집계는 서버에 위임하고, 응답으로 받은 값으로 다시 동기화한다.
    fetch(`/api/links/${id}/click`, { method: "POST", keepalive: true })
      .then((res) => res.json())
      .then((data: { count?: number }) => {
        if (typeof data.count === "number") {
          setClickCounts((prev) => ({ ...prev, [id]: data.count as number }));
        }
      })
      .catch((error) => {
        console.error(`링크(${id}) 클릭 수 증가에 실패했습니다:`, error);
      });
  };

  return (
    <div className="flex w-full flex-col gap-4 px-2 sm:px-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={clickCounts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
