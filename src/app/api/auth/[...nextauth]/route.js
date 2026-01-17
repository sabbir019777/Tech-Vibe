import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({

      clientId: "416234608416-8jf5lfbsbci96i18u1ob1krab2t9pqd1.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  secret: "my-super-secret-key-123",
  
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/items";
    },
  },
});

export { handler as GET, handler as POST };