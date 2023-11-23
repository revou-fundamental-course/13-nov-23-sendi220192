var img = document.getElementById("img");

var slides = [
  "assets/Borobudur.jpg",
  "assets/prambanan.jpg",
  "assets/CandiPR.jpg",
  "assets/Pantai.jpg",

  
];

var Start = 0;

function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider, 4000);

function validateForm() {
  const name = document.forms["form-input"]["name-input"].value;
  const email = document.forms["form-input"]["email-input"].value;
  const option = document.forms["form-input"]["select-input"].value;

  if (name == "") {
    document.getElementById("error-name").innerHTML = "Name cannot be empty";
    document.getElementById("error-name").style.color = "crimson";
  } else {
    document.getElementById("error-name").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("error-email").innerHTML = "Email cannot be empty";
    document.getElementById("error-email").style.color = "crimson";
  } else {
    document.getElementById("error-email").innerHTML = "";
  }

  if (option == "") {
    document.getElementById("error-select").innerHTML =
      "Selection cannot be empty";
    document.getElementById("error-select").style.color = "crimson";
  } else {
    document.getElementById("error-select").innerHTML = "";
    document.getElementById("default-select").innerHTML = "Select Option";
  }

  return false;
}

function clearField() {
  document.getElementById("error-name").innerHTML = "";
  document.getElementById("error-email").innerHTML;
  document.getElementById("error-select").innerHTML = "";
  document.getElementById("default-select").innerHTML = "Select Option";
}

