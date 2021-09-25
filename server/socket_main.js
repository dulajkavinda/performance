const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/perfData", { useNewUrlParser: true });
const Machine = require("./models/Machine");

const socket_main = (io, socket) => {
  let macA;

  socket.on("cleintAuth", (key) => {
    if (key === "IHbjhkBbbbhHbJh") {
      socket.join("clients");
    } else if (key === "IHbjhkBbbbhHbJhd") {
      socket.join("ui");
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("initPerfData", async (data) => {
    macA = data.macA;
    const mongooseResponse = await checkAndAdd(data);
    console.log(mongooseResponse);
  });

  socket.on("perfData", (data) => {
    //console.log(data);
  });
};

const checkAndAdd = (data) => {
  return new Promise((resolve, reject) => {
    Machine.findOne({ macA: data.macA }, (err, doc) => {
      if (err) {
        reject("error");
        throw err;
      } else if (doc === null) {
        let newMachine = new Machine(data);
        newMachine.save();
        resolve("added");
      } else {
        resolve("found");
      }
    });
  });
};

module.exports = socket_main;
