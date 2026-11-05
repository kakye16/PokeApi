const button = document.querySelector("button");
const loader = document.querySelector(".loader");
const content = document.querySelector("main");

let array = ["1", "2", "3"];

async function funcionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolve");
      resolve();
    }, 3000);
  });
}

async function fetch() {
  try {
    loader.classList.remove("oculta");
    button.classList.add("oculta");

    console.log("Petición al servidor");

    funcionAsincrona();

    loader.classList.add("oculta");
    content.classList.remove("oculta");

    console.log(
      "Operación que se espera que se haga después de recorrer el array"
    );
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  fetch();
});
