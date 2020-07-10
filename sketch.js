//Create variables here
var totalFood=20;
var foodS;
var StandingDogImg,DogEatingImg,dog;
function preload()
{
  //load images here
  StandingDogImg = loadImage("../images/dogImg.png");
  DogEatingImg=loadImage("../images/dogImg1.png");
  MilkImg=loadImage("../images/Milk.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage("dog",DogEatingImg);
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);
  textSize(20);
  fill("red");
 text("Press up key to feed the dog",20,50);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog",StandingDogImg);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
    console.log(x);
  }
  database.ref('/').update({
    Food: x
  })
  console.log(foodS)
  }