// container
const start = document.getElementById("start");
const title = document.getElementById("header");
const setRange = document.getElementById("setRange");
const setMode = document.getElementById("setMode");
const input = document.getElementById("input");
const output = document.getElementById("output");
const back = document.getElementById("back");
const next = document.getElementById("next");
// setRange
const ten = document.getElementById("ten");
const hundred = document.getElementById("hundred");
const thousand = document.getElementById("thousand");
const customRange = document.getElementById("customRange"); // to-do
const rangeStart = document.getElementById("rangeStart");
const rangeEnd = document.getElementById("rangeEnd");
const showRange = document.getElementById("showRange");

let range;

// start
start.onclick = function() {
    if (setRange.style.display === 'none' || setRange.style.display === '') {
        setRange.style.display = 'block';
        next.style.display = 'block';
        start.textContent = 'Restart';

    } else {
        range = 0;
        showRange.textContent = 'Range: undefined';
    }
}

// range
ten.onclick = function() {
    range = 10;
    showRange.textContent = `Range: 0 - ${range}`;
}

hundred.onclick = function() {
    range = 100;
    showRange.textContent = `Range: 0 - ${range}`;
}

thousand.onclick = function() {
    range = 1000;
    showRange.textContent = `Range: 0 - ${range}`;
}

rangeStart.oninput = defaultUpdateResult;
rangeEnd.oninput = defaultUpdateResult;

function defaultUpdateResult() {
    const valueStart = rangeStart.valueAsNumber;
    const valueEnd = rangeEnd.valueAsNumber;

    if (valueStart != 0 && valueEnd != 0 && valueStart != valueEnd) {
        if (!isNaN(valueStart) && !isNaN(valueEnd)) {
            showRange.textContent = `Range: ${valueStart} - ${valueEnd}`;
        } else if (!isNaN(valueStart) && isNaN(valueEnd)) {
            showRange.textContent = `Range: ${valueStart} - undefined`;
        } else if (isNaN(valueStart) && !isNaN(valueEnd)) {
            showRange.textContent = `Range: undefinded - ${valueEnd}`;
        } else {
            showRange.textContent = 'undefined';
        }
    }
}

// Mode
next.onclick = function() {
    if (setRange.style.display != 'none') {
        if (showRange.includes('undefined') === false) {
            setRange.style.display = 'none';
        } else {
            // some warning popup
        }
    }
}