export default (io, states) => socket => {
  function clock() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    let time = h + ":" + m + " hrs";
    return date + " at " + time;
  }

  socket.on("sendState", (user, text) => {
    states.push({
      time: clock(),
      user,
      text,
      id: socket.id
    });
    io.emit("broadcastState", states);
  });

  socket.on("getStates", (user, text) => {
    console.log(states);
    io.emit("broadcastState", states);
  });

  socket.on('updateUser', (user) => {
    const userName = {
      user,
      id: socket.id
    }
    io.emit('broadcastUser', userName);
  });
};
