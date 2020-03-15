export default socketClient => {
    const stateUser = document.getElementById('state-username');
    const stateText = document.getElementById('state-text');
    const sendState = document.getElementById('send-state');
    const states = document.getElementById('states');
  
    sendState.addEventListener('click', () => {
      if (stateText.value.length > 0) {
        socketClient.emit('sendState', stateUser.value, stateText.value);
      }
    });
  
    const sendLike = (id) => {
      console.log(id);
    }
  
    return {
      sendLike,
      states
    }
  };