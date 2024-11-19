import calcular from "./calcString.js";

const input = document.querySelector("#string");
const form = document.querySelector("#calc-form");
const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const string = input.value;

  div.innerHTML = "<p>" + calcular(string) + "</p>";
});
