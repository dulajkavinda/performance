const socket_main = (io, socket) => {
  socket.on("cleintAuth", (key) => {
    if (key === "IHbjhkBbbbhHbJh") {
      socket.join("clients");
    } else if (key === "IHbjhkBbbbhHbJhd") {
      socket.join("ui");
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("perfData", (data) => {
    console.log(data);
  });
};

module.exports = socket_main;
