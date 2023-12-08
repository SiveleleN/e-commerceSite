//creating an array for purchasing the products
let products = [
  {
    "id": 1,
    "name": "MARIGOLDS",
    "description": "They are commonly found in gardens, there are two main types of marigolds: French and African. Marigolds are versatile plant that can be used to treat burns, skin-related illness, and digestive issues. Also safe for animal consumption and are sometimes added to poultry feed to enhance the yolk color egg",
    "price": 4600,
    "img": "https://i.postimg.cc/h41k704t/Marigold-2-480x480.webp"
  },

  {
    "id": 2,
    "name": 'ALOE FEROX',
    "description": "It is a member of the aloe family of succulents and is slightly different from Aloe Vera. South Africa produces and utilizes more aloe ferox products than other African countries. The plant has a thick outer skin to store water during the drier seasons. It contains aloin and amino acids, which are higher in aloe ferox than in Aloe Vera. Aloin extraction is easier from aloe ferox than Aloe vera.. it treats arthritis, sinusitis, stress, tension and stomach aches",
    "price": 3500,
    "img": "https://i.postimg.cc/QxWnJkh7/Aloe-Ferox-480x480.webp"
  },
  {
    "id": 3,
    "name": "ROOIBOS",
    "description": "it is a green, leafy shrub that is native to the Western Cape of South Africa. It has been used by the Khoi San in their traditional medicine for centuries before the Anglo-Boers recognized its health and healing properties. It is low in tannin and caffeine-free, making it safe for those with hypertension or stress-related illnesses. It also lowers blood cholesterol levels and is rich in antioxidants, it is also beneficial remedy for various health issues such as coughs, colic, digestive problems and allergies",
    "price": 3300,
    "img": "https://i.postimg.cc/NMsPY3hq/Rooibos-2-480x480.webp"
  },
  {
    "id": 4,
    "name": "MARINGA",
    "description": "The Moringa tree, also known as drumstick, horseradish, or peperwartelboom, is not native to South Africa but can be grown in most provinces. It is popular for its medicinal properties and can supposedly treat around 300 health issues. It helps to treat various illnesses, and the leaves contain more beta-carotene than carrots and are an excellent source of calcium. It treats anemia and contains more iron than beef steak, also used for pain relief",
    "price": 5950,
    "img": "https://i.postimg.cc/J0W3MJHy/Moringa-1-480x480.webp"
  },
  {
    "id": 5,
    "name": "DEVIL'S CLAW",
    "description": "Devil’s Claw is a plant used for medicinal purposes by the Southern African Khoisan and Bantu-speaking people. It is used for indigestion, blood diseases, fevers, sprains, and boils. It is also in different forms such as pills",
    "price": 5230,
    "img": "https://i.postimg.cc/XY3Vdvdw/Harpagophytum-procumbens-Devils-Claw2.jpg",
  },
  
  {
    "id": 6,
    "name": "AFRICAN GINGER OIL",
    "description": `African Ginger is a plant that grows in Mpumalanga and the Northern Province.
    It has been found to aid digestion, relieve sinusitis and asthma, and reduce fevers. 
    The root of the plant is used to make African Ginger Oil, which has anti-inflammatory, antibacterial, anti-fungal, pain-relieving, and anti-tumour effects.
    It can be used to treat malaria, prevent horse sickness, and prevent strokes. Ginger oil is also used to treat fractures, rheumatism, arthritis, digestive problems, nausea, hangovers, colds, flu, sore throat, congestion, coughs, sinusitis, skin conditions, poor circulation, and bruises.
   The plant is high in minerals and contains vitamins B3 and B5.`,
    "price": 4850,
    "img": "https://i.postimg.cc/x11BpfBD/OIP_(7).jpg"
  }
];
// Sorting button's reference
let sortingProducts = document.querySelector('[data-sort]')

// I am retrieving products from local storage or using default data
products = JSON.parse(localStorage.getItem('products')) || products;
localStorage.setItem('products', JSON.stringify(products));

// using DOM elements
let productsWrapper = document.querySelector('[data-products]');
let searchInput = document.querySelector('[search-products]');

let shopCart = []
// using fuction display for products 
function displayProduct(productsToDisplay) {
  productsWrapper.innerHTML = '';
  productsToDisplay.forEach((product) => {
    productsWrapper.innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-text">Price: R${product.price}</p>
          <a href="#" class="btn btn-primary" onclick= 'addToCart(${JSON.stringify(product)})'>Add to Cart</a>
        </div>
      </div>
    `;
  });
}

// Display initial products
displayProduct(products);

// Search products function
function searchProducts() {
  let searchTerm = searchInput.value.toLowerCase();
  let filteredProducts = products.filter((product) =>{
    return product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm)
    

  });
  
  
  displayProduct(filteredProducts);
}


// Event listeners
searchInput.addEventListener('input', searchProducts);


// displayProduct
sortingProducts.addEventListener('click', ()=>{
  let sortedProducts = products.sort( (arg1, arg2)=>{
    return arg1.price - arg2.price
  } )
  displayProduct(sortedProducts)
})

function addToCart(item){
  if(item){
    shopCart.push(item)
    localStorage.setItem('admin', JSON.stringify(purchasedProductArray))
  }
}