function filterCatalogs() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const items = document.querySelectorAll(".catalog-item");
  items.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function changeLanguage() {
  const lang = document.getElementById("langSelector").value;
  alert("تم تغيير اللغة إلى: " + lang + " (عرض تجريبي فقط)");
}
