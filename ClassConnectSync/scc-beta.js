chrome.storage.local.get(['ccs'], function (result) {
    if (result.ccs) {
        /* Initialize variables */
        var name, schoolname, externalData, redirect;
        var externalSessions = "";

        /* Get current user */
        var USER = setInterval(function () {
            try {
                name = document.getElementById("user-name").innerText;
                schoolname = document.querySelector(".school-title").innerText.replaceAll("\n", " ");
                clearInterval(USER);
            }
            catch (e) {
            }
        }, 5000);

        var DETECTOR = setInterval(async function () {

            /* Get CC Data */
            try {
                /* Get HTML */
                var table = document.getElementsByTagName("tbody")[1];
                var SessionText = table.innerHTML;
                if (table.innerText.length > 10) {
                    var options = {
                        method: 'POST',
                        headers: { "authtoken": "5qsvHHcpR2KMSSHLRJca56gquMkrgwnHBQmN3mW3" },
                        body: JSON.stringify({ user: name, school: schoolname, data: SessionText })
                    };
                    externalData = await fetch("https://ccs.techproservices.repl.co", options).then(res => res.json());
                    table.insertAdjacentHTML('beforeEnd', externalData.HTML);
                    var sessions = table.getElementsByTagName("a");
                    for (let i = 0; i < sessions.length; i++) {
                        let session = sessions[i];
                        let sessionText = session.getAttribute("data-url");
                        session.onclick = function (e) {
                            e.preventDefault();
                            openSession(sessionText.split("/")[5], sessionText.split("/")[7]);
                        };
                    }
                    clearInterval(DETECTOR);
                }
            }
            catch (e) {
            }
        }, 5000);

        /* If you have found this, please note that I do NOT give you permission to use this code at your own disposal.
        It may only be used for ethical purposes, such as helping teachers. If you want more information, contact me.
        */
        async function openSession(sessionId, occurenceId) {
            let name = "";
            let promises = [];
            try {
                for (let i = 0; i < 20; i++) {
                    let URL = `https://k12-widgets-svc.k12.com/k12-widgets-svc/class-connect/sessions/${sessionId}/occurrences/${Number(occurenceId) + i}/url`;
                    promises[i] = fetch(URL, { credentials: "include" }).then((data) => data.json());
                }
                for (let i = 0; i < 20; i++) {
                    let data = await promises[i];
                    if (data.validSession == true && data.ccSessionURL != null) {
                        window.open(data.ccSessionURL, '_blank');
                        return;
                    }
                    name = name ? name : data.sessionName;
                }
                alert(`${name} is not open. Please reload and try again.`);
            }
            catch (e) {
                alert("Please navigate to one of your class homepages and come back");
            }
        }
    }
})