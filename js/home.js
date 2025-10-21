 
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));  

  if (currentUser) {
    document.getElementById('spanid').textContent = currentUser.user_name;
  } else {
    window.location.href = './../index.html';
  }
  

  function logOut() {
    localStorage.removeItem('currentUser'); 
    window.location.href = './../index.html'; 
  }