var postTime, oldTime, data;
Notification.requestPermission();
chrome.storage.local.get(['postTime'], function(result) {
    console.log('Message ID: ' + result.postTime);
    oldTime = result.postTime
});
var chime = new Audio("https://techpro-services.github.io/techproconnect/Media/mixkit-software-interface-start-2574.wav")
async function dn(){
setTimeout(dn, 3000);
try{
    data = String(await fetch("https://learning.k12.com/d2l/MiniBar/1518223/ActivityFeed/GetAlertsDaylight?Category=0&_d2l_prc%24headingLevel=2&_d2l_prc%24scope=&_d2l_prc%24hasActiveForm=false&isXhr=true&requestId=4",{credentials: "include"})
    .then(response => response.text())).split("title=\\\"Discussion Reply, ");
postTime = data[1].split("#post")[1].split("\\\"")[0];
if(postTime != oldTime){
    oldTime = postTime;
    chrome.storage.local.set({postTime: postTime}, function() {
        console.log('Message ID: ' + value);
    });
    message = data[1].split("\\\"")[0].split(", ")[1].replace(/&quot;/g, "\"");
    title = "New Reply in \"" + data[1].split("&quot;")[1] + "\"";
    delete data;
    new Notification(title, {body: message, icon: "https://techpro-services.github.io/Images/Ping.png"});
    chime.pause();
    chime.currentTime = 0;
    chime.play();
    delete message, title, postTime;
}
}
catch{
}
}
dn();