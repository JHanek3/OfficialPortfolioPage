function coPY(clicked_id) {
  //copy the email
  if (clicked_id === "bus") {
    var copyText = "Hanekj25@gmail.com";
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value="Hanekj25@gmail.com";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied to clipboard: " + copyText);
  } else {
    var copyText = "Simplecode4@gmail.com";
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value="Simplecode4@gmail.com";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied to clipboard: " + copyText);
  }
}
