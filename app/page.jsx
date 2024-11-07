import { auth } from "@/auth";
import Aside from "@/app/components/Aside/page"
import RpteNuevo from "@/app/components/reportes/nuevo/page"

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
       <RpteNuevo/>
    </div>
    </>
    
  )
  
}
