// Attach buttons
var nrlightmode = document.getElementById("nr-darkmode");
var k12lightmode = document.getElementById("k12-darkmode");
var normal = document.getElementById("enhancement");
var nrtextmode = document.getElementById("nr-textmode");
var nrsoundmode = document.getElementById("nr-soundmode");
var nrsound = document.getElementById("nr-sound");
var ccs = document.getElementById("ccs");

// Apply current settings to buttons
chrome.storage.local.get(['nrlightmode','k12lightmode','dnd','normal','nrtextmode','nrsoundmode','nrsound', 'ccs'], function(result) {
    nrlightmode.checked = !result.nrlightmode;
    k12lightmode.checked = !result.k12lightmode;
    normal.checked = !result.normal;
    nrtextmode.checked = !result.nrtextmode;
    nrsoundmode.checked = !result.nrsoundmode;
    ccs.checked = result.ccs;
});

// Change settings when buttons are clicked
nrlightmode.addEventListener('click',function(){
    chrome.storage.local.set({nrlightmode: !nrlightmode.checked})
})
k12lightmode.addEventListener('click',function(){
    chrome.storage.local.set({k12lightmode: !k12lightmode.checked})
})
normal.addEventListener('click',function(){
    chrome.storage.local.set({normal: !normal.checked})
})
nrtextmode.addEventListener('click',function(){
    chrome.storage.local.set({nrtextmode: !nrtextmode.checked});
    chrome.declarativeNetRequest.getEnabledRulesets((details) => {
        if(details.length == 0){
            chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds: ["newrow_ruleset"]});
        }
        else{
            chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds: ["newrow_ruleset"]});
        }
    })
})
ccs.addEventListener('click', function(){
    if(ccs.checked){
        alert("This will share your name and scheduled class connects. Turn off if you do not want to share.");
    }
    chrome.storage.local.set({ccs: ccs.checked});
})
nrsoundmode.addEventListener('click',function(){
    chrome.storage.local.set({nrsoundmode: !nrsoundmode.checked})
})
nrsound.addEventListener("change",function(){
    let reader = new FileReader();
    let ping = new Audio();
    if(this.files && this.files[0]){
        reader.onload = (e) => {
            ping.src = e.target.result;
            ping.play();
            chrome.storage.local.set({nrsound: e.target.result});
        }
        reader.readAsDataURL(this.files[0]);
    }
})