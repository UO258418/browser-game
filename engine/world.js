class World {

    constructor(size, tileSize) {
        this.size = size;
        this.tileSize = tileSize;
        Tile.setSize(this.tileSize);
        this.tiles = [];
        this.area = this.size * this.tileSize;
    }

    generateTiles() {
        for(let i = 0; i < this.size; i++) {
            let row = []
            for(let j = 0; j < this.size; j++) {
                let tile = this.generateTile(i, j);
                row.push(tile);
            } 
           this.tiles.push(row);
        }
    }

    draw(camera) {
        for(let row = 0; row < this.tiles.length; row++) {
            this.tiles[row].forEach(tile => tile.render(camera));
        }
    }

    generateTile(i, j) {
        let perlin = new Perlin2D();

        let x = map(j, 0, this.size, 0, 1) * settings.perlinSpread;
        let y = map(i, 0, this.size, 0, 1) * settings.perlinSpread;

        let h = perlin.perlin2D(x, y);

        let tile = Water;    

        if(h >= 0.3) tile = Sand;
        if(h >= 0.35)  tile = Grass;
        if(h >= 0.75) tile = Snow;

        return new tile(j * this.tileSize + this.tileSize / 2, 
            i * this.tileSize + this.tileSize / 2);
    }

}