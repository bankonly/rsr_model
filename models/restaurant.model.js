const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { UserModelName } = require("./user.model");
const { RestaurantTypeModelName } = require("./restauranttype.model");
const VillagesModel = require("./villages.model");

const model_name = "restaurant";

const schema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: UserModelName },
    employee_id: [{ type: mongoose.Schema.Types.ObjectId, ref: UserModelName }],
    restaurant_type_id: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantTypeModelName },
    village_id: { type: mongoose.Schema.Types.ObjectId, ref: VillagesModel },
    name: { type: String, required: true },
    desc: { type: String, default: null },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    phone_number: { type: String, required: true },
    is_open: { type: Boolean, required: true },
    time_available: [
      {
        is_open: { type: Boolean, required: true },
        open_time: { type: Date, default: null },
      },
    ],
    address: { type: String, default: null },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const RestaurantModel = mongoose.model(model_name, schema, model_name);

module.exports = RestaurantModel;
module.exports.RestaurantModelName = model_name;
