export const dynamic = "force-dynamic";

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const auth = NextAuth(authOptions);

async function handler(
  req: Request,
  ctx: { params: Promise<{ nextauth: string[] }> }
) {
  const nextauthUrl = process.env.NEXTAUTH_URL;
  if (nextauthUrl) {
    const target = new URL(nextauthUrl);
    const headers = new Headers(req.headers);
    headers.set("host", target.host);
    headers.set("x-forwarded-host", target.host);
    headers.set("x-forwarded-proto", "https");

    const originalUrl = new URL(req.url);
    originalUrl.host = target.host;
    originalUrl.protocol = target.protocol;

    const newReq = new Request(originalUrl.toString(), {
      method: req.method,
      headers,
      body: req.body,
      // @ts-expect-error duplex is required for streaming body in Node.js
      duplex: "half",
    });

    return auth(newReq as any, ctx);
  }
  return auth(req as any, ctx);
}

export { handler as GET, handler as POST };
