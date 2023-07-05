// Get DOM elements
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('.btn');

// Event listeners
myForm.addEventListener('submit', onSubmit);
btn.addEventListener('mouseover', onButtonHover);
btn.addEventListener('click', onButtonClick);

function onSubmit(e) {
  e.preventDefault();
  
  const name = nameInput.value;
  const email = emailInput.value;

  if (name === '' || email === '') {
    showMessage('Please enter all fields.', 'error');
    return;
  }


  // Store values in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);

  // Clear fields
  nameInput.value = '';
  emailInput.value = '';

  // Display success message
  showMessage('Form submitted successfully!');
}

function onButtonHover() {
  console.log('Button hovered');
  // Add your desired hover effect here
}

function onButtonClick() {
  console.log('Button clicked');
  // Add your desired click functionality here
}

function showMessage(message) {
  const msg = document.querySelector('.msg');
  msg.classList.remove('error');
  msg.classList.add('success');
  msg.innerHTML = message;

  // Remove success message after 3 seconds
  setTimeout(() => {
    msg.innerHTML = '';
  }, 3000);
}
