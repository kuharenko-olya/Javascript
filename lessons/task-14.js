class Chinchilla {
    #gender;
    #eyesColor;
    static address = 'roof';

    constructor(gender, eyesColor) {
        this.#gender = gender;
        this.#eyesColor = eyesColor;
    }

    seeInTheDark() {
        console.log('I can see in the dark');
    }

    getGender() {
        return this.#gender;
    }

    getEyesColor() {
        return this.#eyesColor;
    }
}

const chinchilla = new Chinchilla("female", 'grey');
console.log(chinchilla.getGender());
console.log(chinchilla.getEyesColor());
//chinchilla.#gender;
//chinchilla.#eyesColor;
console.log(Chinchilla.address);
