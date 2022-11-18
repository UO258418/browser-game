class MenuComponent {

    constructor(x, y, width, height, font = "20px Courier New") {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.backgroundColor = "white";
        this.border = null;
        this.font = font;
    }

    draw(context) {
        context.fillStyle = this.backgroundColor;
        context.fillRect(this.position.x - this.width / 2, this.position.y - this.height / 2,
            this.width, this.height);

        if(this.border) {
            context.strokeStyle = this.border.color;
            context.lineWidth = this.border.width;
            context.strokeRect(this.position.x - this.width / 2, this.position.y - this.height / 2,
                this.width, this.height);
        }

        this.drawAfter(context);
    }

    drawAfter(context) {

    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    setBorder(border) {
        this.border = border;
    }

    mouseOver() {
        return mouseX >= this.position.x - this.width / 2
            && mouseX <= this.position.x + this.width / 2
            && mouseY >= this.position.y - this.height / 2
            && mouseY <= this.position.y + this.height / 2
    }

}