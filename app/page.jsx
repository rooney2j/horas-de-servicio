import { auth } from "@/auth";
import Aside from "./components/Aside/page";
import LogOut from "./components/icons/LogOutIcon";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import Escuela from "./components/escuela/Escuela";
import TableBase from "./components/tables/TableBase"

export default async function Home() {


  const session = await auth();


  if (!session) {


    redirect('/auth/login')
  }
  else {
    redirect("/main")
  }


 

  return (
    <>


      <div className="h-screen w-screen flex">
        <Aside
          role={session.user.role.name}
        />
        <Escuela
          token={session.accessToken}
        />
        <TableBase token={session.accessToken}/>
    

        <div className="bg-[url(/images/1393565.webp')] h-full">
        </div>

       </div>
    </>

  )
}