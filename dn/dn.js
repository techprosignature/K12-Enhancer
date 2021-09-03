var postTime, oldTime, data;
Notification.requestPermission();
chrome.storage.local.get(['postTime'], function(result) {
    console.log('Message ID: ' + result.postTime);
    oldTime = result.postTime
});
async function main(){
setTimeout(main, 3000);
try{
    data = String(await fetch("https://learning.k12.com/d2l/MiniBar/1518223/ActivityFeed/GetAlertsDaylight?Category=0&_d2l_prc%24headingLevel=2&_d2l_prc%24scope=&_d2l_prc%24hasActiveForm=false&isXhr=true&requestId=4",{credentials: "include"})
    .then(response => response.text())).split("<div title=\\\"Discussion Reply, ");
postTime = data[1].split("data-date=\\\"")[1].split("\\\"")[0];
if(postTime != oldTime){
    oldTime = postTime;
    chrome.storage.local.set({postTime: postTime}, function() {
        console.log('Message ID: ' + value);
    });
    message = data[1].split("Discussion Reply, ")[1].split("\\\"")[0].split(",")[1].replace(/&quot;/g, "\"");
    title = data[1].split("</span>")[0].split("\\\">")[2];
    delete data;
    new Notification(title, {body: message, icon: "https://techpro-services.github.io/Images/Ping.png"});
    delete message, title, postTime;
}
}
catch{
}
}
main();