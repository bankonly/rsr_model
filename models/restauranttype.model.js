const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "restauranttype";

const schema = new mongoose.Schema(
  {
    field: { type: String, required: true },
    reference: { type: mongoose.Schema.Types.ObjectId, ref: "collection_name" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const RestaurantTypeModel = mongoose.model(model_name, schema, model_name);

module.exports = RestaurantTypeModel;
module.exports.RestaurantTypeModelName = model_name;
