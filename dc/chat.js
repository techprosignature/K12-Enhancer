function chat() {
    // Get room
    
    // Get notification permissions
    Notification.requestPermission();

    // Initialize variables
    var lastMessageUser = "";

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
    function handleMessage() {
        let message = textinput.value;
        if (message != "") {
            textinput.value = "";
            let xhr = new XMLHttpRequest();
            xhr.open("POST",`https://learning.k12.com/d2l/le/1518223/discussions/posts/${replyPost}/FinishReply`);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.withCredentials = true;
            let formData = `postData%24subject=${discussion}&postData%24message%24id=newPostBottom_${replyPost}%24postData%24message&postData%24message%24htmlOrgUnitId=1518223&postData%24message%24html=%3Cp%3E${message}%3C%2Fp%3E&postData%24subscribeToThread=1&postData%24attachments%24files%24ActionType=None&postData%24attachments%24files%24PluginKey=&postData%24attachments%24files%24Id=&postData%24attachments%24files%24FileSize=&isXhr=true&requestId=7&d2l_referrer=${authentication}`;
            xhr.onreadystatechange = () => {8
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    console.log(xhr.responseText);
                }
            };
            xhr.send(formData);
            socket.emit("message", message);
            let HTMLmessage = document.createElement('div');
            HTMLmessage.classList = "message from-me";
            if (lastMessageUser != user) {
                HTMLmessage.innerHTML = `<div class="message-sender">${user}</div>${message}`;
            } else {
                HTMLmessage.innerText = message;
                HTMLmessage.classList += " messageBelow";
            }
            chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
            lastMessageUser = user;
        } else {
            alert("Please enter a message first.");
        }
    }

    // Handle messages that user receives
    socket.on('message', function(data) {
        let {username, message} = data;
        console.log(`Received ${message} from ${username}`);
        let HTMLmessage = document.createElement('div');
        HTMLmessage.classList = "message from-other";
        if (lastMessageUser != username) {
            HTMLmessage.innerHTML = `<div class="message-sender">${username}</div>${message}`;
        } else {
            HTMLmessage.innerHTML = message;
            HTMLmessage.classList += " messageBelow";
        }
        chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
        if(document.visibilityState !== 'visible'){
        title.text = "(1) TechPro Connect";
        let n = new Notification(username + ' · TechPro Connect', {icon: '/Images/logo_new.png', body: message});
        document.addEventListener('visibilitychange', function() {
            if(document.visibilityState === 'visible'){
                n.close();
                title.text = "TechPro Connect";
            }
        });
        }
        chime.pause();
        chime.currentTime = 0;
        chime.play();
        lastMessageUser = username;
    });

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
    var user = document.querySelector('nav').children[0].children[0].children[1].children[4].children[0].children[0].children[0].children[1].innerText.split(' ')[0];
    var discussion = document.querySelector("h2[class*='d2l-page-title d2l-heading bsi-set-solid vui-heading-2'").innerText;
    var replyPost = document.querySelector("li[class*='d2l-datalist-item d2l-datalist-simpleitem d2l-datalist-lastchild']").id.split("_")[1];
    // Get DOM objects
    var chat = document.getElementById("chat");
    var textinput = document.getElementById("textinput");
    var textsubmit = document.getElementById("textsubmit");
    var chime = new Audio("https://techpro-services.github.io/techproconnect/Media/mixkit-software-interface-start-2574.wav");
    var title = document.querySelector("title");
    let HTMLmessage = document.createElement('div');
    HTMLmessage.classList = "system-message";
    HTMLmessage.innerText = `${user} joined ${discussion}`;
    lastMessageUser = 'system';
    var room = "TEST";
    // Respond to user submitting message
    try{
    textsubmit.addEventListener('click', handleMessage);
    textinput.addEventListener('keydown', function(e) {
        switch (e.key) {
        case "Enter":
            handleMessage();
            break;
        default:
            break;
        }
    });
    chat.insertAdjacentElement('beforeEnd', HTMLmessage).scrollIntoView();
    }

    // Handle crashes in case of inability to get DOM
    catch{
        console.error("Unable to attach to controls");
    }
}