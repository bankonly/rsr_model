const mongoose = require("mongoose");
const { CreateColIfNotExist } = require("./utils/common-func");
const DistrictsModel = require("./models/districts.model");
const OtpModel = require("./models/opt.model");

const InitialDatabase = ({
  uri,
  condig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    replicaSet: "rs",
  },
}) => {
  if (!uri) throw new Error("MongoModelError:: uri is requreid");
  mongoose
    .connect(uri, condig)
    .then(() => {
      CreateColIfNotExist(mongoose);
      console.log("Database Connected");
    })
    .catch((err) => console.log(err));
};

module.exports.InitialDatabase = InitialDatabase;
