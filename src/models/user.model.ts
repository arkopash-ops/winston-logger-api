import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String
});

const userModel = model("User", userSchema);
export default userModel;
