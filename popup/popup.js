// Attach buttons
var nrlightmode = document.getElementById("nr-darkmode");
var k12lightmode = document.getElementById("k12-darkmode");
var dnd = document.getElementById("notification");
var normal = document.getElementById("enhancement");

// Apply current settings to buttons
chrome.storage.local.get(['nrlightmode','k12lightmode','dnd','normal'], function(result) {
    nrlightmode.checked = !result.nrlightmode;
    k12lightmode.checked = !result.k12lightmode;
    dnd.checked = !result.dnd;
    normal.checked = !result.normal;
});

// Change settings when buttons are clicked
nrlightmode.addEventListener('click',function(){
    chrome.storage.local.set({nrlightmode: !nrlightmode.checked})
})
k12lightmode.addEventListener('click',function(){
    chrome.storage.local.set({k12lightmode: !k12lightmode.checked})
})
dnd.addEventListener('click',function(){
    chrome.storage.local.set({dnd: !dnd.checked})
})
normal.addEventListener('click',function(){
    chrome.storage.local.set({normal: !normal.checked})
})