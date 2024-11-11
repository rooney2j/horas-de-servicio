import Aside from "../components/Aside/page";
import { auth } from "@/auth";
import { signOut } from '@/auth';
import LogOutIcon from "../components/icons/LogOutIcon";
import { redirect } from "next/navigation";
async function page() {


  const session = await auth()
  if (!session) {
   
    redirect('/auth/login')
  }
  
  return (
    <div className="flex h-screen gap-2">
      <Aside
      role = {session?.user?.role?.name}
      token = {session?.accessToken}
      />
      <form className="absolute top-4 right-4" action={async () => {
        "use server"
        await signOut();
        console.log("hola")
      }}>

        <ul>
          <li className="h-16 w-16 bg-gradient-to-r from-sky-600 via-sky-400 to-blue-300 text-black rounded-full flex items-center justify-center">
               <button type="submit"><LogOutIcon/></button>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default page;

