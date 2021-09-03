async function getData(){
console.log("Initializing...");
sessions = JSON.parse("["+String(await fetch("https://k12-widgets-svc.k12.com/k12-widgets-svc/daylight-scc?container=k12_classConnect&role=Student&timeNow=1629393177778",{credentials: "include"}).then(response => response.text())).split("ccSessions = [")[1].split("]")[0] + "]");
for(i = 0; i < sessions.length; i++){
    let URL = "https://k12-widgets-svc.k12.com/k12-widgets-svc/class-connect/sessions/" + sessions[i].sessionId + '/occurrences/' + sessions[i].occurrenceId + "/url"
    console.log(URL);
    let data = await fetch(URL,{credentials: "include"}).then(response => response.json());
    if(data.validSession == true && data.ccSessionURL != null){
        // window.open(data.ccSessionURL, '_blank'); This command will open an available class connect
        console.log(data.ccSessionURL);
    }
    console.log(data);
}

externalData = await fetch("https://api.jsonbin.io/v3/b/61201ca72aa80036126d4516",{
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": "$2b$10$3fpMRShgPR6OnQ1P8TINMuVyKp3TbFbArn64AWjf5x.JYBc1NCPNK"
  }
}).then(response => response.json()).then(response => response.record);
console.log(externalData);
}
getData();