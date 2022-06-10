const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
    },
    categoryImage: {
      type: String,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

categorySchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("category", categorySchema);
