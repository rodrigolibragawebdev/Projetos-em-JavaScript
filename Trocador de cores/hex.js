// Declara opções de cores
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Busca por elementos
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Trabalha com eventos no DOM
btn.addEventListener("click", () => {
  let hexColor = "#";

  // LOOP para 6 casas
  for (let i = 0; i < 6; i++) {
    // importante hex color += para ter uma criação
    hexColor += hex[getRandomNumber()];
  }

  // ALTERA o valor textual de color
  color.textContent = hexColor;

  // Trabalha com CSS dinâmico
  color.style.color = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Função para geração da cor
const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
