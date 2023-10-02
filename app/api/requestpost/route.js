import { useSession } from "next-auth/react";
import { connectMongoDB } from "@/lib/mongodb";
import data from "@/models/leaveRequest";
import { NextResponse } from "next/server";
export async function POST(req, res) {

try {
  await connectMongoDB();
  const  {regnum} = await req.json();  
  const leavedeatils = await data.find({regnum});
  console.log(leavedeatils);
   return NextResponse.json(leavedeatils,{status:401})

  
}
catch (error) {
  console.log(error)
  return NextResponse.json(
     error.message,
    { status: 500 }
  );
}
}

