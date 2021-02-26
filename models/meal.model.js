const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { RestaurantModelName } = require("./restaurant.model");
const { MealTypeModelName } = require("./mealtype.model");

const model_name = "meal";

const schema = new mongoose.Schema(
  {
    en: { type: String, required: true },
    la: { type: String, required: true },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantModelName, required: true },
    meal_type_id: { type: mongoose.Schema.Types.ObjectId, ref: MealTypeModelName, required: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const MealModel = mongoose.model(model_name, schema, model_name);

module.exports = MealModel;
module.exports.MealModelName = model_name;
