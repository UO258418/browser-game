class MenuComponent {

    constructor(x, y, width, height) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.backgroundColor = "white";
    }

    draw(context) {
        context.fillStyle = this.backgroundColor;
        context.fillRect(this.position.x - this.width / 2, this.position.y - this.height / 2,
            this.width, this.height);

        this.drawAfter(context);
    }

    drawAfter(context) {

    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    mouseOver() {
        return mouseX >= this.position.x - this.width / 2
            && mouseX <= this.position.x + this.width / 2
            && mouseY >= this.position.y - this.height / 2
            && mouseY <= this.position.y + this.height / 2
    }

}