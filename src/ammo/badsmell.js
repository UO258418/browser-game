class BadSmell extends Area {

    constructor(center) {
        super(center, 100, 100, 4, 6000);
    }

   _draw(camera) {
       let gradient = ctx.createRadialGradient(this.position.x - camera.offset.x,
           this.position.y - camera.offset.y, 0, this.position.x - camera.offset.x,
           this.position.y - camera.offset.y, (this.width + this.height) / 2);

       gradient.addColorStop(0,'rgba(0, 102, 0, 0.6)');
       gradient.addColorStop(1, 'rgba(51, 204, 51, 0.6)');

       this.color = gradient;
   }

}