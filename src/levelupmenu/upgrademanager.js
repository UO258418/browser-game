class UpgradeManager {

    constructor() {
        this.upgrades = [];
        this.upgradePool = 3;
    }

    getUpgrades() {
        let upgradeIndexes = generateRandomUniqueNumbers(this.upgradePool, 0, this.upgrades.length);
        let chosenUpgrades = [];
        upgradeIndexes.forEach(index => chosenUpgrades.push(this.upgrades[index]));
        return chosenUpgrades;
    }

    removeUpgrade(upgrade) {
        let indexOfUpgrade = this.upgrades.indexOf(upgrade);
        this.upgrades.splice(indexOfUpgrade, 1);
    }

}