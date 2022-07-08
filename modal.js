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
  }
}

let registerForm = document.getElementById('registerForm');


registerForm.addEventListener('submit', function(e){
  let inputFirst = document.getElementById("first");
  let inputLast = document.getElementById("last");
  let inputEmail = document.getElementById("email");
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;
  let inputQuantity = document.getElementById("quantity");
  let regexQuantity = /^[0-9]*$/;
  let inputDate = document.getElementById("birthdate");
  let inputsLocation = document.getElementsByClassName('checkbox-input-location');
  let inputCondition = document.getElementById("checkbox1");
  let count = 0;


  if(inputFirst.value.trim() == "" || inputFirst.value.trim().length < 2) {
    document.getElementById("errorFirst").innerHTML = "Le champ doit faire plus de 2 charactères.";
    count += 1;
    e.preventDefault();
  }

  if(inputLast.value.trim() == "" || inputLast.value.trim().length < 2) {
    document.getElementById("errorLast").innerHTML = "Le champ doit faire plus de 2 charactères.";
    count += 1;
    e.preventDefault();
  }

  if(regexEmail.test(inputEmail.value) == false) {
    document.getElementById("errorEmail").innerHTML = "L'email doit être valide.";
    count += 1;
    e.preventDefault();
  }

  if(regexQuantity.test(inputQuantity.value) == false) {
    document.getElementById("errorQuantity").innerHTML = "Ce champ ne peut contenir que des chiffres.";
    count += 1;
    e.preventDefault();
  }

  if(inputDate.value == "" || inputDate > Date.now()) {
    count += 1;
    document.getElementById("errorBirth").innerHTML = "Votre date de naissance doit être antérieur à la date actuelle.";
    e.preventDefault();
  }
  
  let value = "";
  for (let i = 0; i < inputsLocation.length; i++) {
      if (inputsLocation[i].type === 'radio' && inputsLocation[i].checked) {
          // get value, set checked flag or do whatever you need to
          value = inputsLocation[i].value;       
      }
  }
  if (value == "") {
    document.getElementById("errorLocation").innerHTML = "Il faut choisir au moins une ville.";
    count += 1;
    e.preventDefault();
  }

  if(inputCondition.checked === false){
    document.getElementById("errorCondition").innerHTML = "Veuillez accepter les conditions d'utilisatiions.";
    count += 1;
    e.preventDefault();
  }

  if (count === 0) {
    e.preventDefault();
    document.getElementById('containerForm').classList.add("active");
    document.getElementById('confirmation').classList.add("active");
  }
})


