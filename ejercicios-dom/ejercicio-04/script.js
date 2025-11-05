/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click */

const boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "Haz clic aquí";
document.body.appendChild(boton);
boton.addEventListener("click", (event) => {
  console.log(event);
});


/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);  
input.addEventListener("focus", () => {
  console.log(input.value);
});



/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

input.addEventListener("input", () => {
    console.log(input.value);  
    });
    