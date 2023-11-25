//pagina 1 Inicio imagen border

let bordershow = false
        const img = document.querySelector("img") //querySelector = gets image from the html

        img.addEventListener("click", () => {
            if (!bordershow){
                img.style.border = "solid red 2px"
                bordershow = true
            } else {
                img.style.border = "none"
                bordershow = false
            }
        })

// fin pagina 1
// pagina 2 stickers

        const button = document.querySelector("#verificador");

button.addEventListener("click", () => {
  let inputOne = parseInt(document.querySelector("#inputOne").value);
  let inputTwo = +document.querySelector("#inputTwo").value;
  let inputThree = +document.querySelector("#inputThree").value;

  let result = inputOne + inputTwo + inputThree;
  let mensaje = document.querySelector("#respuesta");

  if (result <= 10) {
    mensaje.innerHTML = "LLevas " + result + " Stickers";
  } else {
    mensaje.innerHTML = "Llevas demasiados Stickers";
  }
});
//fin pagina 2

//pagina 3 contrasena

function valor() {
    let valorUno = document.querySelector("#opcion1").value;
    let valorDos = document.querySelector("#opcion2").value;
    let valorTres = document.querySelector("#opcion3").value;
  
    let total = +valorUno + valorDos + valorTres;
  
    let h3 = document.querySelector("#resultado");
  
    if (total == 911) {
      h3.innerHTML = "Password 1 Correcta";
    } else if (total == 714) {
      h3.innerHTML = "Password 2 Correcta";
    } else {
      h3.innerHTML = "Password Incorrecta";
    }
  }

  //fin pagina 3