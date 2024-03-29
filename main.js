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
    profiles.push({ fname, tuid, email, pnumber, major, graddate, undergrad });
    console.log(profiles);
    updateLogs(profiles);
  } else {
    alert("Please make sure TUID entered is 9 numeric characters only");
  }
}

function updateLogs(profiles) {
  var logContent =
    "Full Name, TUID, Email, Phone Number, Major, Graduation Date, Is this student an undergrad? (Y/n)\n" +
    profiles
      .map((profile) => {
        return `${profile.fname}, ${profile.tuid}, ${profile.email}, ${profile.pnumber}, ${profile.major}, ${profile.graddate}, ${profile.undergrad}`;
      })
      .join("\n");

  var blob1 = new Blob([logContent], { type: "text/csv" });

  var csvButton = document.getElementById("downloadCSVButton");

  if (!csvButton) {
    var csvButton = document.createElement("button");
    csvButton.id = "downloadCSVButton";

    csvButton.textContent = "Download CSV";
    document.body.appendChild(csvButton);
  }
  csvButton.addEventListener("click", () => {
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob1);
    link.download = "students_list.csv";
    link.click();
  });
}
