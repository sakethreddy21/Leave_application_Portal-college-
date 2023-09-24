import {connectMongoDB} from '@/lib/mongodb'
import data from "@/models/leaveRequest";
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';


export async function POST(req, res) {
  await connectMongoDB()
        const { stdname, regnum, leaveType, visitingPlace, reason, fromDate, toDate } =await req.json();
        if (!stdname || !regnum || !leaveType || !visitingPlace || !reason || !fromDate || !toDate) {
          return NextResponse.json({message: "filll the all details"}, {status:422})
          //res.status(422).json({ error: "filll the all details" });
          //console.log("bhai nathi present badhi details");
        }
  
      try {
       
        const leavedata = await data.create({ stdname, regnum, leaveType, visitingPlace, reason, fromDate, toDate });
        console.log(leavedata);
        return NextResponse.json({message:leavedata},{status:201})
       
    } catch (err) {
      console.log(err);
      return NextResponse.error(err);
      
    }
  
}
