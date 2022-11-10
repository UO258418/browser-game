class EnemySpawner {

    constructor(target, margin, cooldown, offset = 30) {
        this.target = target;
        this.enemyTypes = [];
        this.margin = margin;
        this.offset = offset;
        this.cooldown = cooldown;
        this.current = null;
        this.lastSpawn = new Date();
    }

    update(context) {
        this.current = new Date();
        let ellapsed = this.current - this.lastSpawn;
        if(ellapsed >= this.cooldown) {
            this.spawn(context);
            this.lastSpawn = this.current;
        }
    }

    registerEnemyType(enemyType) {
        this.enemyTypes.push(enemyType);
    }

    getSpawnArea(context) {
        return {
            // Outer border of the spawn area
            topOuterBorder: this.target.position.y - context.canvas.height / 2 - this.margin,
            rightOuterBorder: this.target.position.x + context.canvas.width / 2 + this.margin,
            botOuterBorder: this.target.position.y + context.canvas.height / 2 + this.margin,
            leftOuterBorder: this.target.position.x - context.canvas.width / 2 - this.margin,

            // Inner border of the spawn area
            topInnerBorder: this.target.position.y - context.canvas.height / 2 - this.offset,
            rightInnerBorder: this.target.position.x + context.canvas.width / 2 + this.offset,
            botInnerBorder: this.target.position.y + context.canvas.height / 2 + this.offset,
            leftInnerBorder: this.target.position.x - context.canvas.width / 2 - this.offset
        }
    }

    spawn(context) {
        let spawnArea = this.getSpawnArea(context);

        let randomX, randomY;

        let spawnFunctions = [
            () => { // Spawn top
                randomX = getRandomArbitrary(spawnArea.leftInnerBorder, spawnArea.rightInnerBorder);
                randomY = getRandomArbitrary(spawnArea.topOuterBorder, spawnArea.topInnerBorder);
            },
            () => { // Spawn right
                randomX = getRandomArbitrary(spawnArea.rightInnerBorder, spawnArea.rightOuterBorder);
                randomY = getRandomArbitrary(spawnArea.topOuterBorder, spawnArea.botOuterBorder);
            },
            () => { // Spawn bot
                randomX = getRandomArbitrary(spawnArea.leftInnerBorder, spawnArea.rightInnerBorder);
                randomY = getRandomArbitrary(spawnArea.botInnerBorder, spawnArea.botOuterBorder);
            },
            () => { // Spawn left
                randomX = getRandomArbitrary(spawnArea.leftOuterBorder, spawnArea.leftInnerBorder);
                randomY = getRandomArbitrary(spawnArea.topOuterBorder, spawnArea.botOuterBorder);
            }
        ]

        spawnFunctions[Math.floor(Math.random() * spawnFunctions.length)]();

        let randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
        gameLayer.enemies.push(new randomEnemy(randomX, randomY, this.target));
    }

}