class UpgradeOption extends MenuOption {

    constructor(description) {
        super();
        this.description = description;
        this.font = "20px Courier New";
    }

    drawAfter(context) {
        context.fillStyle = "black";
        context.font = this.font;
        context.fillText(this.description, this.position.x, this.position.y);
    }

}