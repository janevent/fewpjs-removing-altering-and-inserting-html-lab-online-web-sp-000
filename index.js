
let m = document.getElementById("main");
m.remove();
var newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = `${YOUR-NAME} is the champion`;

document.body.appendChild(newHeader);
