export default (socketClient, ui) => {
    socketClient.on('broadcastUser', (userName) => {
      ui.user.innerHTML += `<div>
        <h3 class="teal-text"> ${ userName.user } </h3>
      </div>`
    });

    socketClient.on('broadcastState', (states) => {
      let list = "";
      states.forEach(message => {
        list += `<div class="card-panel teal lighten-5">
        <p class="grey-text"> ${message.time} </p> <h4>${ message.user }</h4>
        <p>${message.text}</p>
        <button class="btn pink" 
        id="likeBTN" onClick="window.ui.sendLike('${message.id}')">
        <i class="material-icons">favorite</i>
        </button>
        <span style="padding-left:30px;">${ message.likes }</span>
      </div>`;
      })
      ui.statesList.innerHTML = list;
      });
  };