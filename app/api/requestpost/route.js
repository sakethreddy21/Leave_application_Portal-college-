
import { connectMongoDB } from "@/lib/mongodb";
import data from "@/models/leaveRequest";
import { NextResponse } from "next/server";
export async function POST(req, res) {

try {
  await connectMongoDB();
  const { regnum, facultyEmail } = await req.json();

  let query = {};
  
  if (regnum) {
    query.regnum = regnum;
  }
  
  if (facultyEmail) {
    query.facultyEmail = facultyEmail;
  }
  
  const leavedeatils = await data.find(query);
  console.log(leavedeatils);
   return NextResponse.json(leavedeatils,{status:200})

  
}
catch (error) {
  console.log(error)
  return NextResponse.json(
     error.message,
    { status: 500 }
  );
}
}

