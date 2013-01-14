// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var arReadSpeed = document.getElementById("arReadSpeed").value;
  localStorage["arReadSpeed"] = arReadSpeed;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores speedInput box state to saved value from localStorage.
function restore_options() {
  var arReadSpeed = localStorage["arReadSpeed"];
  if (!arReadSpeed) {
    return;
  }
  var speedInput = document.getElementById("arReadSpeed");
    speedInput.value = arReadSpeed;
  }
  
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);