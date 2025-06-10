/**
 * Products data and display functionality
 */

// Product data store
const productsData = {
  mens: [
    {
      id: 'm1',
      title: 'قميص رجالي كاجوال',
      category: 'ملابس رجالي',
      type: 'men',
      price: 350,
      oldPrice: 450,
      image: 'https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'قميص رجالي كاجوال بقصة عصرية مصنوع من القطن عالي الجودة. مناسب للارتداء اليومي والمناسبات غير الرسمية.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['أبيض', 'أزرق', 'أسود'],
      featured: true,
      badge: 'جديد'
    },
    {
      id: 'm2',
      title: 'بنطلون جينز رجالي',
      category: 'ملابس رجالي',
      type: 'men',
      price: 420,
      oldPrice: 550,
      image: 'https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'بنطلون جينز رجالي بقصة مستقيمة وخامة قطنية ممتازة. يمنحك مظهراً أنيقاً وراحة في الحركة طوال اليوم.',
      sizes: ['30', '32', '34', '36', '38'],
      colors: ['أزرق غامق', 'أزرق فاتح', 'أسود'],
      featured: false
    },
    {
      id: 'm3',
      title: 'تيشيرت رجالي قطن',
      category: 'ملابس رجالي',
      type: 'men',
      price: 180,
      oldPrice: 250,
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'تيشيرت رجالي من القطن الخالص بقصة مريحة. مثالي للاستخدام اليومي في مختلف المناسبات.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['أبيض', 'أسود', 'رمادي', 'أزرق'],
      featured: true,
      badge: 'خصم'
    },
    {
      id: 'm4',
      title: 'سترة رجالية شتوية',
      category: 'ملابس رجالي',
      type: 'men',
      price: 680,
      oldPrice: 850,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'سترة رجالية دافئة مناسبة للشتاء، مصنوعة من خامات عالية الجودة تحميك من البرد مع الحفاظ على أناقتك.',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['أسود', 'بني', 'كحلي'],
      featured: false
    },
    {
      id: 'm5',
      title: 'بدلة رجالي رسمية',
      category: 'ملابس رجالي',
      type: 'men',
      price: 1200,
      oldPrice: 1500,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'بدلة رجالي رسمية بقصة عصرية وخامة فاخرة. مثالية للمناسبات الرسمية والاجتماعات العملية.',
      sizes: ['50', '52', '54', '56'],
      colors: ['أسود', 'كحلي', 'رمادي'],
      featured: true
    },
    {
      id: 'm6',
      title: 'سويت شيرت رجالي',
      category: 'ملابس رجالي',
      type: 'men',
      price: 280,
      oldPrice: 350,
      image: 'https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'سويت شيرت رجالي مريح بغطاء رأس، مصنوع من القطن الناعم. مناسب للأجواء الباردة والأنشطة الرياضية.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['أسود', 'رمادي', 'أزرق'],
      featured: false
    },
  ],
  womens: [
    {
      id: 'w1',
      title: 'فستان نسائي أنيق',
      category: 'ملابس نسائي',
      type: 'women',
      price: 480,
      oldPrice: 650,
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'فستان نسائي أنيق بتصميم عصري، مناسب للمناسبات والسهرات. مصنوع من خامات راقية تمنحك مظهراً مميزاً.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['أسود', 'أحمر', 'أزرق'],
      featured: true,
      badge: 'رائج'
    },
    {
      id: 'w2',
      title: 'بلوزة نسائية',
      category: 'ملابس نسائي',
      type: 'women',
      price: 220,
      oldPrice: 280,
      image: 'https://images.pexels.com/photos/4723361/pexels-photo-4723361.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'بلوزة نسائية بأكمام طويلة وتصميم أنيق. مصنوعة من القطن المريح، مناسبة للاستخدام اليومي.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['أبيض', 'وردي', 'أزرق فاتح'],
      featured: false
    },
    {
      id: 'w3',
      title: 'بنطلون جينز نسائي',
      category: 'ملابس نسائي',
      type: 'women',
      price: 380,
      oldPrice: 450,
      image: 'https://images.pexels.com/photos/1972114/pexels-photo-1972114.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'بنطلون جينز نسائي بقصة ضيقة وخصر مرتفع. يمنحك مظهراً أنيقاً ويبرز جمال قوامك.',
      sizes: ['26', '28', '30', '32', '34'],
      colors: ['أزرق', 'أزرق غامق', 'أسود'],
      featured: true
    },
    {
      id: 'w4',
      title: 'جاكيت نسائي',
      category: 'ملابس نسائي',
      type: 'women',
      price: 580,
      oldPrice: 750,
      image: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'جاكيت نسائي عصري مناسب للخريف والربيع. يمكن تنسيقه مع مختلف الملابس للحصول على إطلالة متميزة.',
      sizes: ['S', 'M', 'L'],
      colors: ['بيج', 'أسود', 'أزرق'],
      featured: false
    },
    {
      id: 'w5',
      title: 'تنورة نسائية',
      category: 'ملابس نسائي',
      type: 'women',
      price: 280,
      oldPrice: 350,
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'تنورة نسائية بطول متوسط وتصميم أنيق. مناسبة للمكتب والمناسبات شبه الرسمية.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['أسود', 'بيج', 'أزرق كحلي'],
      featured: true,
      badge: 'حصري'
    },
    {
      id: 'w6',
      title: 'تيشيرت نسائي',
      category: 'ملابس نسائي',
      type: 'women',
      price: 150,
      oldPrice: 200,
      image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'تيشيرت نسائي من القطن المريح بأكمام قصيرة. مثالي للاستخدام اليومي وسهل التنسيق مع مختلف الملابس.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['أبيض', 'أسود', 'وردي', 'أزرق'],
      featured: false
    },
  ],
  bags: [
    {
      id: 'b1',
      title: 'حقيبة يد نسائية',
      category: 'حقائب',
      type: 'women',
      price: 420,
      oldPrice: 550,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حقيبة يد نسائية فاخرة من الجلد الطبيعي. تصميم عصري أنيق مناسب للمناسبات المختلفة.',
      colors: ['أسود', 'بني', 'أحمر'],
      featured: true,
      badge: 'فاخر'
    },
    {
      id: 'b2',
      title: 'حقيبة ظهر رجالي',
      category: 'حقائب',
      type: 'men',
      price: 380,
      oldPrice: 450,
      image: 'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حقيبة ظهر رجالي متينة ومريحة، مناسبة للاستخدام اليومي والرحلات القصيرة. تتسع للكمبيوتر المحمول والأغراض الشخصية.',
      colors: ['أسود', 'رمادي', 'أزرق كحلي'],
      featured: false
    },
    {
      id: 'b3',
      title: 'حقيبة كتف نسائية',
      category: 'حقائب',
      type: 'women',
      price: 320,
      oldPrice: 400,
      image: 'https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حقيبة كتف نسائية عملية وأنيقة، مناسبة للاستخدام اليومي. تحتوي على جيوب متعددة لتنظيم أغراضك.',
      colors: ['بيج', 'أسود', 'بني فاتح'],
      featured: true
    },
    {
      id: 'b4',
      title: 'حقيبة سفر',
      category: 'حقائب',
      type: 'unisex',
      price: 680,
      oldPrice: 850,
      image: 'https://images.pexels.com/photos/2847869/pexels-photo-2847869.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حقيبة سفر كبيرة ومتينة، مناسبة للرحلات الطويلة. مصنوعة من خامات عالية الجودة تتحمل الاستخدام المتكرر.',
      colors: ['أسود', 'أزرق كحلي', 'رمادي'],
      featured: false
    },
    {
      id: 'b5',
      title: 'محفظة جلد رجالي',
      category: 'حقائب',
      type: 'men',
      price: 180,
      oldPrice: 250,
      image: 'https://images.pexels.com/photos/6311378/pexels-photo-6311378.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'محفظة رجالي أنيقة من الجلد الطبيعي، تحتوي على أماكن متعددة للبطاقات والنقود.',
      colors: ['أسود', 'بني'],
      featured: true,
      badge: 'حصري'
    },
    {
      id: 'b6',
      title: 'حقيبة تسوق',
      category: 'حقائب',
      type: 'women',
      price: 220,
      oldPrice: 280,
      image: 'https://images.pexels.com/photos/5706273/pexels-photo-5706273.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حقيبة تسوق عملية وواسعة، مثالية للتسوق والرحلات القصيرة. سهلة الحمل ومتينة.',
      colors: ['أسود', 'بيج', 'أزرق'],
      featured: false
    },
  ],
  shoes: [
    {
      id: 's1',
      title: 'حذاء رياضي رجالي',
      category: 'أحذية',
      type: 'men',
      price: 480,
      oldPrice: 650,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حذاء رياضي رجالي مريح وخفيف الوزن، مناسب للرياضة والاستخدام اليومي.',
      sizes: ['40', '41', '42', '43', '44', '45'],
      colors: ['أسود', 'أبيض', 'رمادي'],
      featured: true,
      badge: 'شائع'
    },
    {
      id: 's2',
      title: 'حذاء كعب عالي نسائي',
      category: 'أحذية',
      type: 'women',
      price: 420,
      oldPrice: 550,
      image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حذاء نسائي بكعب عالي وتصميم أنيق، مناسب للمناسبات والسهرات.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['أسود', 'أحمر', 'بيج'],
      featured: false
    },
    {
      id: 's3',
      title: 'حذاء كلاسيكي رجالي',
      category: 'أحذية',
      type: 'men',
      price: 580,
      oldPrice: 750,
      image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حذاء رجالي كلاسيكي من الجلد الطبيعي، مناسب للمناسبات الرسمية والعمل.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['أسود', 'بني'],
      featured: true
    },
    {
      id: 's4',
      title: 'حذاء رياضي نسائي',
      category: 'أحذية',
      type: 'women',
      price: 380,
      oldPrice: 450,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'حذاء رياضي نسائي خفيف ومريح، مناسب للرياضة والمشي لمسافات طويلة.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['أبيض', 'وردي', 'أزرق فاتح'],
      featured: false
    },
    {
      id: 's5',
      title: 'بوت رجالي',
      category: 'أحذية',
      type: 'men',
      price: 680,
      oldPrice: 850,
      image: 'https://images.pexels.com/photos/14634921/pexels-photo-14634921.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'بوت رجالي من الجلد الطبيعي، مناسب للشتاء ويوفر الدفء والراحة.',
      sizes: ['41', '42', '43', '44', '45'],
      colors: ['أسود', 'بني'],
      featured: true,
      badge: 'جديد'
    },
    {
      id: 's6',
      title: 'صندل نسائي',
      category: 'أحذية',
      type: 'women',
      price: 220,
      oldPrice: 280,
      image: 'https://images.pexels.com/photos/4494159/pexels-photo-4494159.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'صندل نسائي أنيق ومريح، مناسب للصيف والمناسبات غير الرسمية.',
      sizes: ['36', '37', '38', '39', '40'],
      colors: ['أسود', 'بيج', 'ذهبي'],
      featured: false
    },
  ]
};

/**
 * Load featured products on the homepage
 */
function loadFeaturedProducts() {
  const featuredContainer = document.getElementById('featured-products');
  if (!featuredContainer) return;
  
  // Get all featured products from all categories
  const featuredProducts = [
    ...productsData.mens.filter(product => product.featured),
    ...productsData.womens.filter(product => product.featured),
    ...productsData.bags.filter(product => product.featured),
    ...productsData.shoes.filter(product => product.featured)
  ];
  
  // Limit to 8 products
  const limitedFeatured = featuredProducts.slice(0, 8);
  
  // Generate HTML for featured products
  featuredContainer.innerHTML = limitedFeatured.map(product => generateProductCard(product)).join('');
  
  // Add event listeners for add to cart buttons
  addCartButtonListeners();
  addQuickViewListeners();
}

/**
 * Load products for a specific category
 * @param {string} category - The category to load (mens, womens, bags, shoes)
 */
function loadProducts(category) {
  const productsContainer = document.getElementById('products-container');
  if (!productsContainer) return;
  
  const products = productsData[category];
  
  // Generate HTML for products
  productsContainer.innerHTML = products.map(product => generateProductCard(product)).join('');
  
  // Add event listeners for add to cart buttons
  addCartButtonListeners();
  addQuickViewListeners();
  
  // Add event listeners for filters
  setupFilters(category);
}

/**
 * Generate HTML for a product card
 * @param {Object} product - The product data
 * @returns {string} HTML for the product card
 */
function generateProductCard(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-img">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-actions">
          <button class="product-action-btn quick-view-btn" data-id="${product.id}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="product-action-btn add-to-wishlist-btn">
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category} - ${product.type === 'men' ? 'رجالي' : (product.type === 'women' ? 'نسائي' : 'للجنسين')}</div>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price">
          <span class="current-price">${product.price} ج.م</span>
          <span class="old-price">${product.oldPrice} ج.م</span>
        </div>
        <button class="add-to-cart-btn" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> أضف إلى السلة
        </button>
      </div>
    </div>
  `;
}

/**
 * Add event listeners to cart buttons
 */
function addCartButtonListeners() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.currentTarget.dataset.id;
      const product = findProductById(productId);
      
      if (product) {
        // Add to cart with default quantity 1 and default size
        const defaultSize = product.sizes ? product.sizes[0] : '';
        addToCart(product, 1, defaultSize);
        
        // Show notification
        showNotification(`تمت إضافة ${product.title} إلى السلة`);
      }
    });
  });
}

/**
 * Add event listeners for quick view buttons
 */
function addQuickViewListeners() {
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.close-modal');
  
  if (!modal || !modalBody || !closeModal) return;
  
  quickViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.currentTarget.dataset.id;
      const product = findProductById(productId);
      
      if (product) {
        // Generate modal content
        modalBody.innerHTML = generateQuickViewContent(product);
        
        // Show modal
        modal.style.display = 'block';
        
        // Add event listeners for quick view functionality
        setupQuickViewListeners(product);
      }
    });
  });
  
  // Close modal on X click
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

/**
 * Generate HTML for quick view modal
 * @param {Object} product - The product data
 * @returns {string} HTML for the quick view content
 */
function generateQuickViewContent(product) {
  const sizeOptions = product.sizes ? `
    <div class="quick-view-options">
      <h4 class="options-title">المقاس:</h4>
      <div class="size-options">
        ${product.sizes.map(size => `
          <div class="size-option" data-size="${size}">${size}</div>
        `).join('')}
      </div>
    </div>
  ` : '';
  
  return `
    <div class="quick-view">
      <div class="quick-view-img">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="quick-view-info">
        <div class="quick-view-category">${product.category} - ${product.type === 'men' ? 'رجالي' : (product.type === 'women' ? 'نسائي' : 'للجنسين')}</div>
        <h2 class="quick-view-title">${product.title}</h2>
        <div class="quick-view-price">
          <span class="quick-view-current-price">${product.price} ج.م</span>
          <span class="quick-view-old-price">${product.oldPrice} ج.م</span>
        </div>
        <p class="quick-view-description">${product.description}</p>
        
        ${sizeOptions}
        
        <div class="quantity-selector">
          <h4 class="options-title">الكمية:</h4>
          <button class="quantity-btn decrement-btn">-</button>
          <input type="number" class="quantity-input" value="1" min="1" max="10">
          <button class="quantity-btn increment-btn">+</button>
        </div>
        
        <div class="quick-view-actions">
          <button class="btn primary-btn quick-view-add-to-cart" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> أضف إلى السلة
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Setup event listeners for quick view functionality
 * @param {Object} product - The product data
 */
function setupQuickViewListeners(product) {
  const incrementBtn = document.querySelector('.increment-btn');
  const decrementBtn = document.querySelector('.decrement-btn');
  const quantityInput = document.querySelector('.quantity-input');
  const addToCartBtn = document.querySelector('.quick-view-add-to-cart');
  const sizeOptions = document.querySelectorAll('.size-option');
  
  // Set default size as active
  if (sizeOptions.length > 0) {
    sizeOptions[0].classList.add('active');
  }
  
  // Size selection
  sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      sizeOptions.forEach(opt => opt.classList.remove('active'));
      // Add active class to selected option
      option.classList.add('active');
    });
  });
  
  // Increment quantity
  incrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value < 10) {
      quantityInput.value = value + 1;
    }
  });
  
  // Decrement quantity
  decrementBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });
  
  // Add to cart
  addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const activeSize = document.querySelector('.size-option.active');
    const size = activeSize ? activeSize.dataset.size : '';
    
    addToCart(product, quantity, size);
    
    // Close modal
    document.getElementById('product-modal').style.display = 'none';
    
    // Show notification
    showNotification(`تمت إضافة ${product.title} إلى السلة`);
  });
}

/**
 * Setup filter functionality
 * @param {string} category - The current category
 */
function setupFilters(category) {
  const sortSelect = document.getElementById('sort-by');
  const sizeSelect = document.getElementById('filter-size');
  const typeSelect = document.getElementById('filter-type');
  
  if (sortSelect) {
    sortSelect.addEventListener('change', () => applyFilters(category));
  }
  
  if (sizeSelect) {
    sizeSelect.addEventListener('change', () => applyFilters(category));
  }
  
  if (typeSelect) {
    typeSelect.addEventListener('change', () => applyFilters(category));
  }
}

/**
 * Apply filters to products
 * @param {string} category - The current category
 */
function applyFilters(category) {
  const sortSelect = document.getElementById('sort-by');
  const sizeSelect = document.getElementById('filter-size');
  const typeSelect = document.getElementById('filter-type');
  const productsContainer = document.getElementById('products-container');
  
  if (!productsContainer) return;
  
  let products = [...productsData[category]];
  
  // Apply type filter
  if (typeSelect && typeSelect.value !== 'all') {
    products = products.filter(product => product.type === typeSelect.value);
  }
  
  // Apply size filter
  if (sizeSelect && sizeSelect.value !== 'all') {
    products = products.filter(product => 
      product.sizes && product.sizes.includes(sizeSelect.value)
    );
  }
  
  // Apply sorting
  if (sortSelect) {
    const sortValue = sortSelect.value;
    
    if (sortValue === 'price-low') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
      products.sort((a, b) => b.price - a.price);
    }
    // 'latest' is default, no sorting needed
  }
  
  // Generate HTML for filtered products
  productsContainer.innerHTML = products.map(product => generateProductCard(product)).join('');
  
  // Add event listeners for add to cart buttons
  addCartButtonListeners();
  addQuickViewListeners();
}

/**
 * Find a product by its ID
 * @param {string} id - The product ID
 * @returns {Object|null} The product object or null if not found
 */
function findProductById(id) {
  // Search in all categories
  const allProducts = [
    ...productsData.mens,
    ...productsData.womens,
    ...productsData.bags,
    ...productsData.shoes
  ];
  
  return allProducts.find(product => product.id === id) || null;
}

// Initialize featured products on homepage
document.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
});