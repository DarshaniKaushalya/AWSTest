const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        // price: {
        //     type: Number,
        //     required: true
        // }
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

cartSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("cart", cartSchema);
