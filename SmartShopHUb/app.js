// Get references to login and signup elements
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeModalLinks = document.querySelectorAll('.close-modal');

// Function to show a modal window
function showModal(modal) {
  modal.style.display = 'block';
}

// Function to hide a modal window
function hideModal(modal) {
  modal.style.display = 'none';
}

// Add click event listeners to login and signup links
loginLink.addEventListener('click', () => showModal(loginModal));
signupLink.addEventListener('click', () => showModal(signupModal));

// Add click event listeners to close buttons on both modals
closeModalLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideModal(loginModal);
    hideModal(signupModal);
  });
});

// Add functionality for form submission (replace with actual logic)
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  console.log('Login form submitted! (Implement actual logic here)');
  // Simulate successful login (replace with actual logic)
  alert('Login successful!');
  hideModal(loginModal);
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  console.log('Signup form submitted! (Implement actual logic here)');
  // Simulate successful signup (replace with actual logic)
  alert('Signup successful!');
  hideModal(signupModal);
});
