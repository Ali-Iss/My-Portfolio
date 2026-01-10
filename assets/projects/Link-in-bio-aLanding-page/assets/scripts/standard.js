// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
const html = document.getElementById('html');

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  html.setAttribute('data-theme', 'dark');
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

toggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});