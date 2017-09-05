var generateCats = function(){
  for(cat of catsArray){
    createNewCat(cat.name, cat.food, cat.img);
  }
}

var generateCats = function(){
  for(cat of catsArray){
    createNewCat(cat.name, cat.food, cat.img);
  }
}

var createNewCat = function(name, food, image){
  var section = document.getElementById('cats');

  var newListItem = document.createElement('ul');
  newListItem.classList.add('cat')

  var catName = document.createElement('li');
  var catFood = document.createElement('li');
  var imgContainer = document.createElement('li');
  var img = document.createElement('img');

  img.src = image
  imgContainer.appendChild(img);

  catName.innerText = name;
  catFood.innerText = food;

  newListItem.appendChild(imgContainer);
  newListItem.appendChild(catName);
  newListItem.appendChild(catFood);
  section.appendChild(newListItem);
}

var app = function (){
  generateCats();
}

window.onload = app;