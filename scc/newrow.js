var icons = document.head.querySelectorAll("link[rel*='icon']");
for(var i = 0; i < icons.length; i++){
    icons[i].href = "https://techpro-services.github.io/Images/newrow_fullsize.png";
}
var DETECTOR = setInterval(function(){
    try{
    console.log(document.getElementsByTagName("iframe")[0].src);
    }
    catch(e){
        console.warn("Breakout has not started");
        clearInterval(DETECTOR);
    }
},5000);