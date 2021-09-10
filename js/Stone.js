class Stone{
    constructor(x,y,h,w){
        var options={
            restitution:0.08
            }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.h=h;
    this.w=w;
    this.color=color;
    World.add(world.this.body);

    }
    show(){
       let pos = this.body.position;
         push(); translate(pos.x, pos.y); 
         strokeWeight(1); fill("white");
          ellipseMode(CENTER);
           ellipse(0, 0, this.w, this.h);
            noStroke(); 
            pop();

    }



}