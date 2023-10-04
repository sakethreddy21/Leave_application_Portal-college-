import { connectMongoDB } from "@/lib/mongodb";
import data from "@/models/leaveRequest";
import { NextRequest, NextResponse } from "next/server";

export async function POST( req, {params} ) {
  
  const {_id} = params;
  try {
    await connectMongoDB();
    
    const { status } = await req.json();
    await data.updateOne({_id:_id}, { $set: { status} });
    const leaveDetails = await data.findOne({ _id: _id });
  console.log(leaveDetails);
    return NextResponse.json({ status: 401, message: status , code:400});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: error.message });
  }
}
