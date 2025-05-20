document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const orderSummary = document.getElementById("orderSummary");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Gather form data
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("phone-number").value;
    const receipt = document.getElementById("receipt").files[0];

    if (!product || !quantity || !address || !name || !phone || !receipt) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show confirmation message
    orderSummary.style.display = "block";
    orderSummary.innerHTML = `
      <h2>✅ Order Confirmed!</h2>
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Shipping Address:</strong> ${address}</p>
      <p>We’ve received your payment receipt. Your order is being processed. Thank you for shopping with Eco Grocery Store!</p>
    `;

    // Optionally clear the form
    form.reset();
  });
});
