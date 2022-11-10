class CustomBar extends Model {

    constructor(x, y, width, height, supplier, value, maxValue, primaryColor, secondaryColor) {
        super(x, y, width, height);
        this.supplier = supplier;
        this.value = value;
        this.maxValue = maxValue;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
    }

    draw(context) {
        context.fillStyle = this.secondaryColor;
        context.fillRect(this.position.x - this.width / 2, this.position.y - this.height / 2,
            this.width, this.height);

        context.fillStyle = this.primaryColor;
        context.fillRect(this.position.x - this.width / 2,this.position.y - this.height / 2,
            map(this.supplier[this.value], 0, this.supplier[this.maxValue], 0, this.width), this.height);

        this.drawAfter(context);
    }

    drawAfter(context) {

    }

}