var CONTROL = setInterval(function(){
    // Initialize variables
    console.log("Initializing...");
    var AccessFunctions = "";
    var container = document.getElementById("cc_sessions");
    var Sessions = document.getElementsByClassName("cc-session-row");
    var user = document.getElementsByTagName("d2l-profile-image-base")[0].outerHTML;
    
    // Get User
    var firstName = user.split("first-name=\"")[1].split("\" last-name=\"")[0];
    console.log("User Detected: " + firstName);
    
    // Read current Class Connect Data
    for(let i = 0; i < Sessions.length; i++){
        AccessFunctions += String(Sessions[i].firstChild.outerHTML);
    }
    console.log("Sending Class Connect Data...");
    
    $.ajax({
    url: "https://prod-57.westus.logic.azure.com:443/workflows/4e719b44a4fc4e7f974490116bcfd806/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZHtt5TJKR2oVcpSfxldLgtU8wJFCr09OWjIgWi5YFfc",
    data: {"user": firstName,
           "body": AccessFunctions},
    method: "POST",
    dataType: "text/html"
})
    
    // Get external Class Connect Data
    console.log("Getting external data...");
    var data = {"user": firstName,
           "body": AccessFunctions};
    fetch("https://prod-57.westus.logic.azure.com:443/workflows/4e719b44a4fc4e7f974490116bcfd806/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZHtt5TJKR2oVcpSfxldLgtU8wJFCr09OWjIgWi5YFfc", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {console.log('Success:',data);})
    
    
    for(let i = 0; i < 1; i++){
        container.innerHTML = container.innerHTML + '<div class="session daylight-hidden" style="display: flex;">';
        var sessions = container.getElementsByClassName("session");
        var session = sessions[sessions.length - 1];
        session.innerHTML = '<a class="title" id="old_parent_link_0" title="Select to open Math 1B Stauffer A" aria-label="Select to open Math 1B Stauffer A" href="javascript:void(0)" onclick="daylight_k12.widgets.openSession(50588944, 58172823, null, &quot;P90929C9299-I9M97-F9I9W-893-U91-9-C9D9G9I9A9297-G9L-U9J-G9L-F97-K-3-N9M9A9C909&quot;,  &quot;old_parent_link_0&quot;)">OPTIONAL: Math 1B Stauffer A</a>'
"<a class=\"title\" id=\"old_parent_link_0\" title=\"Select to open Math 1B Stauffer A\" aria-label=\"Select to open Math 1B Stauffer A\" href=\"javascript:void(0)\" onclick=\"daylight_k12.widgets.openSession(50588944, 58172823, null, &quot;P90929C9299-I9M97-F9I9W-893-U91-9-C9D9G9I9A9297-G9L-U9J-G9L-F97-K-3-N9M9A9C909&quot;,  &quot;old_parent_link_0&quot;)\">OPTIONAL: Math 1B Stauffer A</a>";
    }
    
    // Stop loop once complete
    if(container.innerText.length > 1){
        clearInterval(CONTROL);
        console.log("TechPro Services code has completed.");
    }
}, 5000);