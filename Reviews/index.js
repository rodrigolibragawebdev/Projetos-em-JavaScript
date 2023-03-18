const reviews = [
  {
    id: 1,
    name: "Diego",
    job: "Developer",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, perspiciatis aliquam eaque recusandae error nam blanditiis aliquid atque cumque quibusdam dicta hic et voluptates cupiditate delectus ex ducimus nobis. Eum.,",
  },
  {
    id: 2,
    name: "Claudia",
    job: "Dev FUllStack",
    img: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, perspiciatis aliquam eaque recusandae error nam blanditiis aliquid atque cumque quibusdam dicta hic et voluptates cupiditate delectus ex ducimus nobis. Eum.,",
  },
  {
    id: 3,
    name: "Lirian",
    job: "UI/UX Designer",
    img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nostrum velit quidem expedita esse similique voluptatibus veritatis ad mollitia. Esse reprehenderit dolore nihil fugit libero alias repellendus ducimus tempore id!",
  },
  {
    id: 4,
    name: "Demian",
    job: "VFX Editor",
    img: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias deserunt, cumque, vel fugit quibusdam eius facere atque consequuntur nisi autem earum eveniet amet ex dolore cum molestias fuga! Reprehenderit, rem!",
  },
];

// 0,1,4,3 (4 objetos no array)

// select items
const img = document.getElementById("personImg");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");

// show person based on item
const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// set starting item
let currentItem = 0;

//load initial set o fornt-end
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

//next, prev and random
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  let currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
