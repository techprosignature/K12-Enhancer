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
chrome.storage.local.get(["nrlightmode"],function(result){
if(!result.nrlightmode){
const style = document.createElement('style');
style.innerHTML = `
html,body, .participants-content, div[class*=conversation-list_conversation-list-container], div[class*=conversation_conversationListContainer], .content-size-calculator, #boards-container{
    color: white !important;
    background-color: #201f1f !important;
}
#participantsList .participants-content .participant .participant-user-name, .custom-user-name, .custom-message-time, p[class*=message_message-content]{
    color: white !important;
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
textarea[class*=input_input], #active-image-container, #whiteboard-container, #annotations-tooltip-container, #whiteboard-tools-container, .tool-button-container, .tool-color-container{
    background-color: grey;
    color: white;
}
div[class*=message_recive-message], div[class*=input_reply-message]{
    background-color: grey;
}
textarea[class*=input_input]::placeholder{
    color: white;
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
`;
document.head.appendChild(style);
}
})