import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await dbConnect();
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) throw new Error("No user found");

          const isPasswordValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) throw new Error("Password is not valid");

          return {
            id: user._id,
            name: user.firstName,
            email: user.email,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "auth/signin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
  },
});
