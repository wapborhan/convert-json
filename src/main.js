function convertToJSON() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;

  var jsonObject = {
    FirstName: firstname,
    LastName: lastname,
    email: email,
  };

  editor.setValue(JSON.stringify(jsonObject, null, "\t"));
}

function saveToFile() {
  convertToJSON();
  var jsonObjectAsString = editor.getValue();

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

  // console.log(anchor);

  document.getElementById("editor").append(anchor);
}

// generatePDF
function generatePDF() {
  // var element = editor.getValue();
  const element = document.getElementById("card");
  html2pdf().from(element).save();
}

// Editor
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/json");
editor.getSession().setMode("ace/mode/json");
editor.setTheme("ace/theme/xcode");
editor.renderer.setShowGutter();
editor.session.setTabSize(4);

editor.find("needle", {
  backwards: false,
  wrap: false,
  caseSensitive: false,
  wholeWord: false,
  regExp: false,
});
editor.findNext();
editor.findPrevious();

// // download code
// function download(filename, text) {
//   var element = document.createElement("a");
//   element.setAttribute(
//     "href",
//     "data:text/plain;charset=utf-8," + encodeURIComponent(text)
//   );
//   element.setAttribute("download", filename);

//   element.style.display = "none";
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }
// editor.change();
// function save() {
//   download("file.html", editor.getValue());
// }
