class Turtle{
    constructor(ctx){
        this.ctx = ctx;
        this.pen = true;
    }

    forward(val){
        if (this.pen){
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(val, 0);
            this.ctx.stroke();
        }
        this.ctx.translate(val, 0);
    }

    backward(val){
        this.forward(-val);
    }

    rotateRight(val){
        this.ctx.rotate(val * Math.PI/180);
    }

    rotateLeft(val){
        this.ctx.rotate(-val * Math.PI/180);
    }

    penUP(){
        this.pen = false;
    }

    penDown(){
        this.pen = true;
    }

    centerTurtle(){
        this.ctx.restore();
        this.ctx.save();
    }

    clearScreen(){
        this.centerTurtle();
        this.ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    }
}