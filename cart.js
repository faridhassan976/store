/**
 * Shopping cart functionality
 */

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('#cart-count');
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = count;
  });
}

/**
 * Add product to cart
 * @param {Object} product - The product to add
 * @param {number} quantity - The quantity to add
 * @param {string} size - The selected size
 */
function addToCart(product, quantity = 1, size = '') {
  // Check if product already exists in cart
  const existingItemIndex = cart.findIndex(item => 
    item.id === product.id && item.size === size
  );
  
  if (existingItemIndex !== -1) {
    // Update quantity if product already in cart
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to cart
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: size,
      category: product.category,
      type: product.type
    });
  }
  
  // Save cart to localStorage
  saveCart();
  
  // Update cart count
  updateCartCount();
}

/**
 * Remove product from cart
 * @param {string} id - The product ID
 * @param {string} size - The product size
 */
function removeFromCart(id, size = '') {
  cart = cart.filter(item => !(item.id === id && item.size === size));
  
  // Save cart to localStorage
  saveCart();
  
  // Update cart display
  renderCart();
  
  // Update cart count
  updateCartCount();
}

/**
 * Update product quantity in cart
 * @param {string} id - The product ID
 * @param {string} size - The product size
 * @param {number} quantity - The new quantity
 */
function updateQuantity(id, size, quantity) {
  const itemIndex = cart.findIndex(item => 
    item.id === id && item.size === size
  );
  
  if (itemIndex !== -1) {
    if (quantity > 0) {
      cart[itemIndex].quantity = quantity;
    } else {
      // Remove item if quantity is 0 or negative
      removeFromCart(id, size);
      return;
    }
  }
  
  // Save cart to localStorage
  saveCart();
  
  // Update cart display
  renderCart();
  
  // Update cart count
  updateCartCount();
}

/**
 * Save cart to localStorage
 */
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Calculate cart total
 * @returns {number} The cart total
 */
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Render cart on cart page
 */
function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  const emptyCart = document.getElementById('empty-cart');
  const checkoutFormContainer = document.getElementById('checkout-form-container');
  
  if (!cartContainer) return;
  
  if (cart.length === 0) {
    // Show empty cart message
    if (emptyCart) emptyCart.style.display = 'block';
    if (checkoutFormContainer) checkoutFormContainer.style.display = 'none';
    
    // Clear cart container
    cartContainer.innerHTML = '';
    return;
  }
  
  // Hide empty cart message, show cart content
  if (emptyCart) emptyCart.style.display = 'none';
  
  // Generate cart HTML
  let cartHTML = `
    <div class="cart-header">
      <div class="product-col">المنتج</div>
      <div class="price-col">السعر</div>
      <div class="quantity-col">الكمية</div>
      <div class="subtotal-col">الإجمالي</div>
      <div class="remove-col"></div>
    </div>
    <div class="cart-items">
  `;
  
  // Add cart items
  cart.forEach(item => {
    cartHTML += `
      <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
        <div class="product-col">
          <div class="cart-product-img">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="cart-product-info">
            <h3>${item.title}</h3>
            <p>${item.category} - ${item.type === 'men' ? 'رجالي' : (item.type === 'women' ? 'نسائي' : 'للجنسين')}</p>
            ${item.size ? `<p>المقاس: ${item.size}</p>` : ''}
          </div>
        </div>
        <div class="cart-price">${item.price} ج.م</div>
        <div class="cart-quantity">
          <button class="cart-quantity-btn decrement-btn" data-id="${item.id}" data-size="${item.size}">-</button>
          <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" max="10" data-id="${item.id}" data-size="${item.size}">
          <button class="cart-quantity-btn increment-btn" data-id="${item.id}" data-size="${item.size}">+</button>
        </div>
        <div class="cart-subtotal">${item.price * item.quantity} ج.م</div>
        <div class="cart-remove" data-id="${item.id}" data-size="${item.size}">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    `;
  });
  
  // Close cart items div
  cartHTML += `</div>`;
  
  // Add cart summary
  const total = calculateTotal();
  
  cartHTML += `
    <div class="cart-summary">
      <h2>ملخص الطلب</h2>
      <div class="summary-row">
        <span>إجمالي المنتجات:</span>
        <span>${total} ج.م</span>
      </div>
      <div class="summary-row">
        <span>الشحن:</span>
        <span>50 ج.م</span>
      </div>
      <div class="summary-row">
        <span>الإجمالي النهائي:</span>
        <span>${total + 50} ج.م</span>
      </div>
      <button class="btn primary-btn checkout-btn" id="proceed-to-checkout">
        متابعة الشراء
      </button>
    </div>
  `;
  
  // Update cart container
  cartContainer.innerHTML = cartHTML;
  
  // Add event listeners for cart functionality
  addCartFunctionality();
}

/**
 * Add event listeners for cart functionality
 */
function addCartFunctionality() {
  // Remove item buttons
  const removeButtons = document.querySelectorAll('.cart-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const size = button.dataset.size;
      removeFromCart(id, size);
    });
  });
  
  // Increment buttons
  const incrementButtons = document.querySelectorAll('.increment-btn');
  incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const size = button.dataset.size;
      const input = document.querySelector(`.cart-quantity-input[data-id="${id}"][data-size="${size}"]`);
      let value = parseInt(input.value);
      if (value < 10) {
        updateQuantity(id, size, value + 1);
      }
    });
  });
  
  // Decrement buttons
  const decrementButtons = document.querySelectorAll('.decrement-btn');
  decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const size = button.dataset.size;
      const input = document.querySelector(`.cart-quantity-input[data-id="${id}"][data-size="${size}"]`);
      let value = parseInt(input.value);
      if (value > 1) {
        updateQuantity(id, size, value - 1);
      }
    });
  });
  
  // Quantity inputs
  const quantityInputs = document.querySelectorAll('.cart-quantity-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', () => {
      const id = input.dataset.id;
      const size = input.dataset.size;
      let value = parseInt(input.value);
      
      // Ensure value is between 1 and 10
      if (value < 1) value = 1;
      if (value > 10) value = 10;
      
      updateQuantity(id, size, value);
    });
  });
  
  // Proceed to checkout button
  const checkoutButton = document.getElementById('proceed-to-checkout');
  const checkoutFormContainer = document.getElementById('checkout-form-container');
  
  if (checkoutButton && checkoutFormContainer) {
    checkoutButton.addEventListener('click', () => {
      checkoutFormContainer.style.display = 'block';
      checkoutButton.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Back to cart button
  const backToCartButton = document.getElementById('back-to-cart');
  
  if (backToCartButton && checkoutFormContainer) {
    backToCartButton.addEventListener('click', () => {
      checkoutFormContainer.style.display = 'none';
    });
  }
  
  // Place order button
  const placeOrderButton = document.getElementById('place-order');
  const checkoutForm = document.getElementById('checkout-form');
  
  if (placeOrderButton && checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(checkoutForm);
      const orderData = {
        customer: {
          name: formData.get('fullname'),
          phone: formData.get('phone'),
          address: formData.get('address'),
          location: {
            lat: formData.get('latitude'),
            lng: formData.get('longitude')
          },
          notes: formData.get('notes')
        },
        items: cart,
        total: calculateTotal() + 50, // Including shipping
        date: new Date().toISOString()
      };
      
      // Generate WhatsApp message
      const message = generateWhatsAppMessage(orderData);
      
      // Redirect to WhatsApp
      window.open(`https://wa.me/01208938661?text=${encodeURIComponent(message)}`, '_blank');
      
      // Clear cart
      cart = [];
      saveCart();
      updateCartCount();
      
      // Redirect to homepage or thank you page
      // window.location.href = 'index.html';
    });
  }
}

/**
 * Generate WhatsApp message for order
 * @param {Object} orderData - The order data
 * @returns {string} The formatted message
 */
function generateWhatsAppMessage(orderData) {
  let message = `*طلب جديد*\n\n`;
  message += `*بيانات العميل:*\n`;
  message += `الاسم: ${orderData.customer.name}\n`;
  message += `الهاتف: ${orderData.customer.phone}\n`;
  message += `العنوان: ${orderData.customer.address}\n`;
  
  if (orderData.customer.location.lat && orderData.customer.location.lng) {
    message += `الموقع: https://www.google.com/maps?q=${orderData.customer.location.lat},${orderData.customer.location.lng}\n`;
  }
  
  if (orderData.customer.notes) {
    message += `ملاحظات: ${orderData.customer.notes}\n`;
  }
  
  message += `\n*المنتجات:*\n`;
  
  orderData.items.forEach((item, index) => {
    message += `${index + 1}. ${item.title} - الكمية: ${item.quantity}`;
    if (item.size) message += ` - المقاس: ${item.size}`;
    message += ` - ${item.price * item.quantity} ج.م\n`;
  });
  
  message += `\n*الشحن:* 50 ج.م\n`;
  message += `*الإجمالي النهائي:* ${orderData.total} ج.م\n`;
  message += `\n*تاريخ الطلب:* ${new Date().toLocaleDateString('ar-EG')}\n`;
  
  return message;
}

/**
 * Initialize map for checkout
 */
function initMap() {
  const mapElement = document.getElementById('map');
  const latInput = document.getElementById('latitude');
  const lngInput = document.getElementById('longitude');
  
  if (!mapElement || !latInput || !lngInput) return;
  
  // Initialize map with Cairo coordinates
  const map = L.map('map').setView([30.0444, 31.2357], 13);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add marker
  let marker = L.marker([30.0444, 31.2357], {
    draggable: true
  }).addTo(map);
  
  // Update inputs on marker drag
  marker.on('dragend', function(event) {
    const position = marker.getLatLng();
    latInput.value = position.lat;
    lngInput.value = position.lng;
  });
  
  // Update marker on map click
  map.on('click', function(e) {
    marker.setLatLng(e.latlng);
    latInput.value = e.latlng.lat;
    lngInput.value = e.latlng.lng;
  });
  
  // Try to get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      map.setView([lat, lng], 15);
      marker.setLatLng([lat, lng]);
      
      latInput.value = lat;
      lngInput.value = lng;
    });
  }
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update cart count
  updateCartCount();
  
  // Render cart if on cart page
  if (document.getElementById('cart-container')) {
    renderCart();
    
    // Initialize map for checkout
    initMap();
  }
});