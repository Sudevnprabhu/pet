var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;
var gameState,readState;
var bed,garden,wc;
var currentTime;

function preload(){
sadDog=loadImage("dogImg.png");
happyDog=loadImage("dogImg1.png");
bed=loadImage("Bed Room.png");
garden=loadImage("Garden.png");
wc=loadImage("Wash Room.png");
}

function setup() {
  database=firebase.database();
  createCanvas(400,500);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  readState=database.ref('GameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  
  dog=createSprite(200,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(500,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(600,95);
  addFood.mousePressed(addFoods); 
}

function draw() {
  //background(46,139,87);
  //foodObj.display(); 
  //46,139,87


  
   currentTime=hour();
   if(currentTime===(lastFed+1)){
     update("Playing");
     foodObj.garden();
   }else if(currentTime===(lastFed+2)){
    update("Sleeping");
    foodObj.bedroom();
   }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
    update("Bathing");
    foodObj.washroom();
   }else {
     update("Hungry");
     foodObj.display();
   }

   if(gameState!="Hungry"){
     //feed.hide();
     //addFood.hide();
     //dog.remove();
   } else{
     feed.show();
     addFood.show();
     dog.addImage(sadDog);
   }



  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour(),
    gameState:"Hungary"
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function update(state){
  database.ref('/').update({
    gameState:state
  });
}



//Create variables here
/*var dog,happyDog,database;
var foodS,foodStock;
var dogimg,hdogimg;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload()
{
  //load images here
  dogimg=loadImage("dogImg.png")
  happydogimg=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(1000, 400);

  foodObj=new Food();
  
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

  dog=createSprite(800,200,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15;

  
 
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)
  
}


function draw() {
  background(46,139,87)  

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed :"+ lastFed%12 +" PM",350,30);
  } else if(lastFed==0){
    text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed :"+ lastFed+ "AM",350,30);
  }

  drawSprites();
 

  foodObj.display();
}

function readstock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happydogimg)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
    Food:foodObj.getFoodStock(),
    fedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  }) 
}*/




