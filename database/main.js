
window.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector('#email').value    = localStorage.getItem('email')    || '';
    document.querySelector('#password').value = localStorage.getItem('password') || '';
  });


document.querySelector('.login-form form')
.addEventListener('submit', e => {

  const email = document.querySelector('#email').value;
  const pass  = document.querySelector('#password').value;


  localStorage.setItem('email',    email);
  localStorage.setItem('password', pass);


});