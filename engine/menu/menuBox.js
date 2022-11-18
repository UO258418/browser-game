class MenuBox extends MenuComponent {

    constructor(x, y, width, height, options) {
        super(x, y, width, height);
        this.optionColor = "grey";
        this.selectedColor = "yellow";
        this.selected = 0;
        this.options = options;
        this.optionWidth = this.width * 0.9;
        this.optionHeight = this.height / this.options.length;
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
            option.position.y = i * this.optionHeight + this.optionHeight / 2 + offsetFromTop;
            if(option.mouseOver()) {
                this.selected = i;
                option.setBackgroundColor(this.selectedColor);
            }
        }
    }

    drawAfter(context) {
        this.options.forEach(option => option.draw(context));
    }

    setOptionColor(color) {
        this.optionColor = color;
    }

    setSelectedColor(color) {
        this.selectedColor = color;
    }

}