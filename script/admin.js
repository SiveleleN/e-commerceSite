
let ProductTitle = document.querySelector('#title');
let Desc = document.querySelector('#description');
let image = document.querySelector('#image-url');
let cont = document.querySelector('#content');
let addbtn = document.querySelector('.btn-add');
let shopCart = JSON.parse(localStorage.getItem('product-list')) || [];

// function to add products
function addProduct() {
  if (ProductTitle.value && Desc.value && image.value && cont.value) {
    shopCart.push(new Product(ProductTitle.value, Desc.value, image.value, cont.value));
    localStorage.setItem('product-list', JSON.stringify(shopCart));

    clearForm();
    displayProducts();
  } else {
    alert('Please fill in all fields.');
  }
}

function Product(title, img, desc, cont) {
  this.title = title;
  this.imageUrl = img;
  this.description = desc;
  this.content = cont;
}

// Here I am using function display for products
function displayProducts() {
  let row = document.getElementById('product-row');
  row.innerHTML = '';

  shopCart.forEach((product) => {
    row.innerHTML +=
      `
      <div class="card mt-5">
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h3 class="card-title">${product.title}</h3>
          <p class="card-text">Description: ${product.description}</p>
          <p class="card-text">Content: ${product.content}</p>
          <a href="#" class="btn btn-primary" onclick='editProduct(${JSON.stringify(product)})'>EDIT</a>
          <a href="#" class="btn btn-primary" onclick='deleteProduct(${JSON.stringify(product)})'>DELETE</a>
        </div>
      </div>
    `;
  });

  attachEventListeners();
}

function attachEventListeners() {
  let deleteButtons = document.querySelectorAll('.btn-primary');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let product = JSON.parse(button.dataset.product);
      deleteProduct(product);
    });
  });
}

function editProduct(product) {
  let editModal = new bootstrap.Modal(document.getElementById('editModal'));

  document.getElementById('editProductName').value = product.title;
  document.getElementById('editProductDescription').value = product.description;
  document.getElementById('editProductImageUrl').value = product.imageUrl;
  document.getElementById('editProductContent').value = product.content;

  editModal.show();

  document.getElementById('saveEditChangesBtn').addEventListener('click', function () {
    let updatedName = document.getElementById('editProductName').value;
    let updatedDescription = document.getElementById('editProductDescription').value;
    let updatedImageUrl = document.getElementById('editProductImageUrl').value;
    let updatedContent = document.getElementById('editProductContent').value;

    product.title = updatedName;
    product.description = updatedDescription;
    product.imageUrl = updatedImageUrl;
    product.content = updatedContent;

    displayProducts();
    editModal.hide();
  });
}

function deleteProduct(product) {
  console.log('Deleting product:', product);

  const index = shopCart.findIndex((p) => p.title === product.title);
  if (index !== -1) {
    shopCart.splice(index, 1);
    localStorage.setItem('product-list', JSON.stringify(shopCart));
    displayProducts();
  }
}



  // Adding event listener for the "Add" button
  addbtn.addEventListener('click', addProduct);

  displayProducts();
