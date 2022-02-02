// Attach buttons
var nrlightmode = document.getElementById("nr-darkmode");
var k12lightmode = document.getElementById("k12-darkmode");
var dnd = document.getElementById("notification");
var normal = document.getElementById("enhancement");
var nrtextmode = document.getElementById("nr-textmode")

// Apply current settings to buttons
chrome.storage.local.get(['nrlightmode','k12lightmode','dnd','normal','nrtextmode'], function(result) {
    nrlightmode.checked = !result.nrlightmode;
    k12lightmode.checked = !result.k12lightmode;
    dnd.checked = !result.dnd;
    normal.checked = !result.normal;
    nrtextmode.checked = !result.nrtextmode;
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
nrtextmode.addEventListener('click',function(){
    chrome.declarativeNetRequest.getEnabledRulesets((details) => {
        if(details.length == 0){
            chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: ["newrow_ruleset"]});
        }
        else{
            chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: ["newrow_ruleset"]});
        }
    })
    chrome.storage.local.set({nrtextmode: !nrtextmode.checked});
})