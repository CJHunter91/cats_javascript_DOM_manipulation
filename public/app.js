
var app = function (){

  var newListItem = document.createElement('ul');
  newListItem.classList.add('cat')

  var name = document.createElement('li');
  var food = document.createElement('li');
  var imgContainer = document.createElement('li');
  var img = document.createElement('img');

  img.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
  img.width = 500;
  imgContainer.appendChild(img);

  var section = document.getElementById('cats');


  name.innerText = "Mr BigglesWorth";
  food.innerText = "Kibble N'Bits"


  newListItem.appendChild(name);
  newListItem.appendChild(food);
  newListItem.appendChild(imgContainer);
  section.appendChild(newListItem);


}

window.onload = app;