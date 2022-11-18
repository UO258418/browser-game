class UpgradeOption extends MenuOption {

    constructor(description) {
        super();
        this.description = description;
        this.setBorder({color: "#cccc00", width: 2});
    }

    drawAfter(context) {
        context.fillStyle = "white";
        context.font = this.font;
        context.fillText(this.description, this.position.x, this.position.y);
    }

}