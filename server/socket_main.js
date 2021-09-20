const socket_main = (io, socket) => {
  socket.on("perfData", (data) => {
    console.log(data);
  });
};

module.exports = socket_main;
