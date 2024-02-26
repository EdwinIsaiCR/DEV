import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth";
import dbConnect from "../../../utils/db";
import bcrypt from "bcrypt";
import User from "../../../models/UserModel";

export default NextAuth({
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  session: {
    maxAge: 60 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email});

        if (!user) {
          throw new Error("No existe el usuario");
        }

        const passwordCheck = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordCheck) {
          throw new Error("Contrasena incorrecta");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        const newuser = await User.findOne({ email: profile.email });
        if (newuser) {
          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        } else {
          const result = await new User({
            email: profile.email,
            google_id: account.providerAccountId,
            name: profile.name,
            role: "buyer",
          }).save();
          newuser = await User.findOne({ email: profile.email });
          user.id = newuser.id;
          user.token = newuser.role;
          return user;
        }
      }
    },
    async jwt({ token, user, account, profile, isNewUser}){
        if(user){
            token.id = user.id
            token.role = user.role
            return token
        } else{
            return token
        }
    },
    async session({ session, user, tokem }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
});
