function convertToJSON() {
  var object = document.getElementById("object").value;
  var object2 = document.getElementById("object2").value;
  //
  var key1 = document.getElementById("key1").value;
  var value1 = document.getElementById("value1").value;
  //
  var key2 = document.getElementById("key2").value;
  var value2 = document.getElementById("value2").value;
  //
  var key3 = document.getElementById("key3").value;
  var value3 = document.getElementById("value3").value;
  //
  var key4 = document.getElementById("key4").value;
  var value4 = document.getElementById("value4").value;
  //

  var jsonObject = {
    object: {
      key1: value1,
      key2: value2,
      key3: value3,
      object2: {
        key4: value4,
      },
    },
  };

  editor.setValue(JSON.stringify(jsonObject, null, "\t"));
}

// Download JSON
function saveToFile() {
  convertToJSON();
  var jsonObjectAsString = editor.getValue();

  var blob = new Blob([jsonObjectAsString], {
    type: "application/json",
    // type: "octet/stream",
  });
  // console.log(blob);

  var anchor = document.createElement("a");
  anchor.download = "Download.json";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.innerHTML = "download";
  anchor.click();

  // console.log(anchor);

  document.getElementById("editor").append(anchor);
}

// Generate PDF
function generatePDF() {
  // var element = editor.getValue();
  const element = document.getElementById("card");
  html2pdf().from(element).save();
}

// Editor
var editor = ace.edit("editor");
// editor.session.setMode("ace/mode/json");
editor.getSession().setMode("ace/mode/json");
editor.setTheme("ace/theme/xcode");
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
