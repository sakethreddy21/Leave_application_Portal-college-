import Dashboard from "../components/dashboard/dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function dashboard() {
  return <Dashboard />;
}