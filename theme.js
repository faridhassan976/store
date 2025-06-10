/**
 * Theme toggle functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check if user has a preferred theme stored
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the saved theme or default to light
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.remove('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
});