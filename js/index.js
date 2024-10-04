document.addEventListener("DOMContentLoaded", function(){
  const username = localStorage.getItem('username');
  const greeting = document.getElementById('greeting-message');

  if(username) {
    greeting.innerHTML = `Hello,<br>${username}!`;
  }
});