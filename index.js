const _HEADER = document.getElementById("header");
const _CONTENTS = document.getElementById("contents");
const _LIST = document.getElementById("listId");

console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

// setInterval(function () {
//     console.log("tick");
// }, 1000);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function calcPercent(num) {
    if (getRandom(0, 100) <= num) {
        addList(num + " : " + "false");

        return false;
    } else {
        addList(num + " : " + "true");

        return true;
    }
}
function calcPerMill(num) {
    if (getRandom(0, 1000) <= num) {
        addList(num + " : " + "false");

        return false;
    } else {
        addList(num + " : " + "true");

        return true;
    }
}

function addList(param) {
    const newP = document.createElement("p");
    const li = document.createElement("li");

    newP.textContent = "param";
    li.setAttribute('id', param);

    const textNode = document.createTextNode(param);
    li.appendChild(textNode);

    _LIST.appendChild(li);
}

function clearList() {
    _LIST.innerHTML = "";
}
