class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }
    

    display(){
      background(46,139,87);

      fill(255,255,254);
      textSize(15);
      if(lastFed>=12){
        text("Last Feed : "+ lastFed%12 + " PM", 200,30);
       }else if(lastFed==0){
         text("Last Feed : 12 AM",200,30);
       }else{
         text("Last Feed : "+ lastFed + " AM", 200,30);
       }


      var x=40,y=50;
      
      imageMode(CENTER);
      image(this.image,100,420,80,80);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=40;
            y=y+80;
          }
          image(this.image,x,y,80,80);
          x=x+30;
        }
      }
    }


    bedroom(){
      background(bed,550,500);
      feed.hide();
      addFood.hide();
      dog.remove();  
  }
    
  garden(){
      background(garden,550,500);
      feed.hide();
      addFood.hide();
      dog.remove();   
  } 

  washroom(){
      background(wc,550,500);
      feed.hide();
      addFood.hide();
      dog.remove();  
  }
}





/*class Food{
    constructor(){
        
        this.foodStock
        this. lastFed

        this.milk=loadImage("Milk.png");   
    }

    getFoodStock(){}

    updateFoodStock(){}

    deductFood(){}

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.milk,600,400,100,100);

        if(this.foodStock=20){
            for(var i=0; i<this.foodStock; i++){
                if (i%10==0){
                    x=80;
                    y=y+100;
                }
                image(this.milk,x,y,100,100);
                x=x+50;
            }
        }

       // console.log(this.getFoodStock);
    }

}*/