const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Machine = new Schema({
  macA: String,
  cpuLoad: Number,
  freeMem: Number,
  totalMem: Number,
  memUsage: Number,
  osType: String,
  uptime: Number,
  cpuModel: String,
  cpuSpeed: Number,
  numCpus: Number,
  usedMem: Number,
});

module.exports = mongoose.model("Machine", Machine);
