// dname mname fname lname

function validateForm() {
    var a = document.forms["Form"]["dname"].value;
    var b = document.forms["Form"]["mname"].value;
    var c = document.forms["Form"]["fname"].value;
    var d = document.forms["Form"]["lname"].value;
    if ((a == null || a == "") && (b == null || b == "") && (c == null || c == "") && (d == null || d == "")) {
      alert("Please Fill In All Required Fields");
      return false;
    }
    if ((a == null || a == "")) {
      alert("Can't be blank");
      return false;
    }
  }