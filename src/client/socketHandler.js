export default (socketClient, ui) => {
    socketClient.on('broadcastUser', (userName) => {
      ui.user.innerHTML += `<div>
        <h3 class="text-primary"> ${userName.user} </h3>
      </div>`
    });

    socketClient.on('broadcastState', (states) => {
      let list = "";
      states.forEach(message => {
        list += `<div class="alert alert-dark">
        <p>Likes: ${ message.likes }</p>
        <p class="text-secondary"> ${message.time} </p> <b>${ message.user }</b>
        <p>${message.text}</p>
        <button id="likeBTN" onClick="window.ui.sendLike('${message.id}')">Like</button>
      </div>`;
      })
      ui.statesList.innerHTML = list;
      });
  };