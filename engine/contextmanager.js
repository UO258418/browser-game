class ContextManager {

    static contexts = {};

    static registerContext(canvasName) {
        const canvas = document.getElementById(canvasName);
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        this.contexts[canvasName] = ctx;
    }

    static getCanvasContext(canvasName) {
        return this.contexts[canvasName];
    }

}