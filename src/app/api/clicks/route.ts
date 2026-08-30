import { NextResponse } from "next/server";
import { getAllClickCounts } from "@/lib/clicks";

// 요청 정보를 쓰지 않는 GET 핸들러는 Next.js가 빌드 시점에 미리 실행해
// 정적으로 캐싱하려 시도한다. 그 과정에서 빌드 환경에 DB 접속 정보가 없어
// 실패하지 않도록, 항상 런타임에만 실행되는 동적 라우트로 고정한다.
export const dynamic = "force-dynamic";

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
