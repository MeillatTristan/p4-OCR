function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  if (modalbg.style.display == "block") {
    modalbg.style.display = "none";
  }
  else{
    modalbg.style.display = "block";
    toggleConfirmation();
  }
}

//check if name is valid
function ValidName(input, idError){
  if(input.value.trim() === "" || input.value.trim().length < 2) {
    document.getElementById(idError).innerHTML = "Le champ doit faire plus de 2 caractères.";
    return 1;
  }
  else{
    document.getElementById(idError).innerHTML = "";
    return 0;
  }
}

//check if email is valid
function ValidEmail(input){
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
  if(regexEmail.test(input.value) === false) {
    document.getElementById("errorEmail").innerHTML = "L'email doit être valide.";
    return 1;
  }
  else{
    document.getElementById("errorEmail").innerHTML = "";
    return 0;
  }
}

//check if quantity is number and not null
function ValidQuantity(input){
  let regexQuantity = /^[0-9]*$/;
  if(regexQuantity.test(input.value) === false || input.value === "") {
    document.getElementById("errorQuantity").innerHTML = "Ce champ ne peut contenir que des chiffres et ne peut être vide.";
    return 1;
  }
  else{
    document.getElementById("errorQuantity").innerHTML = "";
    return 0;
  }
}

//check if date is valid
function ValidDate(input){
  if(input.value === "" || (new Date(input.value)).getTime() > Date.now()) {
    document.getElementById("errorBirth").innerHTML = "Votre date de naissance doit être antérieur à la date actuelle.";
    return 1;
  }
  else{
    document.getElementById("errorBirth").innerHTML = "";
    return 0;
  }
}

//check if one radio is selected
function ValidRadio(inputs){
  let value = "";
  for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === 'radio' && inputs[i].checked) {
          // get value, set checked flag or do whatever you need to
          value = inputs[i].value;       
      }
  }
  if (value === "") {
    document.getElementById("errorLocation").innerHTML = "Il faut choisir au moins une ville.";
    return 1;
  }
  else{
    document.getElementById("errorLocation").innerHTML = "";
    return 0;
  }
}

//check if CGU is checked
function ValidCGU(input){
  if(input.checked === false){
    document.getElementById("errorCondition").innerHTML = "Veuillez accepter les conditions d'utilisatiions.";
    return 1;
  }
  else{
    document.getElementById("errorCondition").innerHTML = "";
    return 0;
  }
}

// toggle display confirmation pannel
function toggleConfirmation() {
  document.getElementById('containerForm').classList.toggle("active");
  document.getElementById('confirmation').classList.toggle("active");
}

function ValidateForm(e){
  let count = 0;
  count += ValidName(document.getElementById("first"), "errorFirst");
  count += ValidName(document.getElementById("last"), "errorLast");
  count += ValidEmail(document.getElementById("email"));
  count += ValidQuantity(document.getElementById("quantity"));
  count += ValidDate(document.getElementById("birthdate"));
  count += ValidRadio(document.getElementsByClassName('checkbox-input-location'));

  //if errors is null display confirmation pannel
  if (count === 0) {
    e.preventDefault();
    toggleConfirmation();
  }
  else{
    e.preventDefault();
  }
}

let registerForm = document.getElementById('registerForm');

// check if form is submit
registerForm.addEventListener('submit', function(e){
  e.preventDefault();
  ValidateForm(e);
  
})



