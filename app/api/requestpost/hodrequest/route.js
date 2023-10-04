
import { connectMongoDB } from "@/lib/mongodb";
import data from "@/models/leaveRequest";
import { NextResponse } from "next/server";
export async function POST(req, res) {

try {
  await connectMongoDB();
  const {hodEmail } = await req.json();
const status="Approved by faculty"
  let query = {};
  
  
  if (hodEmail) {
    query.hodEmail= hodEmail;
  }
 
  
  const _id = await data.find(query, status);
  const leavedeatils= await data.find({_id:_id});
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

