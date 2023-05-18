import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"], // email must be unique and the error specified here is shown if the user tries to enter a non-unique email
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username already exists!"], // email must be unique and the error specified here is shown if the user tries to enter a non-unique email
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8 - 20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// ? We would have done this in a regular (always-on) express backend server
// const User = model("User", UserSchema);
// export default User;

// ? but in this case where the route is only going to get created and running for the time it is being called
const User = models.User || model("User", UserSchema); // first, look into the models.User, see if it's there and create a new model only if it's not there
// this because this route gets called everytime and the connection is established every single time from scratch so we have to make this additional check
export default User;
