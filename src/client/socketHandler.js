export default (socketClient, ui) => {
    socketClient.on('broadcastState', (data) => {
      console.log('broadcastState', data);
      ui.states.innerHTML += `<div>
        <p class="text-secondary"> ${data.time} </p> <b>${ data.user }</b>
        <p>${data.text}</p>
        <button onClick="window.ui.sendLike('${data.id}')">Like</button>
      </div>`;
    });
  };