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

        // Ammo existing
        this.ammo = [];

        this.collider = new Collider();

        // Enemies array
        this.enemies = [];

        // Enemy spawner
        this.enemySpawner = new EnemySpawner(this.player, 100, 1000);
        this.enemySpawner.registerEnemyType(EnemyTrial);

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
        this.enemySpawner.update();

        this.ammo.forEach(ammo => ammo.update(this.world));
        this.enemies.forEach(enemy => enemy.update());

        // remove ammo outside the screen
        this.ammo.forEach(ammo => {
            if (!ammo.isOnScreen(this.camera))
                this.ammo.splice(this.ammo.indexOf(ammo), 1);
        });

        // check if player is colliding with enemies
        this.enemies.forEach(enemy => {
            if(this.player.collides(enemy)) {
                this.collider.playerWithEnemy(this.player, enemy);
            }
        });

        // check for ammo collisions with enemies
        this.ammo.forEach(ammo => {
           this.enemies.forEach(enemy => {
              if(ammo.collides(enemy))
                  this.collider.ammoWithEnemy(ammo, enemy);
           });
        });
    }

    draw() {
        this.world.draw(this.camera); // draw world

        this.enemies.forEach(enemy => {
            enemy.render(this.camera);
            enemy.drawCollisionBox(this.camera);
        });

        this.ammo.forEach(ammo => {
            ammo.render(this.camera);
            ammo.drawCollisionBox(this.camera);
        });

        this.player.draw(this.camera); // draw player
        this.player.drawCollisionBox(this.camera);
    }

}