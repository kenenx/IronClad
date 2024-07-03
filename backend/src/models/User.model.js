import { Schema, model} from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
    weight: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    experience_level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
