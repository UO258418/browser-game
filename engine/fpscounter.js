class FPSCounter {

    constructor(font = "30px Arial") {
        this.last = new Date();
        this.current = null;
        this.setFont(font);
        this.lastRefreshed = 0;
        this.refreshTime = 500;
        this.fps = 0;
    }

    calculateFPS() {
        this.current = new Date();
        let ellapsed = this.current - this.last;
        this.lastRefreshed += ellapsed;
        if(this.lastRefreshed >= this.refreshTime) {
            this.fps = 1000 / ellapsed;
            this.lastRefreshed = 0;
        }
        this.last = this.current;
        return Math.round(this.fps);
    }

    setFont(font = "30px Arial") {
        this.font = font;
        ctx.font = this.font;
    }

    draw() {
        ctx.fillText("FPS: " + this.calculateFPS(), 
            ctx.canvas.width *  0.05, ctx.canvas.height * 0.1);
    }

}