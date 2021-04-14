class bwalls{

    constructor(x,y,width,height){
    
    var options = {
    
    restitution : 0.5,
     density:0.7,
    friction:1
    }
    this.width=width
    this.height=height;
    this.visiblity=255
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    console.log(this.body.speed)
    
    }
    
    display(){
   
      var pos = this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle)      
      rectMode(CENTER)

      fill("blue")
      rect(0,0,this.width,this.height)
          pop();
      
   
   
      /*
      if((this.body.speed)<3)
      {

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.width,this.height)
      
        pop();
        

      }else
      {
      
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity)
      
      var pos = this.body.position;
      //do thing
      translate(pos.x,pos.y);
      rectMode(CENTER)
      fill("blue")
      rect(0,0,this.width,this.height)
      pop();
    World.remove(world,this.body)
    var pos = this.body.position;
      }
    
*/    
    }
  }
