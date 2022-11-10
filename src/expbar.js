class ExpBar extends CustomBar {

    constructor(x, y, width, height, supplier) {
        super(x, y, width, height, supplier, "exp", "maxExp", 'rgb(0, 102, 255)', "black");
        this.fontSize = this.height * 0.8;
    }

    drawAfter(context) {
        context.font = this.fontSize + "px Courier New";
        context.strokeStyle = '#cccc00';
        context.lineWidth = 3;
        context.strokeRect(this.position.x - this.width / 2, this.position.y - this.height / 2,
            this.width, this.height);

        context.fillStyle = "white";
        context.fillText("LV " + this.supplier.level,this.width * 0.95, this.height * 0.75);
    }

}