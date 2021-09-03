chrome.runtime.onInstalled.addListener(() => {
    var name, externalData, redirect;
    var externalSessions = "";

// Get external CC Data
    fetch("http://136.36.101.232:8080/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Auth':'571'
        }
    })
        .then(response => response.json())
        .then(data => {externalData = data});
    console.log("Extension initialized");
});

const getData = async (request, sender, sendResponse) => {
    console.log("Requesting...");
    var myData = await fetch("http://136.36.101.232:8080/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Auth':'571'
        }
    })
    .then(response => response.json());
    sendResponse({data: await myData});
    console.log(myData);
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    getData(request, sender, sendResponse)
    return true;
});
