function chat_manager() {
    // Get room
    
    // Get notification permissions
    Notification.requestPermission();

    // Initialize variables
    var lastMessageUser = "";
    var numberOfMessages = 1;
    var postedMessages = 1;

    // Initialize socket.io server connection
    const socket = io(document.location.hostname + ":8000", {
        transports: ['websocket', 'polling']
    });
    socket.on("connect", function() {
        console.log("Socket Connected");
        socket.emit("join", {
            username: user,
            ua: navigator.userAgent,
            room: room
        });
    });
    socket.on("log", function(data) {
        console.log("New user: " + data.ua);
    });

    // Handle messages that user sends
    function enterMessage() {
        let message = textinput.value;
        if (message != "") {
            textinput.value = "";
            let xhr = new XMLHttpRequest();
            xhr.open("POST",`https://learning.k12.com/d2l/le/${organization}/discussions/posts/${replyPost}/FinishReply`);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.withCredentials = true;
            let formData = `postData%24subject=${discussion}&postData%24message%24id=newPostBottom_${replyPost}%24postData%24message&postData%24message%24htmlOrgUnitId=${organization}&postData%24message%24html=%3Cp%3E${message}%3C%2Fp%3E&postData%24subscribeToThread=1&postData%24attachments%24files%24ActionType=None&postData%24attachments%24files%24PluginKey=&postData%24attachments%24files%24Id=&postData%24attachments%24files%24FileSize=&isXhr=true&requestId=7&d2l_referrer=${authentication}`;
            xhr.onreadystatechange = () => {8
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    console.log(xhr.responseText);
                }
            };
            xhr.send(formData);
        } else {
            alert("Please enter a message first.");
        }
    }

    var runtime = 2;
    function checkForNewMessages(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",`https://learning.k12.com/d2l/le/${organization}/discussions/threads/${thread}/PostList?inContentTool=False&pageSize=1&pageNumber=${postedMessages}&checkPageNumber=true&&isNoneSelected=true&searchText=&markedUnread=false&_d2l_prc%24headingLevel=2&_d2l_prc%24scope=&_d2l_prc%24hasActiveForm=false&isXhr=true&requestId=12`);
        xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                checkForNewMessages();
                data = xhr.responseText;
                numberOfMessages = data.split("pagecount\\\">")[1].split("<")[0].replace(/,/g,"");
                messageHTML = data.split("d2l-htmlblock-untrusted\\\"><template>")[1].split("</template>")[0].replace(/\\\"/g,"\"").replace(/\\n/g,"");
                let tempSplitLength = data.split("</h")[0].split("\\\">").length;
                let username = data.split("</h")[0].split("\\\">")[tempSplitLength - 1];
                let userProfile = "https://learning.k12.com/" + data.split("ImageUrl\\\":\\\"")[1].split("\\\"")[0];
                if(replyPost != data.split("data-postId=\\\"")[1].split("\\\"")[0]){
                    if(runtime == 0){
                        postedMessages++;
                        chrome.storage.local.set({postTime: replyPost}, function() {
                        });
                        replyPost = data.split("data-postId=\\\"")[1].split("\\\"")[0];
                        receiveMessage(username, messageHTML, userProfile);
                    }
                    else if(runtime == 2){
                        console.log(numberOfMessages);
                        runtime = 0;
                        if(numberOfMessages > 15){
                            postedMessages = numberOfMessages - 15;
                        }
                        else{
                            postedMessages = 1;
                        }
                    }
                }
            }
        };
        xhr.send();
    }

    // Handle messages that user receives
    function receiveMessage(username, message, userProfile){
        console.log(`Received ${message} from ${username}`);
        let HTMLmessage = document.createElement('div');
        if(username == user){
            HTMLmessage.classList = "message from-me";
        }
        else{
            HTMLmessage.classList = "message from-other";
            if(document.visibilityState !== 'visible'){
                title.text = "(1) K12 Connect";
                messageText = message.split("<p>")[1].split("</p>")[0];
                let n = new Notification(username + ' · K12 Connect', {icon: userProfile, body: messageText, silent: true});
                document.addEventListener('visibilitychange', function() {
                    if(document.visibilityState === 'visible'){
                        n.close();
                        title.text = "K12 Connect";
                    }
                });
            }
            chime.pause();
            chime.currentTime = 0;
            chime.play();
        }
        if (lastMessageUser != username) {
            HTMLmessage.innerHTML = `<div class="message-sender">${username}</div>${message}`;
        } else {
            HTMLmessage.innerHTML = message;
            HTMLmessage.classList += " messageBelow";
        }
        chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
        lastMessageUser = username;
    }

    // Handle system messages
    socket.on('system-message', function(data) {
        console.log(`System message: ${data}`);
        let HTMLmessage = document.createElement('div');
        HTMLmessage.classList = "system-message";
        HTMLmessage.innerText = data;
        chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
        lastMessageUser = 'system';
    });
    // Get K12 data
    var organization = document.location.href.split("/")[5];
    var user = document.querySelector('nav').children[0].children[0].children[1].children[4].children[0].children[0].children[0].children[1].innerText;
    var thread = document.location.href.split("/")[8];
    var replyPost = document.querySelector("li[class*='d2l-datalist-item d2l-datalist-simpleitem d2l-datalist-lastchild']").id.split("_")[1];
    // Get DOM objects
    var chat = document.getElementById("chat");
    var textinput = document.getElementById("textinput");
    var textsubmit = document.getElementById("textsubmit");
    var chime = new Audio("https://techpro-services.github.io/techproconnect/Media/mixkit-software-interface-start-2574.wav");
    chime.volume = 0.6;
    var title = document.querySelector("title");
    var closeButton = document.getElementById("closechat");

    // Initialize
    title.text = "K12 Connect";
    let HTMLmessage = document.createElement('div');
    HTMLmessage.classList = "system-message";
    HTMLmessage.innerText = `${discussion}`;
    lastMessageUser = 'system';
    var room = "TEST";
    // Respond to user submitting message
    try{
    textsubmit.addEventListener('click', enterMessage);
    textinput.addEventListener('keydown', function(e) {
        switch (e.key) {
        case "Enter":
            enterMessage();
            break;
        default:
            break;
        }
    });
    closeButton.addEventListener('click',function(){
        CHAT.remove();
        document.querySelector("div[role*='main']").classList.remove("blocked");
        button.classList.remove("blocked");
    });
    chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
    }

    // Handle crashes in case of inability to get DOM
    catch{
        console.error("Unable to attach to controls");
    }
    checkForNewMessages();
    var icons = document.head.querySelectorAll("link[rel*='icon']");
    for(var i = 0; i < icons.length; i++){
        icons[i].href = "https://techpro-services.github.io/Images/Ping.png";
    }
}