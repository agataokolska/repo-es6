class Car {
    constructor (model){
   
    this.model = model

    }
    sound = 'wrr' 
    // makeSound = () => {    jeśli w taki sposób w klasie napiszemy to babel zinterpretuje to jako przypisanie makeSound jako właściwości obiektu 
    //     console.log(this.sound)
    // }

    makeSound() {
        console.log(this.sound)
    }
}


export default Car
