const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { RestaurantModelName } = require("./restaurant.model");

const model_name = "banner";

const schema = new mongoose.Schema(
  {
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: RestaurantModelName },
    img: { type: Array, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    position_no: { type: String, required: true },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const BannerModel = mongoose.model(model_name, schema, model_name);

module.exports = BannerModel;
module.exports.BannerModelName = model_name;
