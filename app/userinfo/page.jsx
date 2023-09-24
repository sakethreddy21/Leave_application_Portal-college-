"use client";
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) redirect("/");
  const regnum= session?.user?._doc.regnum;
  const role=session?.user?._doc.role;
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          regnum: <span className="font-bold">{regnum}</span>
        </div>
        <div>
          role: <span className="font-bold">{role}</span>


        </div>
        <button
          onClick={() => signOut({redirect:false, callbackUrl:"/"})}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}