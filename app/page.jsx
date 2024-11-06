import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (!session) {
    console.log(session)
    return redirect('/auth/login');
  }
  
  return(

    <>
    <div className="h-full w-screen">

    </div>
    </>
    
  )
  
}
