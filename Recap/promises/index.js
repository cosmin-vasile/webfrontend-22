function addTodo(eventsCallback) {
  const li = document.createElement('li');
  const buttonEdit = document.createElement('button');
  const buttonDelete = document.createElement('button');
  li.appendChild(buttonEdit);
  li.appendChild(buttonDelete);

  eventsCallback(buttonEdit, buttonDelete);
}

function setTodoEvents(buttonEdit, buttonDelete) {
  buttonEdit.onClick = function() {

  };

  buttonDelete.onClick = function() {

  };
}
addTodo(setTodoEvents);

//cazul 2
function addTodo(paramA) {
  setTodoEvents(paramA, function(paramB) {
    //statement
    cleanEvents(paramA, paramB, function() {

    });
  });
}

const bingoGame = function(winnableTickets, myTicket, seconds) {
  var game = new Promise(function(resolve, reject) {
    setTimeout(function() {
      //statemet - action promise in viitor
      //terminata cu success sau cu failure

      var foundTicket = winnableTickets.find(function(ticket) {
        return ticket === myTicket;
      });

      //bilet la loterie
      if (foundTicket) {
        //daca este castigator - action success
        resolve({
          status: 'ticket castigator',
          wonValue: 100,
        });
      } else {
        //daca nu este castigator - action failure
        reject({
          status: 'ticket necastigator',
          wonValue: 0,
        });
      }
    }, seconds);
  });

  return game;
};


function getRoomTickets() {
  return ['bilet1', 'bilet2', 'bilet3'];
}

function runBingoGame(myTicket, seconds) {
  var ticketList = getRoomTickets();
  var game = bingoGame(ticketList, myTicket, seconds);
  game.then(function(response) {
    //console.log(response);
  }).catch(function(response) {
    //console.log(response);
  }).finally(function() {
    //loga actiunea
    //console.log('finally');
  });

  return game;
}


//stiva




//finallyCallback
//callbackResolve - callbackReject

runBingoGame('bilet1', 1000);

// var games = Promise.all([runBingoGame('bilet1', 1000), runBingoGame('bilet2', 2000), runBingoGame('bilet4', 3000)])
// .then(function(responses) {
//   //toate jocurile castigatoare
//   //party
// }).catch(function(response) {
//   //jocul necastigator
//   //sad
// });


const dict = {
  cat: 'URL',
  dog: 'URL',
};

function createOptions() {
  const array = Object.keys(dict);
  array.forEach((item) => {
    const optionNode = createElement('option');
    optionNode.innerText = item;
    optionNode.value = item;
    selectNode.appendChild(optionNode);
  });
}


var myPromise = new Promise(function(resolve, reject) {
  resolve('my response');
});

myPromise.then(function(response) {
  //avem o eroare
  //business logic
  if (true) {
    throw new Error('am gasit o eroare');
  }
}).then(function() {
  console.log('next 1 then');
}).then(function() {
  console.log('next 2 then');
}).catch(function(response) {
  console.log('catch', response);
}).finally(function() {
  console.log('finally');
}).then(function() {
  console.log('then after finally 1');
}).then(function() {
  console.log('then after finally 2');
  throw new Error('am gasit o eroare');
}).catch(function() {
  console.log('catch after finally');
});
