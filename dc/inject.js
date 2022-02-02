// Create button to launch experience
var button = document.createElement("button");
button.id = "startChat";
button.innerText = "K12 Connect"
button.addEventListener('click', inject);
document.body.insertAdjacentElement("beforeEnd",button);
var discussion;

// Get authentication data
var authentication = localStorage.getItem("XSRF.Token");
console.log(authentication);

function inject(){
discussion = document.querySelector("h2[class*='d2l-page-title d2l-heading bsi-set-solid vui-heading-2'").innerText;
document.querySelector("div[role*='main']").classList.add("blocked");
var CHAT = document.createElement('div');
CHAT.id = "CHAT";
CHAT.innerHTML = 
`<div id="chat">
</div>
<button id="closechat"></button>
<div id="input">
        <input id="textinput" type="text" placeholder="Type a message" />
        <button id="textsubmit"></button>
</div>`;
document.body.insertAdjacentElement("afterBegin",CHAT);
button.classList.add("blocked");
CHAT.addEventListener('click', chat_manager());
}