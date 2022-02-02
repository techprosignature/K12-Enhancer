let button = document.createElement("button");
button.id = "techpro-button";
button.innerText = "+ActualGrade";
document.body.insertAdjacentElement("afterbegin",button);
button.addEventListener('click',main);
async function main(){
    button.remove();
    var coursePromise = getGrade(document.location.href.split("/")[5]);
    var popup = document.createElement("div"), loader = document.createElement("div"), colored = document.createElement("div");
    popup.id = "gradePopup";
    colored.id = "techpro-main"
    popup.style.backgroundImage = `url(${chrome.runtime.getURL("img/MaskGroup.svg")})`
    loader.id = "techpro-loader"
    popup.insertAdjacentElement("afterbegin",loader)
    document.body.insertAdjacentElement("afterBegin",popup);
    gradeData = await coursePromise;
    console.log(gradeData);
    loader.style.display = "none";
    popup.innerHTML = `<div id="techpro-header"><table><tr><th>+Actual<span>Grade</span></th></tr>
                        <tr><td id="header-grade">${letterGrade(gradeData.actual.earned,gradeData.actual.total)}</d></tr>
                        <tr><td id="header-course">${document.querySelector("header").children[1].children[0].children[0].children[0].children[1].children[4].children[0].title}</td></tr></table>`;
    colored.insertAdjacentHTML("beforeend",
    `<h2>Actual Grade</h2>
    <p><span class="main-grade">${gradeData.actual.letter}</span> <span class="main-percentage">(${gradeData.actual.percentage})</span></p>
    <h2>Zeroed Grade</h2>
    <p><span class="main-grade">${gradeData.zeroed.letter}</span> <span class="main-percentage">(${gradeData.zeroed.percentage})</span></p>
    <h2>Non-zeroed Grade</h2>
    <p><span class="main-grade">${gradeData.nonzeroed.letter}</span> <span class="main-percentage">(${gradeData.nonzeroed.percentage})</span></p>
    <div id="SquidCredit"><p>Squid Pickle Studios</p><img src="${chrome.runtime.getURL("img/SquidPickleStudios.svg")}" /></div>`);
    popup.insertAdjacentElement("beforeend",colored);
}

async function getGrade(id){
    let returnData = {calculated: {earned: 0, total: 0, percentage: "", letter: ""}, actual: {earned: 0, total: 0, percentage: "", letter: ""}, zeroed: {earned: 0, total: 0, percentage: "", letter: ""}, nonzeroed: {earned: 0, total: 0, percentage: "", letter: ""}};
    try{
    // Get gradebook data
    let data = await fetch(`https://learning.k12.com/d2l/lms/grades/my_grades/main.d2l?ou=${id}`).then(response => response.text());

    let DOMParse = new DOMParser()
    let courseHTML = DOMParse.parseFromString(data,"text/html");
    let table = courseHTML.body.children[5].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[7].children[2].children[0].children[0];
    let grades = table.querySelectorAll("td div div div div div div div.dco_c label");

    // Find calculated grade
    for(let i = 0; i < grades.length; i++){
        if(grades[i].innerText.split(" / ").length == 2){
            // Get grade of current assignment
            let gradePoint = parseFloat(grades[i].innerText.split(" / ")[0]);
            let gradePossible = parseFloat(grades[i].innerText.split(" / ")[1]);
            // Handle normal scenerio
            if(!isNaN(gradePoint) && gradePoint != 0 && !isNaN(gradePossible)){
                // Add earned points
                returnData.calculated.earned += gradePoint;
                returnData.zeroed.earned += gradePoint;
                returnData.nonzeroed.earned += gradePoint;
                // Add possilbe points
                returnData.calculated.total += gradePossible;
                returnData.zeroed.total += gradePossible;
                returnData.nonzeroed.total += gradePossible;
            }
            // Handle 0s
            else if(gradePoint == 0 && !isNaN(gradePossible)){
                returnData.calculated.total += gradePossible;
                returnData.zeroed.total += gradePossible;
            }
            // Handle incomplete assignments
            else if(isNaN(gradePoint) && !isNaN(gradePossible)){
                returnData.zeroed.total += gradePossible;
            }
        }
        // Handle extra credit
        else{
            let extra = parseFloat(grades[i].innerText);
            if(!isNaN(extra)){
                returnData.calculated.earned += extra;
                returnData.zeroed.earned += extra;
                returnData.nonzeroed.earned += extra;
            }
        }
    }

    // Get actual grade
    let split = data.split(" / ");
    tempLength = split[1].split("\"").length;
    returnData.actual = {earned: parseFloat(split[1].split("\"")[tempLength - 1].replaceAll(",","")), total: parseFloat(split[1].split(/\"|<\/label/)[0].replaceAll(",",""))};
    if(isNaN(returnData.actual.earned) || isNaN(returnData.actual.total)){
        returnData.actual.earned = 0;
        returnData.actual.total = 0;
    }

    for(x in returnData){
        returnData[x].percentage = `${(100*returnData[x].earned / returnData[x].total).toFixed(2)}%`;
        returnData[x].letter = letterGrade(returnData[x].earned,returnData[x].total);
        returnData[x].earned = returnData[x].earned.toFixed(2);
        returnData[x].total = returnData[x].total.toFixed(2);
    }
    
    // Get gradebook data from different source
    // data = await fetch(`https://learning.k12.com/d2l/lms/grades/general/grade_list_dialog_view.d2l?ou=${id}&mode=4`);

    return returnData;
    }
    catch(e){
        console.log(`Caught error: ${e}`);
        return returnData;
    }
}
async function getCourses(){
    let courses = {};
    let courseData = await fetch("https://learning.k12.com/d2l/lp/courseSelector/1598769/InitPartial",{withCredentials: true}).then(response => response.text());
    for(let i = 1; i < courseData.split("</a>").length - 1; i++){
        tempLength = courseData.split("</a>")[i].split("\">").length;
        let courseName = courseData.split("</a>")[i].split("\">")[tempLength - 1];
        let courseId = parseInt(courseData.split("</a>")[i].split("/home/")[1].split("\\")[0]);
        courses[courseName] = {id: courseId};
    }
    for(let x in courses){
        console.log(x,courses[x].id);
        courses[x].Promise = getGrade(courses[x].id);
    }
    for(let x in courses){
        try{
        courses[x].data = await courses[x].Promise;
        /*console.log(`${x}
    Calculated: ${(100 * course.calculated.earned / course.calculated.total).toFixed(2)}%
    Actual: ${(100 * course.actual.earned / course.actual.total).toFixed(2)}%
    Zeroed: ${(100 * course.zeroed.earned / course.zeroed.total).toFixed(2)}%
    Non-Zeroed: ${(100 * course.nonzeroed.earned / course.nonzeroed.total).toFixed(2)}%`);*/
        }
        catch(e){
            console.log(`Unhandled error: ${e}`);
        }
    }
    return courses;
}
function letterGrade(earned, total){
    let percentage = (100*earned / total).toFixed(2);
    if(percentage >= 97){
        return "A+";
    }
    else if(percentage < 97 && percentage >= 92.5){
        return "A";
    }
    else if(percentage < 92.5 && percentage >= 90){
        return "A-";
    }
    else if(percentage < 90 && percentage >= 87){
        return "B+";
    }
    else if(percentage < 87 && percentage >= 83){
        return "B";
    }
    else if(percentage < 83 && percentage >= 80){
        return "B-";
    }
    else if(percentage < 80 && percentage >= 77){
        return "C+";
    }
    else if(percentage < 77 && percentage >= 73){
        return "C";
    }
    else if(percentage < 73 && percentage >= 70){
        return "C-";
    }
    else if(percentage < 70 && percentage >= 67){
        return "D+";
    }
    else if(percentage < 67 && percentage >= 65){
        return "D";
    }
    else if(percentage < 65 && percentage >= 0){
        return "F";
    }
    else{
        return "-";
    }
}