const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { RestaurantModelName } = require("./restaurant.model");

const model_name = "table";

const schema = new mongoose.Schema(
  {
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantModelName },
    capacity: { type: Number, required: true },
    img: [{ type: String, required: true }],
    is_meal_required: { type: Boolean, required: true },
    table_no: { type: Number, required: true },
    is_available: { type: Boolean, default: false },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const TableModel = mongoose.model(model_name, schema, model_name);

module.exports = TableModel;
module.exports.TableModelName = model_name;
