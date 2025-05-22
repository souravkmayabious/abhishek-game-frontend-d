// Open modals when any button with data-modal is clicked
document.querySelectorAll('[data-modal]').forEach(button => {
  button.onclick = function () {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
  };
});

// Close modals when any <span class="close"> is clicked
document.querySelectorAll('.close').forEach(span => {
  span.onclick = function () {
    const modal = span.closest('.modal');
    if (modal) modal.style.display = "none";
  };
});

// Close modals if clicking outside of modal-content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};



  function toggleSelect(element) {
    element.classList.toggle("selected");
  }




// // Get the modal
// var settingsmodal = document.getElementById("settings_modal");

// var modal =  document.getElementsByClassName("modal");

// // Get the button that opens the modal
// var settingsbtn = document.getElementById("settings_modal_btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// settingsbtn.onclick = function() {
//   settingsmodal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
