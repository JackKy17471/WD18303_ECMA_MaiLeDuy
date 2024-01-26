Shape.prototype.move = function (x,y){
    this.y = y;
    this.x = x;
}

class Shape {
    constructor() {
      this.x = 0;
      this.y = 0;
    }
  
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  // Sử dụng class mới
  const myShape = new Shape();
  myShape.move(10, 20);
  console.log(myShape.x, myShape.y);
  
