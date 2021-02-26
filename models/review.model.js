const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { RestaurantModelName } = require("./restaurant.model");
const { UserModelName } = require("./user.model");

const model_name = "review";

const schema = new mongoose.Schema(
  {
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantModelName },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: UserModelName },
    review: { type: String, required: true },
    star: { type: Number, default: null },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const ReviewModel = mongoose.model(model_name, schema, model_name);

module.exports = ReviewModel;
module.exports.ReviewModelName = model_name;
