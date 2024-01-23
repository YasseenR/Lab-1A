
var profiles = [];

function profileLog() {

    var regex = /^\d{9}$/;

    

    var fname = document.getElementById("fname").value;
    var tuid = document.getElementById("tuid").value;
    var email = document.getElementById("email").value;
    var pnumber = document.getElementById("pnumber").value;
    var major = document.getElementById("major").value;
    var graddate = document.getElementById("graddate").value;
    var undergrad = document.getElementById("undergrad").value;

    
    

    const rows = [fname, tuid, email, pnumber, major, graddate, undergrad];

    console.log(rows);

    if (regex.test(tuid)) {
        profiles.push({fname, tuid, email, pnumber, major, graddate, undergrad});
        console.log(profiles);
    } else {
        alert("Please make sure TUID entered is 9 numeric characters only");
    }


}

function updateLogs() {
    
}
