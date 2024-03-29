import mongoose, { Schema, models } from "mongoose";

const studentleaveSchema = new Schema(
  {
    stdname: {
      type: String,
      required: true,
    },
    regnum: {
      type: String,
      required: true,
    },
    leaveType: {
      type: String,
      required: true,
    },
    visitingPlace: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    status:{
      type: String,
      default: "pending",
    },
    remarks:{
      type: String,
      default: " ",
    },
    facultyEmail: {
      type: String,
    },
    hodEmail:{
      type: String,
    },
  },
  { timestamps: true }
);

const leavedata = models.leavedata || mongoose.model("leavedata", studentleaveSchema);
export default leavedata;