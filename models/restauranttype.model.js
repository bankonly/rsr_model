const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "restaurant_type";

const schema = new mongoose.Schema(
  {
    la: { type: String, required: true },
    en: { type: String, required: true },
    numeric: { type: Number, required: true, unique: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const RestaurantTypeModel = mongoose.model(model_name, schema, model_name);

module.exports = RestaurantTypeModel;
module.exports.RestaurantTypeModelName = model_name;
