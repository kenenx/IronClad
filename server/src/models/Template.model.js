import { Schema, model, Types } from "mongoose";

const TemplateSchema = new Schema(
  {
  name: {
    type: String,
    required: true,
  },
  exercises: [{
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
  }],
  createdBy: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  },
  {
  timestamps: true,
  }
);

const Template = model("Template", TemplateSchema);
  
export default Template;