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
    document.getElementById('start').textContent = translation.start
}

// Set language based on user preference or default to English
const userLanguage = navigator.language.split('-')[0];
setLanguage(userLanguage);