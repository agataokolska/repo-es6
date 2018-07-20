export class Vehicle {
    constructor(sound) {
        this.sound = sound
    }
    makeSound() {
        console.log(this.sound)
    }
}


export class Car extends Vehicle {
    constructor() {
        super('Wrrr')
        this.wheels = 4
        this.fuelTank = true
    }
}
