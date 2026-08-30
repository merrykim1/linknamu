import { NextResponse } from "next/server";
import { getAllClickCounts } from "@/lib/clicks";

// 모든 링크의 현재 클릭 수를 한 번에 조회한다.
export async function GET() {
  try {
    const counts = await getAllClickCounts();
    return NextResponse.json(counts);
  } catch (error) {
    console.error("[GET /api/clicks] 클릭 수 조회 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}
