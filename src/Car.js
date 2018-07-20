function Car() {
    this.sound = 'wrr'
}

Car.prototype.makeSound = function () {
    console.log(this.sound)
}


export default Car
