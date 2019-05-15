const addEventListener = function(document) {
  let body = document.getElementById("bd");
  body.onkeypress = decideMovement;
};

const decideMovement = function() {
  let events = new Object();
  events[" "] = fire;
  events["s"] = startGame;
  events[event.key]();
};

const initialize = function() {
  addEventListener(document);
};

window.onload = initialize;
