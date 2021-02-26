const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");
const { number, string } = require("@hapi/joi");

const model_name = "provinces";

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    pr_name: { type: String, required: true },
    pr_name_en: { type: String, required: true },
    // reference: { type: mongoose.Schema.Types.ObjectId, ref: "collection_name" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const ProvincesModel = mongoose.model(model_name, schema, model_name);

module.exports = ProvincesModel;
module.exports.ProvincesModelName = model_name;
