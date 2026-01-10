// Dark mode
const toggle = document.getElementById('theme-toggle');
const html = document.getElementById('html');

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

// PDF Export (triggers browser print → save as PDF)
document.getElementById('pdf-btn').addEventListener('click', () => {
  window.print();
});

// Form success message
const form = document.getElementById('contactForm');
const success = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate send (in real use, Formspree handles redirect)
    form.classList.add('hidden');
    success.classList.remove('hidden');
  });
}