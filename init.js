import app from "./app.js";
import "./db";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Listening to PORT 4000");
});
