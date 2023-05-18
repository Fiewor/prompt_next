import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    //creator of a specific prompt
    type: Schema.Types.ObjectId, // the creator is going to be a document in the database, more specifically the user type
    ref: "User", // it's going to be a one-to-many relationship, so 1 user is going to be able to create many prompts
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
