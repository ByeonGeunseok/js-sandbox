const _HEADER = document.getElementById("header");
const _CONTENTS = document.getElementById("contents");
const _LIST = document.getElementById("listId");

let toggle = false;
let interval = null;

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

function doTick(t) {
    let tick = setInterval(function () {
        /////
        const beforeHeap = performance.memory
            ? performance.memory.usedJSHeapSize
            : null;

        console.log(
            beforeHeap !== null
                ? `▶ 스크립트 시작 전 JS heap: ${(beforeHeap / 1024 / 1024).toFixed(2)} MB`
                : "performance.memory 지원 안 함"
        );

        /////







        /////
        const afterHeap = performance.memory
            ? performance.memory.usedJSHeapSize
            : null;

        if (afterHeap !== null) {
            console.log(
                `▶ 스크립트 종료 후 JS heap: ${(afterHeap / 1024 / 1024).toFixed(2)} MB`
            );
            console.log(
                `   → Δ = ${((afterHeap - beforeHeap) / 1024 / 1024).toFixed(2)} MB`
            );
        } else {
            console.log("performance.memory 지원 안 함");
        }
        /////
    }, t);
}

function stopTick() {
    clearInterval(tick);
}

document.getElementById("tickBtn").onclick = function (e) {
    if (toggle) {
        clearInterval(interval);
        console.log("인터벌 멈춤");
        toggle = false;
    } else {
        interval = setInterval(() => {
            console.log("-*-*-*-*-*-*-*- 실행중 -*-*-*-*-*-*-*-");
        }, 3000);
        console.log("▶ 인터벌 시작");
        toggle = true;
    }
}
