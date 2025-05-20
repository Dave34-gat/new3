// Procurement Orders
const procurementForm = document.getElementById('procurementForm');
const procurementTable = document.getElementById('procurementTable').querySelector('tbody');

procurementForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const orderId = document.getElementById('orderId').value;
  const supplier = document.getElementById('supplier').value;
  const product = document.getElementById('product').value;
  const status = document.getElementById('status').value;
  const date = document.getElementById('date').value;

  const row = procurementTable.insertRow();
  row.innerHTML = `
    <td>${orderId}</td>
    <td>${supplier}</td>
    <td>${product}</td>
    <td>${status}</td>
    <td>${date}</td>
  `;

  procurementForm.reset();
});

// Supplier Management
const supplierForm = document.getElementById('supplierForm');
const supplierList = document.getElementById('supplierList');

supplierForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('supplierName').value;
  const contact = document.getElementById('contact').value;
  const product = document.getElementById('suppliedProduct').value;

  const li = document.createElement('li');
  li.textContent = `${name} - ${contact} - Supplies: ${product}`;
  supplierList.appendChild(li);

  supplierForm.reset();
});

// Inventory Tracking
const inventoryTable = document.getElementById('inventoryTable').querySelector('tbody');

function updateStock() {
  const product = document.getElementById('stockProduct').value;
  const quantity = document.getElementById('stockQuantity').value;

  if (!product || quantity < 0) {
    alert("Please enter valid stock data.");
    return;
  }

  const row = inventoryTable.insertRow();
  row.innerHTML = `
    <td>${product}</td>
    <td>${quantity}</td>
  `;

  document.getElementById('stockProduct').value = '';
  document.getElementById('stockQuantity').value = '';
}

// Search
function searchProcurements() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const rows = procurementTable.querySelectorAll('tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(search) ? '' : 'none';
  });
}
