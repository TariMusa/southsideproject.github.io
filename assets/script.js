
function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}
function showSubscribed(e){
  e.preventDefault();
  const email = document.getElementById('email');
  if(email && email.value){
    alert(`Thanks! We'll send updates to ${email.value} (replace this demo form with your real newsletter provider).`);
    email.value = '';
  }
  return false;
}
