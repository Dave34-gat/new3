function filterProducts() {
  const category = document.getElementById("category").value;
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
