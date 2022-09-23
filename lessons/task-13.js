class Mammal {
    feedMilk() {
        console.log('I am mammal');
    }
}

class Rodents extends Mammal {
    gnawThings() {
        console.log('I can gnaw things');
    }
}

class Chinchillidae extends Rodents {
    constructor() {
        super();
        this.hasBroadMuzzle = true;
        this.hasRoundedEars = true;
    }
}

class Chinchilla extends Chinchillidae {
    constructor(name) {
        super();
        this.name = name
    }

    seeInTheDark() {
        console.log('I can see in the dark');
    }
}

const chinchilla = new Chinchilla();
chinchilla.seeInTheDark();
chinchilla.feedMilk();
chinchilla.gnawThings();
console.log(`chinchilla has rounded ears - ${chinchilla.hasRoundedEars}`);
console.log(`chinchilla has broad muzzle - ${chinchilla.hasBroadMuzzle}`);
