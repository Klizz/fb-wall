export default (socketClient, ui) => {
    socketClient.on('broadcastUser', (userName) => {
      ui.user.innerHTML += `<div>
        <h3 class="text-primary"> ${userName.user} </h3>
      </div>`
    });
    socketClient.on('broadcastState', (states) => {
      let list = "";
      states.forEach(message => {
        list += `<div>
        <p class="text-secondary"> ${message.time} </p> <b>${ message.user }</b>
        <p>${message.text}</p>
        <button onClick="window.ui.sendLike('${message.id}')">Like</button>
      </div>`;
      })
      ui.statesList.innerHTML = list;
      });
  };