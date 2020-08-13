const express = require("express");
const bodyParser = require("body-parser");
const DB = require("./db");
const fetch = require("node-fetch");
const { publicRoutes } = require("./routes")();
const defaultConfig = require("./config");

class UNGAProcoChainApp {
  constructor(config) {
    config = { ...defaultConfig, ...config };
    this.config = config;
    console.log("Starting...");
    this.init();
  }
  init() {
    console.log("Initializing...");
    this.environment = this.config.environment;
    this.db = new DB(this.config.db);
    this.server = express();
    this.server.set("trust_proxy", this.config.trustProxy);
    this.server.set("json spaces", this.config.jsonSpaces);
    this.server.use(bodyParser.urlencoded(this.config.urlencoded));
    this.server.use("fetch", fetch);
    this.server.set("ungaProcoChain", this);
    this.server.use("/rest", publicRoutes);
    console.log("Initialized");
  }
  start() {
    console.log(`Listening on http://localhost:${this.config.port}`);
  }
}

if (require.main === module) {
  const app = new UNGAProcoChainApp();
  app.start();
} else {
  module.exports = UNGAProcoChainApp;
}
