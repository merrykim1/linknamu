import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

// 모듈이 import되는 시점(Next.js 빌드의 "collect page data" 단계 등)에는
// 연결을 시도하지 않고, 실제로 DB가 필요한 순간에만 연결한다.
function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI 환경 변수가 설정되어 있지 않습니다. .env.local 파일(로컬) 또는 Vercel 프로젝트의 Environment Variables(배포)를 확인해주세요."
    );
  }

  const client = new MongoClient(uri);

  if (process.env.NODE_ENV === "development") {
    // 개발 모드에서는 HMR로 모듈이 재실행돼도 커넥션이 중복 생성되지 않도록
    // 전역 객체에 Promise를 캐싱한다.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  return client.connect();
}

export default function getMongoClientPromise(): Promise<MongoClient> {
  if (!clientPromise) {
    clientPromise = createClientPromise();
  }
  return clientPromise;
}
