/**
 * Refactor the following to use ES6. You will use all of the following ES6 features at least once:
 * - Let declarations
 * - Constants
 * - String interpolation
 * - Destructuring (of objects)
 * - Spread operator (of arrays)
 * - Shallowing copying (with Object.assign)
 *
 * Do not declare anything with "var"
 *
 * Reference
 * Slides: @see https://slides.com/jamaltaylor/es6/
 * ES6 Chart: @see http://es6-features.org/#Constants
 */

let messageBox = document.getElementById("message");

let guestNetworkStatus = {
  location: "Sunnyside Hotel",
  networkName: "Guest Network",
  uptime: 90,
  lastPinged: new Date()
};

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    const serverData = [
      {
        networkName: "Guest Network",
        lastPinged: new Date(),
        uptime: generateFakeUptime()
      },
      {
        networkName: "Lobby Network",
        lastPinged: new Date(),
        uptime: 97
      },
      {
        networkName: "Staff Network",
        lastPinged: new Date(),
        uptime: generateFakeUptime()
      }
    ];
    process(...serverData);
  }, i * 3000);
}

let process = (guestNetwork, lobbyNetwork, staffNetwork) => {

  let {networkName,lastPinged,uptime} = guestNetwork

  Object.assign(guestNetworkStatus,{lastPinged:lastPinged,uptime:uptime})
  console.log(guestNetworkStatus);

  let isBestNetwork =
    uptime > lobbyNetwork.uptime && uptime > staffNetwork.uptime;

  render(guestNetworkStatus, isBestNetwork);
}

function render(guestNetworkStatus, betterThanStaffNetwork) {
  let a = guestNetworkStatus.networkName, b = guestNetworkStatus.uptime;
  let message = `${a} : ${b} % uptime`;
  if(betterThanStaffNetwork)
    message += "\nThis is outperforming every other network.";
  console.log(message);
  messageBox.innerHTML = message;
}

function generateFakeUptime() {
  return Math.floor(Math.random() * (100 - 98 + 1) + 98);
}
