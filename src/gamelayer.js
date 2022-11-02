class GameLayer extends Layer {

    constructor() {
        super();
        this.init();
    }

    init() {
        this.world = new World(settings.worldSize, settings.tileSize);
        this.world.generateTiles();

        this.player = new Player(this.world.area / 2, this.world.area / 2);
        this.camera = new Camera(this.player);

        // Enemy to try
        this.enemy = new EnemyTrial(this.player.position.x - 100, this.player.position.y - 100,
            Tile.size / 12, this.player);

        /* input */
        this.input = new Input();

        // press
        this.input.WD = () => this.player.moveUp();
        this.input.DD = () => this.player.moveRight();
        this.input.SD = () => this.player.moveDown();
        this.input.AD = () => this.player.moveLeft();

        // release
        this.input.WU = () => this.player.stop();
        this.input.DU = () => this.player.stop();
        this.input.SU = () => this.player.stop();
        this.input.AU = () => this.player.stop();
    }

    processInput() {
        this.input.processInput();
    }

    update() {
        this.player.update(this.world);
        this.camera.update(this.world);
        this.enemy.update(this.world);
    }

    draw() {
        this.world.draw(this.camera);
        this.player.draw(this.camera);
        this.enemy.render(this.camera);
    }

}