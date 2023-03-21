// Constants
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#emailAddress');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');
const messageError = document.querySelector('#message + .field.error');

function validateName() {
  // used for validating the name you entered in the form
  if(nameInput.validity.valid){
     nameError.textContent = '';
  }
  else {
     showNameError();
  }
}

function showNameError() {
    // An error message will be displayed for the fullName field
    nameError.textContent = 'Please enter your name';
}

function validateEmail() {
    // Code that will run whenever we want to validate the email field
    if(emailInput.validity.valid){
        emailError.textContent = '';
    }
    else {
        showEmailError();
    }
}

function showEmailError() {
    // Code to display an error message for the email field
    if(emailInput.validity.valueMissing){
        emailError.textContent = 'Please enter your email address'
    }
    else if(emailInput.validity.typeMismatch){
        emailError.textContent = 'Your email address does not appear to be correct'
    }
}

function validateMessage() {
    if(messageInput.validity.valid) {
        messageInput.textContent = 'Please enter your message';
    }
    else {
        showMessageError();
    }
}

function showMessageError() {
    messageError.textContent = 'Please enter a message';
}

function validateForm(event) {
    // This code will validate the entire form
    let formHasErrors = false;

    if(!nameInput.validity.valid) {
        formHasErrors = true;
        showNameError();
    }

    if(!emailInput.validity.valid) {
        formHasErrors = true;
        showEmailError();
    }

    if(!messageError.validity.valid) {
        formHasErrors = true;
        showMessageError();
    }

    if(formHasErrors) {
        event.preventDefault();
    }
}

// Set up an event listener for each of the fields in the form
// The event we are listening for is "input" (occurs when user types or pastes text into a field)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Set up an event listener for the form
// The event we are listening for is "submit" (occurs when user trys to submit the form)
form.addEventListener('submit', validateForm);