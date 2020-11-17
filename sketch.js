//Create variables here

var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite();
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
}


function draw() {  
  background(46, 139, 87);


  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.value();
}

function writeStock(x) {
  database.ref('/').update({
    food:x
  })
}



