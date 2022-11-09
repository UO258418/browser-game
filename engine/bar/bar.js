class Bar extends Model {

    constructor(cluster, index, name, value, maxValue, x, y, width, height, primaryColor, secondaryColor) {
        super(x, y, width, height);
        this.cluster = cluster;
        this.index = index;
        this.name = name;
        this.value = value;
        this.maxValue = maxValue;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
    }

    draw(camera, context) {
        context.fillStyle = this.secondaryColor;
        context.fillRect(this.position.x - this.width / 2 - camera.offset.x,
                 this.position.y - this.height / 2 - camera.offset.y,
                    this.width, this.height);

        context.fillStyle = this.primaryColor;
        context.fillRect(this.position.x - this.width / 2 - camera.offset.x,
                 this.position.y - this.height / 2 - camera.offset.y,
                    map(this.cluster.model[this.value], 0, this.cluster.model[this.maxValue],
                        0, this.width), this.height);
    }

}