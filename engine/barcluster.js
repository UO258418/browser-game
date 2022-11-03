class BarCluster {

    constructor(model, distance = 5) {
        this.model = model;
        this.distance = distance;
        this.bars = [];
    }

    addBar(name, value, maxValue, width, height, primaryColor = "green", secondaryColor = "red") {
        let baseY = this.model.position.y - this.model.height / 2 - this.distance - height / 2;
        let bar = new Bar(this, this.bars.length, name, value, maxValue, this.model.position.x,
            baseY - (height * this.bars.length), width, height, primaryColor, secondaryColor);

        this.bars.push(bar);
    }

    update() {
        this.bars.forEach(bar => {
           bar.position.x = this.model.position.x;
           let baseY = this.model.position.y - this.model.height / 2 - this.distance - bar.height / 2;
           bar.position.y = baseY - (bar.height * bar.index);
        });
    }

    draw(camera) {
        this.bars.forEach(bar => bar.render(camera));
    }

}