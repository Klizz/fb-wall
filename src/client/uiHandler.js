export default socketClient => {
  const stateUser = document.getElementById("state-username");
  const stateText = document.getElementById("state-text");
  const sendState = document.getElementById("send-state");
  const updateUser = document.getElementById("update-user");
  const user = document.getElementById("user");
  const statesList = document.getElementById("states-list");

  sendState.addEventListener("click", () => {
    if (stateText.value.length > 0 && stateUser.disabled == true) {
      socketClient.emit("sendState", stateUser.value, stateText.value);
    }
  });

  updateUser.addEventListener("click", () => {
    if (stateUser.value.length > 0) {
      socketClient.emit("updateUser", stateUser.value);
    }
    updateUser.disabled = true;
    stateUser.disabled = true;
  });

  const sendLike = text => {
    const like = { message: text };
    socketClient.emit('sendLike', like);
  };

  socketClient.emit("getStates", stateUser.value, stateText.value);

  return {
    sendLike,
    user,
    statesList
  };
};