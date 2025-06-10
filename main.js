/**
 * Main JavaScript file for the store
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  setupMobileMenu();
  
  // Copy buttons functionality
  setupCopyButtons();
  
  // Setup contact form if on contact page
  if (document.getElementById('contact-form')) {
    setupContactForm();
  }
});

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
}

/**
 * Show notification
 * @param {string} message - The notification message
 */
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');
  
  if (notification && notificationText) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
}

/**
 * Setup copy buttons functionality
 */
function setupCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.dataset.copy;
      
      // Copy text to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification('تم نسخ النص بنجاح!');
      }).catch(err => {
        console.error('فشل في نسخ النص: ', err);
      });
    });
  });
}

/**
 * Setup contact form
 */
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    // For now, just show a success message
    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    
    // Reset form
    contactForm.reset();
  });
}