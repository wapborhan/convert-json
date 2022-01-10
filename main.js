function convertToJSON() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;

  var jsonObject = {
    FirstName: firstname,
    LastName: lastname,
    email: email,
  };

  document.getElementById("output").value = JSON.stringify(jsonObject);
}

function saveToFile() {
  convertToJSON();
  var jsonObjectAsString = document.getElementById("output").value;

  var blob = new Blob([jsonObjectAsString], {
    //type: 'application/json'
    type: "octet/stream",
  });
  console.log(blob);

  var anchor = document.createElement("a");
  anchor.download = "Download.json";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.innerHTML = "download";
  anchor.click();

  console.log(anchor);

  document.getElementById("output").append(anchor);
}
