import "express-async-errors";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY Must Be Defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI Must Be Defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To MongoDB");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("listening on port 3000!!");
});

start();
