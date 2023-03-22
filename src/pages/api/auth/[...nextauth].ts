import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return Promise.resolve({
        ...session,
        user: {
          ...session.user,
          // userId: user.userId,
          // displayName: user.displayName,
        },
      });
    },
  },
  // callbacks: {
  //   async session({ session, user }) {
  //     return Promise.resolve({
  //       ...session,
  //       user: {
  //         ...session.user,
  //         // id: user.id,
  //         // role: user.role,
  //         // sellerId: user.sellerId,
  //         // displayName: user.displayName,
  //       },
  //     });
  //   },
  // },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     if (account.provider === "google") {
  //       return profile.email_verified && profile.email.endsWith("@example.com");
  //     }
  //     return true; // Do different verification for other providers that don't have `email_verified`
  //   },
  // },

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log(profile);
  //     return profile.email_verified as boolean;

  //     // console.log("サインイン");
  //     return true;
  //   },
  // },

  // callbacks: {
  //   async session({ session, user }) {
  //     return Promise.resolve({
  //       ...session,
  //       user: {
  //         ...session.user,
  //         // id: user.id,
  //         // role: user.role,
  //         // sellerId: user.sellerId,
  //         // displayName: user.displayName,
  //       },
  //     });
  //   },
  // },

  secret: process.env.VERCEL_URL,
});
