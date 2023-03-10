// Declara opções de cores

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Busca por elementos

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Trabalha com eventos no DOM

btn.addEventListener("click", () => {
  //get random number between 0 - 3 (index) colors[0-1-2-3...]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];

  // ALTERA o valor textual de color
  color.textContent = colors[randomNumber];

  // Adiciona CSS dinâmico
  color.style.color = colors[randomNumber];
});

// Função para geração da cor
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
