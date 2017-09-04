
var app = function (){
  
  var createNewCat = function(name, food, image){
    // var itemsToCreate = {
    //   name: "li", 
    //   food: "li", 
    //   imgContainer: "li",
    //   img: "img"
    // }
    var newListItem = document.createElement('ul');
    newListItem.classList.add('cat')
    var catName = document.createElement('li');
    var catFood = document.createElement('li');
    var imgContainer = document.createElement('li');
    var img = document.createElement('img');

    img.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
    img.width = 500;
    imgContainer.appendChild(img);

    var section = document.getElementById('cats');


    catName.innerText = "Mr BigglesWorth";
    catFood.innerText = "Kibble N'Bits"


    newListItem.appendChild(catName);
    newListItem.appendChild(catFood);
    newListItem.appendChild(imgContainer);
    section.appendChild(newListItem);
  }

  createNewCat();

}

window.onload = app;