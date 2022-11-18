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

        this.collider = new Collider(); // Collider

        // Ammo existing
        this.ammo = [];

        // Enemies existing
        this.enemies = [];

        // Drops existing
        this.drops = [];

        // Player
        this.player = new Player(this.world.area / 2, this.world.area / 2);

        // Camera
        this.camera = new Camera(this.player, this.contextGame.canvas.width / 2,
            this.contextGame.canvas.height / 2);


        // Enemy spawner
        this.enemySpawner = new EnemySpawner(this.player, 100, 500);
        this.enemySpawner.registerEnemyType(Skeleton);
        this.enemySpawner.registerEnemyType(Goblin);

        // Experience bar
        this.expBar = new ExpBar(this.contextGame.canvas.width / 2,
            this.contextGame.canvas.height * uiSettings.expBarHeight / 2, this.contextGame.canvas.width,
            this.contextGame.canvas.height * uiSettings.expBarHeight, this.player);

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

        // save methods while on pause
        this.updateFunction = null;
        this.drawFunction = null;
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
        this.expBar.draw(this.contextUI);
    }

    removeFromCollection(collection, item) {
        let index = this[collection].indexOf(item);
        this[collection].splice(index, 1);
    }

    pause(pauseFunctions = {}) {
        if(this.updateFunction == null)
            this.updateFunction = this.update;

        if(this.drawFunction == null)
            this.drawFunction = this.draw;

        this.update = pauseFunctions.update || function () {};
        this.draw = pauseFunctions.draw || function () {};
    }

    resume(beforeResume) {
        if(beforeResume)
            beforeResume();

        this.update = this.updateFunction;
        this.draw = this.drawFunction;
    }

    playerLevelUp() {
        let canvasWidth = this.contextUI.canvas.width;
        let canvasHeight = this.contextUI.canvas.height;
        let options = [
            new UpgradeOption("Option 1"),
            new UpgradeOption("Option 2"),
            new UpgradeOption("Option 3"),
        ];
        let menu = new LevelUpMenu(canvasWidth / 2, canvasHeight / 2,
            canvasWidth * 0.3, canvasHeight * 0.6, options);
        menu.setBackgroundColor("rgb(102, 102, 255)");
        menu.setOptionColor("rgb(153, 153, 159)");
        menu.setBorder({color: "#cccc00", width: 2});

        let pauseFunctions = {
            update: () => {
                menu.update(this.contextUI);
            },
            draw: () => {
                this.contextUI.clearRect(0, 0, this.contextUI.canvas.width, this.contextUI.canvas.height);
                menu.draw(this.contextUI);
            }
        }

        this.contextUI.canvas.style.cursor = 'url(https://ani.cursors-4u.net/cursors/cur-13/cur1163.ani), ' +
            'url(https://ani.cursors-4u.net/cursors/cur-13/cur1163.png), auto';
        this.pause(pauseFunctions);
        window.onmousedown = () => {
            options.forEach(option => {
                if(option.mouseOver()) {
                    console.log(option.description);
                    this.resume(() => {
                       window.onmousedown = null;
                       this.contextUI.canvas.style.cursor = 'none';
                    });
                }
            });
        }
    }

}