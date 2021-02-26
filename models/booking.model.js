const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const increment = require("mongoose-sequence");
const { UserModelName } = require("./user.model");
const { RestaurantModelName } = require("./restaurant.model");
const { TableModelName } = require("./table.model");
const { MealModelName } = require("./meal.model");
const { StatusModelName } = require("./status.model");
const _increment = increment(mongoose);

const model_name = "booking";
const schema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: UserModelName },
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantModelName },
    table_id: { type: mongoose.Schema.Types.ObjectId, ref: TableModelName },
    meal_id: [{ type: mongoose.Schema.Types.ObjectId, ref: MealModelName }],
    status_id: { type: mongoose.Schema.Types.ObjectId, ref: StatusModelName },
    booking_time: { type: Date, required: true },
    desc: { type: String, default: null },
    booking_number: { type: Number, required: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

// Increment number
schema.plugin(_increment, { inc_field: "booking_number" });

const BookingModel = mongoose.model(model_name, schema, model_name);

module.exports = BookingModel;
module.exports.BookingModelName = model_name;
