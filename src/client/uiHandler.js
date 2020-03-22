export default socketClient => {
  const stateUser = document.getElementById("state-username");
  const stateText = document.getElementById("state-text");
  const sendState = document.getElementById("send-state");
  const statesList = document.getElementById("states-list");

  sendState.addEventListener("click", () => {
    if (stateText.value.length > 0) {
      socketClient.emit("sendState", stateUser.value, stateText.value);
    }
  });

  const sendLike = text => {
    const like = { message: text };
    socketClient.emit('sendLike', like);
  };

  socketClient.emit("getStates", stateUser.value, stateText.value);

  return {
    sendLike,
    statesList
  };
};