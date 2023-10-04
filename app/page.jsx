import Image from 'next/image'
import LoginForm from './components/loginform/commonlogin'
import StdReg from './components/registrationforms/student'
import FacReg from './components/registrationforms/faculty'
import { getServerSession } from "next-auth";
import Requesform from './components/leaverequestform/Requestform'
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default  function Home() {
  const session =  getServerSession(authOptions);

  


  return (
    <main >
      
      
     <LoginForm/>
      
      
    </main>
  );
}