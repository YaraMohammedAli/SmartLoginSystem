// var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passInput = document.getElementById('passInput');

var p_error = document.getElementById('p_error');
var p_succ = document.getElementById('p_succ');
var email_error = document.getElementById('email_error');


var inputs = JSON.parse(localStorage.getItem('UserData')) || [];


function validInput(vInput) {
  var regex = {
    nameInput: /^[A-Za-z\s]{3,20}$/,
    emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
    passInput: /^[A-Za-z0-9]{4,}$/
  };
  return regex[vInput.id].test(vInput.value.trim());
}


function isDuplicateEmail(email) {
  return inputs.some(
    user => user.user_email.toLowerCase() === email.trim().toLowerCase()
  );
}


function signUp() {
  var validName = validInput(nameInput);
  var validEmail = validInput(emailInput);
  var validPass = validInput(passInput);

  p_error.classList.add('d-none');
  email_error.classList.add('d-none');
  p_succ.classList.add('d-none');

  if (!validName || !validEmail || !validPass) {
    p_error.classList.remove('d-none');
    return;
  }
  if (isDuplicateEmail(emailInput.value)) {
    email_error.classList.remove('d-none');
    return;
  }

  var input = {
    user_name: nameInput.value.trim(),
    user_email: emailInput.value.trim(),
    user_pass: passInput.value.trim()
  };

  inputs.push(input);
  localStorage.setItem('UserData', JSON.stringify(inputs));

  p_succ.classList.remove('d-none');

  clearInput();

}


function clearInput() {
  nameInput.value = '';
  emailInput.value = '';
  passInput.value = '';
}
// ********************************

// login

var users = JSON.parse(localStorage.getItem('UserData')) || [];

function logIn() {
    var email = emailInput.value.trim();
    var pass = passInput.value.trim();
  
    if (email === '' || pass === '') {
      p_error.textContent = 'All inputs are required';
      return;
    }
  
    var userFound = users.find(
      (user) =>
        user.user_email.toLowerCase() === email.toLowerCase() &&
        user.user_pass === pass
    );
  
    if (userFound) {
      p_error.textContent = '';
      localStorage.setItem('currentUser', JSON.stringify(userFound));  
      window.location.href = './pages/home.html';
    } else {
      p_error.textContent = 'Invalid email or password';
    }
  }
  


