document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault(); 
  
  var postName = document.getElementById('name').value;
  var postMessage = document.getElementById('message').value;

  let nameHeader = document.createElement('h2') 
  let messageBody = document.createElement('p'); 

   document.getElementsByClassName('posts')[0].appendChild(nameHeader);
nameHeader.innerHTML = postName; 

  document.getElementsByClassName('posts')[0].appendChild(messageBody)
  messageBody.innerHTML = postMessage; 
  
  document.getElementById('message').value = '';

  document.getElementById('name').value = '';

})







