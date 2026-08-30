import { NextResponse } from "next/server";
import { incrementClickCount } from "@/lib/clicks";

// 특정 링크의 클릭 수를 1 증가시킨다.
export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });
  }

  try {
    const count = await incrementClickCount(id);
    return NextResponse.json({ id, count });
  } catch (error) {
    console.error(`[POST /api/links/${id}/click] 클릭 수 증가 실패:`, error);
    return NextResponse.json(
      { error: "클릭 수를 증가시키지 못했습니다." },
      { status: 500 }
    );
  }
}
