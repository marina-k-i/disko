import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      image: string;
      email: string;
      name: string;
      displayName: string;
    } & DefaultSession["user"];
  }
}
