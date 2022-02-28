const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  textPreview: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String },
  category: { type: String, default: "Без категории" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Post", postSchema);
