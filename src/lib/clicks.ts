import getMongoClientPromise from "@/lib/mongodb";

type ClickDoc = {
  _id: string; // link id
  count: number;
};

const DB_NAME = "linknamu";
const COLLECTION_NAME = "clicks";

async function getClicksCollection() {
  const client = await getMongoClientPromise();
  return client.db(DB_NAME).collection<ClickDoc>(COLLECTION_NAME);
}

/** 모든 링크의 클릭 수를 { [linkId]: count } 형태로 반환한다. */
export async function getAllClickCounts(): Promise<Record<string, number>> {
  const collection = await getClicksCollection();
  const docs = await collection.find({}).toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}

/** 특정 링크의 클릭 수를 1 증가시키고, 증가된 값을 반환한다. */
export async function incrementClickCount(linkId: string): Promise<number> {
  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return result?.count ?? 1;
}
