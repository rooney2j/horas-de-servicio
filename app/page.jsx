
import { auth } from "@/auth";
import Aside from "./components/Aside/page";
import LogOut from "./components/icons/LogOut";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";



export default async function Home() {
   

  const session = await auth();
 
  if (!session) {

    redirect('/auth/login');
  }
   
  

  return (

    <>
    
      <div className="h-screen w-screen">
        <Aside />
        <form className="absolute top-4 right-4" action={async () => {
          'use server';
          await signOut();
        }}>

          <ul>
            <li className="h-16 w-16 bg-gradient-to-r from-sky-600 via-sky-400 to-blue-300 text-black rounded-full flex items-center justify-center">
                 <button type="submit"><LogOut/></button>
            </li>
          </ul>
        </form>
      </div>


    </>


  )

}
