class MenuBox extends MenuComponent {

    constructor(x, y, width, height, options, title) {
        super(x, y, width, height);
        this.optionColor = "grey";
        this.selectedColor = "yellow";
        this.selected = 0;
        this.options = options;
        this.title = title;
        this.titleHeight = 100;
        this.optionWidth = this.width * 0.9;
        this.botMargin = (this.width - this.optionWidth) / 2;
        this.optionHeight = (this.height - this.titleHeight - this.botMargin) / this.options.length;
        this.setupOptions();
    }

    setupOptions() {
        this.options.forEach(option => {
            option.setBackgroundColor(this.optionColor);
            option.position.x = this.position.x;
            option.width = this.optionWidth;
            option.height = this.optionHeight;
        });
    }

    update(context) {
        let offsetFromTop = (context.canvas.height - this.height) / 2;

        for(let i = 0; i < this.options.length; i++) {
            let option = this.options[i];
            option.setBackgroundColor(this.optionColor);
            option.position.y = i * this.optionHeight + this.optionHeight / 2 + offsetFromTop + this.titleHeight;
            if(option.mouseOver()) {
                this.selected = i;
                option.setBackgroundColor(this.selectedColor);
            }
        }
    }

    drawAfter(context) {
        let titleLength = context.measureText(this.title).width;
        let offsetFromTop = (context.canvas.height - this.height) / 2;
        context.fillStyle = "white";
        context.font = this.font;
        context.fillText(this.title, this.position.x - titleLength, offsetFromTop + this.titleHeight / 2);
        this.options.forEach(option => option.draw(context));
    }

    setOptionColor(color) {
        this.optionColor = color;
    }

    setSelectedColor(color) {
        this.selectedColor = color;
    }

}