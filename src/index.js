// console.log('running....');
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
};

// Log each item in Robin's inventory using a loop
for (const item of adventurer.inventory) {
    console.log(item);
}

// Add a companion to the adventurer
adventurer.companion = {
    name: "Leo",
    type: "Cat",
    companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
    }
};

// Add a roll method to the adventurer
adventurer.roll = function(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
};

// Test the roll method
adventurer.roll();
adventurer.roll(2);

// Part 2: Class Fantasy

// Create a Character class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    // Add the roll method to the Character class
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create a new character using the Character class
const robin1 = new Character("Robin");
robin1.inventory = ["sword", "potion", "artifact"];

// Create companions using the Character class
robin1.companion = new Character("Leo");
robin1.companion.type = "Cat";
robin1.companion.companion = new Character("Frank");
robin1.companion.companion.type = "Flea";
robin1.companion.companion.inventory = ["small hat", "sunglasses"];

// Test the roll method for both the adventurer and companions
robin1.roll();
robin1.companion.roll();
robin1.companion.companion.roll();

// Part 3: Class Features

// Create an adventure class that extends the character class

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    //additional methods for adventures
    usePotion() {
        console.log(`${this.name} uses a healing potion.`);
        this.health += 20;
    }
}
// create a companion class that extends the character class
class companion extends Character {
    constructor(name, type, belongings) {
        super(name);
        this.type = type;
        this.belongings = belongings || [];
    }

    //additional method for compantion
    fetch() {
        console.log(`${this.name} fetches and item.`);
    }
}

const robin = new Adventurer("Robin", "Rogue");
robin.scout(); // Test the scout method
robin.usePotion(); // Test the usePotion method
console.log(robin);

robin.companion = new companion("Leo", "Cat", ["small hat", "sunglasses"]);
robin.companion.companion = new companion("Frank", "Flea", ["tiny hat", "collar"]);
robin.companion.companion.fetch(); // Test the fetch method
console.log(robin);

//Part 4: Class Uniforms

//Create a character class

class Character1 {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character1.MAX_HEALTH;
        this.inventory = [];

    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

//create an adventurer class that extents character class

class Adventurer1 extends Character1 {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);

        // Adventurers have specialized roles
        if (!Adventurer1.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Supported roles are ${Adventurer1.ROLES.join(", ")}`);
        }
        this.role = role;
        // Every Adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    usePotion() {
        console.log(`${this.name} uses a healing potion.`);
        this.health += 20;
    }
}

class Companion1 extends Character1 {
    constructor(name, type, belongings) {
        super(name);
        this.type = type;
        this.belongings = belongings || [];
    }

    // Additional method for companions
    fetch() {
        console.log(`${this.name} fetches an item.`);
    }
}

console.log(Character1.MAX_HEALTH);
console.log(Adventurer1.ROLES);

const robin2 = new Adventurer1("Robin", "Fighter");
console.log(robin2);