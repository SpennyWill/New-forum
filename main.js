document.getElementById('.submit').addEventListener('click', (event) => {
  event.preventDefault(); 
  
  var postName = document.getElementById('name').value;
  var postMessage = document.getElementById('message').value;

  let nameHeading = document.createElement('h2'); 
  let messageHeading = document.createElement('h3'); 

  document.getElementsByClassName('posts').appendChild(nameHeading);

  document.getElementsByClassName('posts').appendChild(nameHeading);


})







