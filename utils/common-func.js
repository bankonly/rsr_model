module.exports.DB_TIMESTAMP_CONFIG = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

module.exports.CreateColIfNotExist = (mongoose) => {
  const col = mongoose.connection.db.collections();
  let collections = Object.keys(mongoose.connection.collections);
  col.then((v) => {
    let name = v.map((v2) => v2.namespace.split(".")[1]);
    let create = collections.filter((v) => !name.includes(v));

    if (create.length > 0) {
      create.forEach((e) => {
        mongoose.connection.createCollection(e).then((res) => {});
      });
    }
  });
};
