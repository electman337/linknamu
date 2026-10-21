import { connection } from "next/server";
import { getDb } from "@/lib/mongodb";
import { links } from "@/data/profile";

type ClickDoc = { _id: string; count: number };

const validIds = new Set(links.map((link) => link.id));

// 링크 클릭 1회 기록: POST /api/click  { "id": "github" }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !validIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크예요." }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db
      .collection<ClickDoc>("clicks")
      .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[click] 기록 실패", error);
    return Response.json({ error: "클릭 기록에 실패했어요." }, { status: 500 });
  }
}

// 링크별 클릭 수 조회: GET /api/click
export async function GET() {
  await connection(); // 항상 요청 시점의 최신 값을 읽도록

  try {
    const db = await getDb();
    const docs = await db.collection<ClickDoc>("clicks").find().toArray();
    const counts = Object.fromEntries(docs.map((d) => [d._id, d.count]));
    return Response.json(
      links.map((link) => ({ id: link.id, title: link.title, count: counts[link.id] ?? 0 })),
    );
  } catch (error) {
    console.error("[click] 조회 실패", error);
    return Response.json({ error: "클릭 수 조회에 실패했어요." }, { status: 500 });
  }
}
