export default socketClient => {
    const stateUser = document.getElementById('state-username');
    const stateText = document.getElementById('state-text');
    const sendState = document.getElementById('send-state');
    const updateUser = document.getElementById('update-user');
    const user = document.getElementById('user');
    const states = document.getElementById('states');
  
    sendState.addEventListener('click', () => {
      if (stateText.value.length > 0) {
        socketClient.emit(
        'sendState', 
        stateUser.value, 
        stateText.value
        )};
    });

    updateUser.addEventListener('click', () => {
      if (stateUser.value.length > 0) {
        socketClient.emit(
        'updateUser',
        stateUser.value, 
        )};
        updateUser.disabled = true;
        stateUser.disabled = true;
        console.log(stateUser.value)
    });
  
    const sendLike = (id) => {
      console.log(id);
    }
  
    return {
      sendLike,
      user,
      states
    }
  };