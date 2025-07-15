
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("catalog");
    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="صورة المنتج">
        <h3>${product.name}</h3>
        <p>${product.specs}</p>
        <p><strong>${product.price}</strong></p>
      `;
      container.appendChild(card);
    });
  });
