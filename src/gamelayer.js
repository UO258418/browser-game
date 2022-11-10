class GameLayer extends Layer {

    constructor() {
        super();
        this.init();
    }

    init() {
        // Get the contexts
        this.contextWorld = ContextManager.getCanvasContext('wcanvas');
        this.contextGame = ContextManager.getCanvasContext('gcanvas');
        this.contextUI = ContextManager.getCanvasContext('uicanvas');

        this.world = new World(settings.worldSize, settings.tileSize);
        this.world.generateTiles();

        this.player = new Player(this.world.area / 2, this.world.area / 2);
        this.camera = new Camera(this.player, this.contextGame.canvas.width / 2,
            this.contextGame.canvas.height / 2);

        // Ammo existing
        this.ammo = [];

        this.collider = new Collider();

        // Enemies array
        this.enemies = [];

        // Drops
        this.drops = [];

        // Enemy spawner
        this.enemySpawner = new EnemySpawner(this.player, 100, 500);
        this.enemySpawner.registerEnemyType(Skeleton);
        this.enemySpawner.registerEnemyType(Goblin)

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

        // Initial things to be drawn
        this.world.draw(this.camera, this.contextWorld);
    }

    processInput() {
        this.input.processInput();
    }

    update() {
        this.player.update();
        this.camera.update(this.world, this.contextGame);
        this.enemySpawner.update(this.contextGame);

        // ammo
        this.ammo.forEach(ammo => {
            // update
            ammo.update();

            // remove if it is offscreen
            if (!ammo.isOnScreen(this.camera, this.contextGame))
                this.ammo.splice(this.ammo.indexOf(ammo), 1);

            // Check collisions with enemies
            this.enemies.forEach(enemy => {
                if(ammo.collides(enemy))
                    this.collider.ammoWithEnemy(ammo, enemy);
            });
        });

        // enemies
        this.enemies.forEach(enemy => {
            // update
            enemy.update();

            // Check collisions with the player
            if(this.player.collides(enemy)) {
                this.collider.playerWithEnemy(this.player, enemy);
            }
        });

        // drops
        this.drops.forEach(drop => {
            drop.update(); // update

            // Check collisions with player
            if(this.player.collides(drop)) {
                this.collider.playerWithDrop(this.player, drop);
            }
        });
    }

    draw() {
        // world context
        this.contextWorld.clearRect(0, 0, this.contextWorld.canvas.width, this.contextWorld.canvas.height); // clear
        this.world.draw(this.camera, this.contextWorld);

        // game context
        this.contextGame.clearRect(0, 0, this.contextGame.canvas.width, this.contextGame.canvas.height); // clear

        this.drops.forEach(drop => drop.render(this.camera, this.contextGame));
        this.enemies.forEach(enemy => enemy.render(this.camera, this.contextGame));
        this.ammo.forEach(ammo => ammo.render(this.camera, this.contextGame));
        this.player.draw(this.camera, this.contextGame); // draw player

        // UI context
        this.contextUI.clearRect(0, 0, this.contextUI.canvas.width, this.contextUI.canvas.height); // clear
    }

    removeFromCollection(collection, item) {
        let index = this[collection].indexOf(item);
        this[collection].splice(index, 1);
    }

}