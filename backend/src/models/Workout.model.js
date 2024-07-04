import { Schema, model, Types } from "mongoose";

const WorkoutSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    rpe: {
      type: Number,
      required: false,
    },
    exercises: [
      {
        name: {
          type: String,
          required: true,
        },
        sets: {
          type: Number,
          required: true,
        },
        reps: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Workout = model("Workout", WorkoutSchema);

export default Workout;