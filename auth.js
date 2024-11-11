import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        
        const{email,password} = credentials
        const res = await fetch("https://funval-api.onrender.com/api/v1/auth/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            email,
            password
          })
        })
        const data = await res.json()
        if(res.ok && data){
          
           return data
        }
        return null
        
      },
    }),
  ],
  pages:{
    signIn:"/auth/login"
  },
  callbacks: {
    async jwt({ token, user: data }) {
      if (data) {
        token.id = data.id;
        token.email = data.email;
        token.name = data.full_name;
        token.role = data.role;
        token.accessToken = data.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
      };

      session.accessToken = token.accessToken;
      return session;
    },
}})