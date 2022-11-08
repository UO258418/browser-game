

class Collider {

    constructor() {

    }

    playerWithEnemy(player, enemy) {
        player.takeDamage(enemy.damage);
    }

    ammoWithEnemy(ammo, enemy) {
        enemy.takeDamage(ammo.damage);
        if(enemy.hp == 0) {
            gameLayer.removeFromCollection("enemies", enemy);

            // Create drop
            gameLayer.drops.push(new Blood(enemy.position.x, enemy.position.y, gameLayer.player));
        }
    }

    playerWithDrop(player, drop) {
        player.collect(drop);
        gameLayer.removeFromCollection("drops", drop);
    }

}