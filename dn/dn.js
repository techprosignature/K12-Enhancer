var postTime, oldTime, data;
if(typeof(discussion) == 'undefined'){
    var discussion = "";
}
Notification.requestPermission();

var chime = new Audio("https://techpro-services.github.io/techproconnect/Media/mixkit-software-interface-start-2574.wav");
chime.volume = 0.6;
async function dn(){
setTimeout(dn, 3000);
data = String(await fetch("https://learning.k12.com/d2l/MiniBar/1518223/ActivityFeed/GetAlertsDaylight?Category=0&_d2l_prc%24headingLevel=2&_d2l_prc%24scope=&_d2l_prc%24hasActiveForm=false&isXhr=true&requestId=4",{credentials: "include"})
    .then(response => response.text())).split("title=\\\"Discussion Reply, ");
postTime = data[1].split("#post")[1].split("\\\"")[0];
chrome.storage.local.get(['postTime'], function(result) {
oldTime = result.postTime
if(postTime != oldTime){
    oldTime = postTime;
    chrome.storage.local.set({postTime: postTime}, function() {
        console.log('Message ID: ' + postTime);
    });
    message = data[1].split("\\\"")[0].split(", ")[1].replace(/&quot;/g, "\"");
    title = "New Reply in \"" + data[1].split("&quot;")[1] + "\"";
    delete data;
    if(data[1].split("&quot;")[1] !== discussion){
        let n = new Notification(title, {body: message, icon: "https://techpro-services.github.io/Images/Ping.png", silent: true});
        setTimeout(function(){
            n.close();
        }, 5000);
        chime.pause();
        chime.currentTime = 0;
        chime.play();
    }
    else{
        console.log(`Discussion: ${discussion}`);
    }
    delete message, title, postTime;
}
});
}

// Make sure Do Not Disturb is off
chrome.storage.local.get(["dnd"],function(result){
    if(!result.dnd){
        dn();
    }
})