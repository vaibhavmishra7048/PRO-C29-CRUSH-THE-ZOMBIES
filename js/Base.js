class Base{
  constructor(x, y, w,h) 
  {
     var options = {
         isStatic:true
        };
     this.body=Bodies.rectangle(x,y,w,h,options);
     this.h=h;
     this.w=w;
     this.color=color;
     World.add(world,this.body);
    }
    show(){
     let pos = this.body.position;
     push(); 
     translate(pos.x, pos.y); 
     rectMode(CENTER);
     fill(this.color);
     rect(0,0,this.h,this.w);
     pop();
          
    }

}



   