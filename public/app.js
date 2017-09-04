
var catsArray = [
  {
    name: "Mr BigglesWorth",
    food: "Kibble N'Bits", 
    img: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
  },
  {
    name: "KitKat",
    food: "Tuna", 
    img: "https://prickthyneighbour.files.wordpress.com/2013/05/cat-rob.png"
  }
]


var app = function (){
  
  var createNewCat = function(name, food, image){
    var section = document.getElementById('cats');

    var newListItem = document.createElement('ul');
    newListItem.classList.add('cat')

    var catName = document.createElement('li');
    var catFood = document.createElement('li');
    var imgContainer = document.createElement('li');
    var img = document.createElement('img');

    img.src = image
    img.width = 500;
    imgContainer.appendChild(img);

    catName.innerText = name;
    catFood.innerText = food;

    newListItem.appendChild(catName);
    newListItem.appendChild(catFood);
    newListItem.appendChild(imgContainer);
    section.appendChild(newListItem);
  }

  var generateCats = function(){
    for(cat of catsArray){
      console.log(cat)
      createNewCat(cat.name, cat.food, cat.img);
    }
  }

  generateCats();

  // createNewCat("Mr BigglesWorth", "Kibble N'Bits", "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg");

}

window.onload = app;