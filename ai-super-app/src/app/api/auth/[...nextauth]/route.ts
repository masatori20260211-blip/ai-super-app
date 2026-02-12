export const dynamic = "force-dynamic";

// NextAuthがVERCEL_URL（デプロイ固有URL）をフォールバックに使うのを防ぎ、
// NEXTAUTH_URL（本番URL）を確実に使うようにする
if (process.env.NEXTAUTH_URL) {
  const url = new URL(process.env.NEXTAUTH_URL);
  process.env.VERCEL_URL = url.host;
}

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
