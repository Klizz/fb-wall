export default (socketClient, ui) => {
    socketClient.on('broadcastUser', (userName) => {
      ui.user.innerHTML += `<div>
        <h3 class="text-primary"> ${userName.user} </h3>
      </div>`
    });
    socketClient.on('broadcastState', (data) => {
      ui.states.innerHTML += `<div>
        <p class="text-secondary"> ${data.time} </p> <b>${ data.user }</b>
        <p>${data.text}</p>
        <button onClick="window.ui.sendLike('${data.id}')">Like</button>
      </div>`;
    });
  };