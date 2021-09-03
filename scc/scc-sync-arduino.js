console.log("Initializing...");

// Initialize variables
var daylight_k12 = daylight_k12 || {'widgets': {}};
var dataLayer = dataLayer || [];
var name, externalData, redirect;
var externalSessions = "";

// Get external CC Data
var req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    externalData = JSON.parse(req.responseText);
    console.log(externalData);
  }
};

//Get current user
var USER = setInterval(function(){
    try{
    name = document.getElementById("user-name").innerText;
    console.log("Found user: " + name);
    chrome.runtime.sendMessage({messageType: 'GET', user: name}, async function(response) {
        externalData = await response.data;
    });
    if(typeof externalData[name] == "undefined"){
        externalData[name] = {redirect: "Phineas", data: "<h2>blank</h2>"}
    }
    if(name == "Phineas"){
        for(let i in externalData){
            if(i != "Phineas"){
                console.log(externalData[i]);
                externalSessions += externalData[i].data;
            }
        }
    }
    else{
    redirect = externalData[name].redirect;
    externalSessions = externalData[redirect].data;
    console.log("External: " + redirect);
    }
    clearInterval(USER);
    }
    catch(e){
        console.warn("User may not be signed in: " + e);
    }
}, 5000);

var DETECTOR = setInterval(function(){
    
    // Get CC Data
    //try{
    
    // Get HTML
    var table = document.getElementsByTagName("tbody")[1];
    var sessions = table.getElementsByTagName("a");
    var SessionText = table.innerHTML;
    console.log(table.innerText);
    if(table.innerText.length > 10){
    console.log(sessions[0].getAttribute("data-url"));
    externalData[name].data = SessionText;
    var req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            // insert external CCS
            console.log("Data sent");
            table.insertAdjacentHTML('beforeEnd', "<h1>Class Connect Sync</h1>" + externalSessions);
            
            // make CCS still load
            for(let i = 0; i < sessions.length; i++){
                let session = sessions[i];
                let sessionText = session.getAttribute("data-url");
                console.log(sessionText);
                session.onclick = function () {
                    console.log("Handling CC openSession attempt...");
                    daylight_k12.widgets.openSession(sessionText.split("/")[5], sessionText.split("/")[7]);
                };
            }
            console.log("TechPro Services Code Setup Complete");
            clearInterval(DETECTOR);
        }
    };
    req.open("PUT", "http://136.36.101.232:8080/", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$3fpMRShgPR6OnQ1P8TINMuVyKp3TbFbArn64AWjf5x.JYBc1NCPNK");
    req.send(JSON.stringify(externalData));
    }
    /*}
    catch(e){
        console.warn("User has not navigated to My Schedule");
    }*/
}, 5000);