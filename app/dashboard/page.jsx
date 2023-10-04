"use client"
import FacDashboard from "../components/faculty_portal/facultyDasboard/dashboard";
import Dashboard from "../components/Userdashboard/dashboard";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation"
export default  function dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/")
  }
  const role = session?.user?._doc.role;

  if (role==="student") 
  return (
    <div>
      <Dashboard />
    </div>
  );
  if(role==="faculty") 
  return (
    <div>
      <FacDashboard />
    </div>
  );
}