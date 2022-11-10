class FPSCounter {

    constructor(context, font = "30px Arial") {
        this.lastFrame = new Date();
        this.lastRefreshed = 0;
        this.current = null;
        this.refreshTime = 500;
        this.fps = 0;
        this.frameTimes = [];
        this.context = context;
        this.setFont(font);
    }

    update() {
        this.current = new Date();
        let ellapsed = this.current - this.lastFrame;
        this.lastRefreshed += ellapsed;
        this.frameTimes.push(ellapsed);
        if(this.lastRefreshed >= this.refreshTime) {
            let avgFrameTime = this.frameTimes.reduce((partialSum, ft) => partialSum + ft, 0) / this.frameTimes.length;
            this.fps = 1000 / avgFrameTime;
            this.lastRefreshed = 0;
            this.frameTimes = [];
        }
        this.lastFrame = this.current;
    }

    setFont(font = "30px Arial") {
        this.font = font;
        this.context.font = this.font;
    }

    draw() {
        this.context.fillStyle = "black";
        this.context.fillText("FPS: " + Math.round(this.fps), this.context.canvas.width *  0.05,
            this.context.canvas.height * 0.1);
    }

}