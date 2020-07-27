const mongoose = require("mongoose");

class MongoDB {
  constructor(config) {
    this.config = config || {
      url: process.env.DB_URL || "mongodb://localhost",
      database: process.env.DB_NAME || "unga-proco",
      mongooseCfg: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    };
    this.connectionString = `${this.config.url}/${this.config.database}`;
    console.log("Starting db connection...");
    this.init();
  }
  async init() {
    console.log("Initializing db...");
    try {
      this.mongoose = await mongoose.connect(
        this.connectionString,
        this.config.mongooseCfg
      );
    } catch (e) {
      console.log(e);
    }
    console.log("Connected:", this.connectionString);
    console.log("Db initialized");
  }
  async saveUser(user) {
    console.log("Saving user", JSON.stringify(user));
    return this.models.User.findOneAndUpdate(
      {
        ipAddress: user.ipAddress,
      },
      user,
      { upsert: true }
    );
  }
  async getBlocks() {
    console.log("Getting blocks");
    return this.models.Block.find({});
  }
  async saveBlock(block) {
    console.log("Saving block", JSON.stringify(block));
    return this.models.Block.findOneAndUpdate(
      { lat: block.lat, long: block.long },
      block,
      { upsert: true }
    );
  }
}
module.exports = MongoDB;
