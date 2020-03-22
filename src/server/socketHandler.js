const pool = require('./database');
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
      likes: 0,
      id: socket.id
    });
    async (text, username, createdAt, likes, status, done) => {
      let newPost = {
        id,
        text,
        username,
        createdAt,
        likes,
        status
      };
      const result = await pool.query("INSERT INTO posts SET ? ", newPost);
      return done(null, newPost);
    }
    io.emit("broadcastState", states);
  });

  socket.on("sendLike", like => {
    const currentState = states.find(i => i.likes === like.message);
    io.emit("broadcastState", states);
  });

  socket.on("getStates", () => {
    io.emit("broadcastState", states);
  });

  socket.on("updateUser", user => {
    const userName = {
      user,
      id: socket.id
    };
    io.emit("broadcastUser", userName);
  });
};
