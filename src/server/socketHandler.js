export default io => socket => {

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
    const data = {
      time: clock(),
      user,
      text,
      id: socket.id
    };
    console.log(data)
    io.emit("broadcastState", data);
  });

};
