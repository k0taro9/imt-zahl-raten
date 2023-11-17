// container
const start = document.getElementById("start");
const title = document.getElementById("header");
const setRange = document.getElementById("setRange");
const setMode = document.getElementById("setMode");
const input = document.getElementById("input");
const output = document.getElementById("output");
const back = document.getElementById("back");
const next = document.getElementById("next");
/*const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");*/
// setRange
const ten = document.getElementById("ten");
const hundred = document.getElementById("hundred");
const thousand = document.getElementById("thousand");
const customRange = document.getElementById("customRange");
const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const showRange = document.getElementsByClassName("showRange");
// setMode
const pvp = document.getElementById("pvp");
const pve = document.getElementById("pve");
// input
const pvp_p1 = document.getElementById("pvp_p1");
const p1_input = document.getElementById("p1_input");
const pvp_p2 = document.getElementById("pvp_p2");
const p2_input = document.getElementById("p2_input");
const pve_p = document.getElementById("pve_p");
const p_input = document.getElementById("p_input");
const p1_confirm = document.getElementById("p1_confirm");
const p2_confirm = document.getElementById("p2_confirm");
const p_confirm = document.getElementById("p_confirm");
// output
const hit = document.getElementById("hit");
const playAgain = document.getElementById('playAgain');
const tooLow = document.getElementById("tooLow");
const low_tryAgain = document.getElementById("low_tryAgain");
const tooHigh = document.getElementById("tooHigh");
const high_tryAgain = document.getElementById("high_tryAgain");
const hit_tries_display = document.getElementById("hit_tries_display");
const low_tries_display = document.getElementById("low_tries_display");
const high_tries_display = document.getElementById("high_tries_display");

let min;
let max;
let mode;
let p1_inputValue;
let p2_inputValue;
let p_inputValue;
let randomNumber;
let tries = 0;

// start / restart
start.onclick = function() {
    if (setRange.style.display === 'none' || setRange.style.display === '') {
        setRange.style.display = 'block';
        next.style.display = 'block';
        back.style.display = 'none';
        setMode.style.display = 'none';
        input.style.display = 'none';
        output.style.display = 'none';
        start.textContent = 'Restart';
        min = NaN;
        max = NaN;
        for (const element of showRange) {
            element.textContent = `Range: undefined`;
        }
        mode = 'undefined';
        pvp.style.backgroundColor = 'buttonface';
        pve.style.backgroundColor = 'buttonface';
        tries = 0;
    } else {
        min = NaN;
        max = NaN;
        for (const element of showRange) {
            element.textContent = `Range: undefined`;
        }
    }
}

// range
ten.onclick = function() {
    min = 0;
    max = 10;
    for (const element of showRange) {
        element.textContent = `Range: ${min} - ${max}`;
    }
}

hundred.onclick = function() {
    min = 0;
    max = 100;
    for (const element of showRange) {
        element.textContent = `Range: ${min} - ${max}`;
    }
}

thousand.onclick = function() {
    min = 0;
    max = 1000;
    for (const element of showRange) {
        element.textContent = `Range: ${min} - ${max}`;
    }
}

rangeMin.oninput = defaultUpdateResult; // other options
rangeMax.oninput = defaultUpdateResult; // ""

function defaultUpdateResult() {
    const valueMin = rangeMin.valueAsNumber;
    const valueMax = rangeMax.valueAsNumber;
    // check if value is valid
    if (valueMin !== valueMax) {
        if (valueMin < valueMax) {
            if (!isNaN(valueMin) && !isNaN(valueMax)) {
                min = valueMin;
                max = valueMax;
                for (const element of showRange) {
                    element.textContent = `Range: ${min} - ${max}`;
                }
            } else if (!isNaN(valueMin) && isNaN(valueMax)) {
                min = valueMin;
                max = NaN;
                for (const element of showRange) {
                    element.textContent = `Range: ${min} - undefined`;
                }
            } else if (isNaN(valueMin) && !isNaN(valueMax)) {
                min = NaN;
                max = valueMax;
                for (const element of showRange) {
                    element.textContent = `Range: undefined - ${max}`;
                }
            } else {
                min = NaN;
                max = NaN;
                for (const element of showRange) {
                    element.textContent = `Range: undefined`;
                }
            }
        } else {
            console.log('Min-value must be lower than Max-value');
        }
    } else {
        console.log('Min-value and Max-value cannot be the same');
    }
}

// mode pvp
pvp.onclick = function() {
    if (pvp.style.backgroundColor === 'buttonface') {
        mode = 'pvp';
        pvp.style.backgroundColor = 'darkgrey';
        pve.style.backgroundColor = 'buttonface';
    } else {
        mode = 'undefined';
        pvp.style.backgroundColor = 'buttonface';
    }
}

// mode pve
function getRandomNumber(min, max) { // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
pve.onclick = function() {
    if (pve.style.backgroundColor === 'buttonface') {
        mode = 'pve';
        pve.style.backgroundColor = 'darkgrey';
        pvp.style.backgroundColor = 'buttonface';
    } else {
        mode = 'undefined';
        pve.style.backgroundColor = 'buttonface';
    }
}

// input pvp
p1_confirm.onclick = function() {
    p1_inputValue = p1_input.valueAsNumber;
    if (p1_inputValue >= min) {
        if (p1_inputValue <= max) {
            pvp_p1.style.display = 'none';
            pvp_p2.style.display = 'block';
            back.style.display = 'none';
        } else {
            console.log('P1 input value is too high');
        }
    } else {
        console.log('P1 input value is too low');
    }
}

p2_confirm.onclick = function() {
    p2_inputValue = p2_input.valueAsNumber;
    if (p2_inputValue >= min) {
        if (p2_inputValue <= max) {
            pvp_p2.style.display = 'none';
            output.style.display = 'block';
            if (p1_inputValue === p2_inputValue) {
                start.style.display = 'none';
                hit.style.display = 'block';
                tooLow.style.display = 'none';
                tooHigh.style.display = 'none';
                tries++;
                hit_tries_display.textContent = `Number of tries: ${tries}`;
                hit_tries_display.style.display = 'block';
            } else if (p1_inputValue > p2_inputValue) {
                hit.style.display = 'none';
                tooLow.style.display = 'block';
                tooHigh.style.display = 'none';
                tries++;
                low_tries_display.textContent = `Number of tries: ${tries}`;
                low_tries_display.style.display = 'block';
                low_tryAgain.style.display = 'block';
            } else { // p1_inputValue < p2_inputValue 
                hit.style.display = 'none';
                tooLow.style.display = 'none';
                tooHigh.style.display = 'block';
                tries++;
                high_tries_display.textContent = `Number of tries: ${tries}`;
                high_tries_display.style.display = 'block';
                high_tryAgain.style.display = 'block';
            }
        } else {
            console.log('P2 input value is too high');
            
        }
    } else {
        console.log('P2 input value is too low');
    }
}

low_tryAgain.onclick = function() {
    output.style.display = 'none';
    tooLow.style.display = 'none';
    low_tryAgain.style.display = 'none';
    low_tries_display.style.display = 'none';
    if (mode === 'pvp') {
        pvp_p2.style.display = 'block';
    }
    if (mode === 'pve') {
        pve_p.style.display = 'block';
    }
    
}

high_tryAgain.onclick = function() {
    output.style.display = 'none';
    tooHigh.style.display = 'none';
    high_tryAgain.style.display = 'none';
    high_tries_display.style.display = 'none';
    if (mode === 'pvp') {
        pvp_p2.style.display = 'block';
    }
    if (mode === 'pve') {
        pve_p.style.display = 'block';
    }
}

// input pve
p_confirm.onclick = function() {
    p_inputValue = p_input.valueAsNumber;
    if (p_inputValue >= min) {
        if (p_inputValue <= max) {
            pve_p.style.display = 'none';
            back.style.display = 'none';
            output.style.display = 'block';
            if (p_inputValue === randomNumber) {
                start.style.display = 'none';
                hit.style.display = 'block';
                tooLow.style.display = 'none';
                tooHigh.style.display = 'none';
                tries++;
                hit_tries_display.textContent = `Number of tries: ${tries}`;
                hit_tries_display.style.display = 'block';
            } else if (p_inputValue < randomNumber) {
                hit.style.display = 'none';
                tooLow.style.display = 'block';
                tooHigh.style.display = 'none';
                tries++;
                low_tries_display.textContent = `Number of tries: ${tries}`;
                low_tries_display.style.display = 'block';
                low_tryAgain.style.display = 'block';
            } else { // p1_inputValue < p2_inputValue 
                hit.style.display = 'none';
                tooLow.style.display = 'none';
                tooHigh.style.display = 'block';
                tries++;
                high_tries_display.textContent = `Number of tries: ${tries}`;
                high_tries_display.style.display = 'block';
                high_tryAgain.style.display = 'block';
            }
        } else {
            console.log('Player input value is too high');
        }
    } else {
        console.log('Player input value is too low');
    }
}

playAgain.onclick = function() {
    output.style.display = 'none';
    hit.style.display = 'none';
    playAgain.style.display = 'none';
    start.style.display = 'block';
    setRange.style.display = 'block';
    next.style.display = 'block';
    setMode.style.display = 'none';
    input.style.display = 'none';
    min = NaN;
    max = NaN;
    for (const element of showRange) {
        element.textContent = `Range: undefined`;
    }
    mode = 'undefined';
    pvp.style.backgroundColor = 'buttonface';
    pve.style.backgroundColor = 'buttonface';
    tries = 0;
}

// next
next.onclick = function() {
    if (setRange.style.display === 'block') {
        if (!isNaN(min)) {
            if (!isNaN(max)) {
                if (min < max) {
                    randomNumber = getRandomNumber(min, max);
                    console.log(randomNumber);
                    setRange.style.display = 'none';
                    setMode.style.display = 'block';
                    back.style.display = 'block';
                } else {
                    console.log('Min is higher than Max');
                }
            } else {
                console.log('Max is undefined');
            }
        } else {
            console.log('Min is undefined');
        }
    } else if (setMode.style.display === 'block') {
        if (mode !== 'undefined' && mode !== '') {
            setMode.style.display = 'none';
            if (mode === 'pvp') {
                input.style.display = 'block';
                pvp_p1.style.display = 'block';
                pvp_p2.style.display = 'none';
                pve_p.style.display = 'none';
                next.style.display = 'none';
                p1_input.placeholder = `Range: ${min} - ${max}`;
                p1_input.min = min;
                p1_input.max = max;
                p2_input.placeholder = `Range: ${min} - ${max}`;
                p2_input.min = min;
                p2_input.max = max;
            }
            if (mode === 'pve') { // pve
                input.style.display = 'block';
                pvp_p1.style.display = 'none';
                pvp_p2.style.display = 'none';
                pve_p.style.display = 'block';
                next.style.display = 'none';
                p_input.min = min;
                p_input.max = max;
                p_input.placeholder = `Range: ${min} - ${max}`;
            }
        } else {
            console.log('Mode is undefined');
        }
    }
}

// back
back.onclick = function() {
    if (setMode.style.display === 'block') {
        setMode.style.display = 'none';
        setRange.style.display = 'block';
        back.style.display = 'none';
    } else if (input.style.display === 'block') {
        input.style.display = 'none';
        setMode.style.display = 'block';
        next.style.display = 'block';
    }
}