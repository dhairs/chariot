import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: "driver" | "rider";
      onboarded: boolean;
      firstName: string;
    } & DefaultSession["user"];
  }
}

import "next-auth/jwt";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    role: "driver" | "rider";
    onboarded: boolean;
    firstName: string;
    id: string;
  }
}
