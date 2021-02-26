const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "villages";

var schema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    vill_name: { type: String, required: true },
    vill_name_en: { type: String, required: false },
    district: { type: mongoose.Schema.Types.Number, ref: "districts" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

schema.virtual('districts', {
  ref: 'districts',
  localField: 'district',
  foreignField: 'id',
  justOne: true
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

const VillagesModel = mongoose.model(model_name, schema, model_name);

module.exports = VillagesModel;
module.exports.VillagesModelName = model_name;
