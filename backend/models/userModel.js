const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    Name: {
      type: String,
      required: [true, "Please add this field"],
    },
    Location: {
      type: String,
      required: [true, "Please add this field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
