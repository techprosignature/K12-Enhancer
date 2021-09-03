// Create xhook script element
console.log("starting...");
var s = document.createElement('script');
s.src = "https://jpillora.com/xhook/dist/xhook.js";

// inject xhook controller once xhook loads
s.onload = function() {
    this.remove();
    var actualCode = '(' + function() {
    // code to run
    console.log(xhook);
    xhook.after(function(request, response) {
    if(request.url.search("https://smart.newrow.com/backend/user/getUserInformation") != -1){
        console.warn(request.url)
        console.warn("Caught request:" + response.text);
    }
    });
// inject control script
} + ')();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.remove();
    
};

// inject xhook
(document.head || document.documentElement).appendChild(s);