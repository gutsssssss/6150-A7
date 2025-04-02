window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("book-list");

  fetch("https://67eda8114387d9117bbe47cb.mockapi.io/book")
    .then(res => res.json())
    .then(data => {
      data.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="detail.html?id=${book.id}">${book.title}</a>`;
        list.appendChild(li);
      });
    });
});
