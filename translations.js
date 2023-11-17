// Mulitlingual features

// Function to fetch translations from JSON file
async function getTranslations(lang) {
    const response = await fetch(`translations/${lang}.json`);
    const data = await response.json();
    return data;
}

// Function to set language
async function setLanguage(lang) {
    const translation = await getTranslations(lang);
    document.getElementById('start').textContent = translation.start;
    document.getElementById('header').textContent = translation.header;
    document.getElementById('suggestionsText').textContent = translation.suggestionsText;
    document.getElementById('custom').textContent = translation.custom;
    document.getElementById('back').textContent = translation.back;
    document.getElementById('next').textContent = translation.next;
    document.getElementById('setModeText').textContent = translation.setModeText;
    document.getElementById('player1').textContent = translation.player1;
    document.getElementById('inputNum').textContent = translation.inputNum;
    document.getElementById('player2').textContent = translation.player2;
    document.getElementById('guess').textContent = translation.guess;
    document.getElementById('player').textContent = translation.player;
    document.getElementById('youWon').textContent = translation.youWon;
    document.getElementById('tooLow').textContent = translation.tooLow;
    document.getElementById('tooHigh').textContent = translation.tooHigh;
    document.getElementById('playAgain').textContent = translation.playAgain;
}

// Set language based on user preference or default to English
const userLanguage = navigator.language.split('-')[0];
setLanguage(userLanguage);

// test
console.log(userLanguage);

/*
Problems:
    - When showRange is updated with a new value, translations.js must be notified and adjust the language + value
        -> Same for start update to restart
*/