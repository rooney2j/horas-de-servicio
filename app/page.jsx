import { auth } from "@/auth";
import Aside from "./components/Aside/page";
import MainSearch from "./components/mains/MainSearch";
export default async function Home() {
  const session = await auth();
  if (!session) {
    console.log(session)
    return redirect('/auth/login');
  }
  
  return(

    <>
    <div className="h-full w-screen">
       <Aside/>
       <MainSearch></MainSearch>
    </div>
    </>
    
  )
  
}
