import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/dataOfAllUsers";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password } = credentials;
  
         
            await connectMongoDB();
            const user = await User.findOne({ email:email });
            const passwordsMatch = await bcrypt.compare(password, user.password);
             if (passwordsMatch) {
              return user;
            } else{
           return null
       }
        },
      })

  ],
callbacks:{
async jwt({token, user}){

    return {...token, ...user} 
  
},
async session({session, token, user}) {
  
  session.user = token

    return session
  }
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };