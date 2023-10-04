import RegisterForm from "../components/registrationforms/hod";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default  function Register() {
  return <RegisterForm />;
}