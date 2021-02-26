const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "user";

const schema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    email: { type: String, default: null },
    img: { type: String, default: null },
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    phone: { type: String, default: null },
    provider: { type: Number, default: 1, enum: [1, 2, 3, 4] }, // 1 manual register,2 facbook, 3 google 4 apple
    provider_id: { type: String, default: null },
    is_identified: { type: Boolean, default: false },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const UserModel = mongoose.model(model_name, schema, model_name);

module.exports = UserModel;
module.exports.UserModelName = model_name;
