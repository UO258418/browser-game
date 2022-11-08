

class Collider {

    constructor() {

    }

    playerWithEnemy(player, enemy) {
        player.takeDamage(enemy.damage);
    }

    ammoWithEnemy(ammo, enemy){
        enemy.takeDamage(ammo.damage);
        if(enemy.hp == 0) {
            let index = gameLayer.enemies.indexOf(enemy);
            gameLayer.enemies.splice(index, 1);
        }
    }

}