// popup.js
const popup = document.getElementById('scrapeButton')
console.log(popup)
popup.addEventListener('click', () => {
    // Send a message to the content script
    console.log('click')
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrapeTable' });
    });
});
