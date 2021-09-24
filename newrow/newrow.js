// Change NewRow icon
var icons = document.head.querySelectorAll("link[rel*='icon']");
for(var i = 0; i < icons.length; i++){
    icons[i].href = "https://techpro-services.github.io/Images/newrow_fullsize.png";
}
var CLASS = setInterval(function(){
try{
targetClass = document.querySelector("div[class*='message_sent-message']").classList[3];
clearInterval(CLASS);
const style = document.createElement('style');
style.innerHTML = `
    .${targetClass} {
        background-image: linear-gradient(90deg, #00ca63, #25ff88);
        transition: 0.2s;
    }
    .${targetClass}:hover{
        filter: brightness(1.5);
    }
`;
document.head.appendChild(style);
}
catch{}
});
// Change document style

var DETECTOR = setInterval(function(){
    try{
    console.log(document.getElementsByTagName("iframe")[0].src);
    }
    catch(e){
        console.warn("Breakout has not started");
        clearInterval(DETECTOR);
    }
},5000);