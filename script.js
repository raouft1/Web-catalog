
const products = [
  {
    name: "HP PROBOOK 640 G2",
    specs: "CI5 8EME / 256Go SSD / 8Go RAM / Clavier Lumineux / 14\" LED",
    price: "43,500 DA",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Laptop.jpg"
  },
  {
    name: "DELL LATITUDE 5400",
    specs: "CI5 8EME / 256Go SSD / 8Go RAM / Ecran 14\" LED / HDMI",
    price: "45,000 DA",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Laptop.jpg/320px-Laptop.jpg"
  },
  {
    name: "LENOVO THINKPAD T470",
    specs: "CI5 6EME / 256Go SSD / 8Go RAM / 14\" LED",
    price: "34,500 DA",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Laptop.jpg"
  }
];

function renderCatalog() {
  const container = document.getElementById("catalog");
  const loading = document.getElementById("loading");
  container.innerHTML = "";
  products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${prod.image}" alt="صورة">
      <h3>${prod.name}</h3>
      <p>${prod.specs}</p>
      <p><strong>${prod.price}</strong></p>
    `;
    container.appendChild(card);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", renderCatalog);
