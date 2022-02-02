// function to convert markup
function convertMarkup(string){
    console.log(string);
    let urlFix = "";
    if(string.search("http") != -1){
        let split = string.split(" ")
        for(let i = 0; i < split.length; i++){
            if(split[i].search("http") != -1){
                urlFix += " " + split[i].replaceAll("_","_||")
                                        .replaceAll("*","*||");
            }
            else{
                urlFix += " " + split[i];
            }
        }
        string = urlFix;
    }
    string = string.replaceAll("message_message-content-link__","message_||message-content-link_||_||");
    let temp = 0;
    temp = string.match(/\*\*\*/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace("***","<i><b>").replace("***","</b></i>");
    }
    string = string.replaceAll("***","*||*||*||");
    temp = string.match(/\*\*(?!\|\|)/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace(/\*\*(?!\|\|)/,"<b>").replace(/\*\*(?!\|\|)/,"</b>");
    }
    string = string.replaceAll("**","*||*||");
    temp = string.match(/\*(?!\|\|)/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace("*","<i>").replace("*","</i>");
    }
    temp = string.match(/___/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace("___","<i><u>").replace("___","</u></i>");
    }
    string = string.replaceAll("___","_||_||_||");
    temp = string.match(/__(?!\|\|)/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace(/__(?!\|\|)/,"<u>").replace(/__(?!\|\|)/,"</u>");
    }
    string = string.replaceAll("__","_||_||")
    temp = string.match(/_(?!\|\|)/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace(/_(?!\|\|)/,"<i>").replace(/_(?!\|\|)/,"</i>");
    }
    temp = string.match(/~~/g) || [];
    for(let i = 0; i < Math.floor(temp.length / 2); i++){
        string = string.replace("~~","<s>").replace("~~","</s>");
    }
    string = string.replaceAll("&lt;br&gt;","<br>")
            .replaceAll("&lt;i&gt;","<i>")
            .replaceAll("&lt;/i&gt;","</i>")
            .replaceAll("&lt;b&gt;","<b>")
            .replaceAll("&lt;/b&gt;","</b>")
            .replaceAll("&lt;u&gt;","<u>")
            .replaceAll("&lt;/u&gt;","</u>")
            .replaceAll("&lt;s&gt;","<s>")
            .replaceAll("&lt;/s&gt;","</s>")
            .replaceAll("_||","_")
            .replaceAll("*||","*")
    return string;
}

// Add support for new HTML injected by K12 Enhancer
{
const style = document.createElement('style');
style.innerHTML = `
    [data-placeholder]:empty:before{
        content: attr(data-placeholder);
        font-style: italic;
        color: light-gret;
        cursor: text;
    }
    #emoji_button{
        position: absolute;
        right: 3px;
        bottom: 20px;
        border: none;
        background: none;
        cursor: pointer;
    }
    #emoji_emoji, #popup button{
        transition: 0.2s;
    }
    #emoji_emoji:hover, #popup button:hover{
        filter: contrast(2);
    }
    #popup{
        visibility: hidden;
        position: absolute;
        text-align: center;
        background: black;
        z-index: 1;
        left: 50%;
        margin-left: -120px;
        bottom: 125%;
        border-radius: 5px;
        box-shadow: 3px 1px 5px 0px;
    }
    #popup.show{
        visibility: visible;
    }
    #popup button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
`;
document.head.appendChild(style);
}

// Change NewRow icon
chrome.storage.local.get(["normal"],function(result){
if(!result.normal){
    var icons = document.head.querySelectorAll("link[rel*='icon']");
    for(var i = 0; i < icons.length; i++){
        icons[i].href = "https://techpro-services.github.io/Images/newrow_fullsize.png";
    }
    var CLASS = setInterval(function(){
    try{
    clearInterval(CLASS);
    const style = document.createElement('style');
    style.innerHTML = `
        div[class*='message_sent-message']{
            background-image: linear-gradient(90deg, #00ca63, #25ff88);
            transition: 0.2s;
        }
        .custom-reply-message{
            background-color: #00000000 !important;
        }
        div[class*='message_sent-message']:hover{
            filter: brightness(1.5);
        }
    `;
    document.head.appendChild(style);
    }
    catch(e){}
    });
}
})

chrome.storage.local.get(["nrtextmode"],function(result){
    if(!result.nrtextmode){
        console.log("Text formatting is active");
        // Handle HTML changes
        let chatObserver = new MutationObserver(function(mutations){
            mutations.forEach((mutation) => {
                if(!mutation.addedNodes) return;
                if(mutation.target.className.search("messages-list_messages__") != -1){
                    console.log("CHAT EVENT");
                    let changedMessages = document.querySelectorAll("div[class*=message_message]:last-child [class*=message_message-content]");
                    for(let i  = 0; i < changedMessages.length; i++){
                        try{
                            let changedMessage = changedMessages[i];
                            changedMessage.innerHTML = convertMarkup(changedMessage.innerHTML);
                        }
                        catch(e){
                            console.log("Error ",e);
                        }
                    }
                }
            });
        });
        chatContainer = document.getElementById("chat-module-container");
        chatObserver.observe(document.body, {childList: true, subtree: true, attributes: false, characterData: false});
    }
})
// Create a dark mode
chrome.storage.local.get(["nrlightmode"],function(result){
if(!result.nrlightmode){
const style = document.createElement('style');
style.innerHTML = `
html,body, .participants-content, div[class*=conversation-list_conversation-list-container], div[class*=conversation_conversationListContainer], .content-size-calculator, #boards-container{
    color: white !important;
    background-color: #201f1f !important;
}
.banners-bg-dimmer{
    display: none !important;
    background: url("https://techpro-services.github.io/Images/green_background_blurred.jpg") center center no-repeat !important;
    background-size: cover;
}
#participantsList .participants-content .participant .participant-user-name, .custom-user-name, .custom-message-time, p[class*=message_message-content]{
    color: white !important;
}
.participant-settings .participant-hand-raise-icon, #participantsList .participants-content .participant .participant-moderator-mark{
    fill: white !important;
}
.participant:hover{
    background: #2d2c2c !important;
}
#participants-control-bar, div[class*=search-bar_search-container], div[class*=notifications-bar_notifications-bar], div[class*=input_chat-action-components]{
    background: #484644 !important;
    border-bottom: #484644 !important;
}
.search-bar, .search-bar-text{
    background-color: grey !important;
}
textarea[class*=input_input], div[class*=input_input], #active-image-container, #whiteboard-container, #annotations-tooltip-container, #whiteboard-tools-container, .tool-button-container, .tool-color-container{
    background-color: grey !important;
    color: white !important;
    caret-color: white !important;
}
div[class*=message_recive-message], div[class*=input_reply-message]{
    background-color: grey;
}
textarea[class*=input_input]::placeholder{
    color: white !important;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #fff0;
    transition: 0.2;
}
::-webkit-scrollbar-thumb {
    background: #25ff88;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: #00b050;
}
.allNotes, .tool-list-item, .sortable-item-title {
    color: black !important;
}
`;
document.head.appendChild(style);
}
})