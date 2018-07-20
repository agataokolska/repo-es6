export class Square{
    constructor(selector, color){
        this.container = document.querySelector(selector)
        this.square = null
        this.color = color

        this.makeSquare()
        this.attachSquare()
    }


    makeSquare(){
        const square = document.createElement('div')
        square.style.width = '100px'
        square.style.height = '100px'
        square.style.backgroundColor = this.color
        this.square = square

        // this.square = document.createElement('div')
        // this.square.style.width = '100px'
        // this.square.style.height = '100px'
        // this.square.style.backgroundColor = this.color
        
    }

    attachSquare(){
        this.container.appendChild(this.square)
    }
}

export class RedSquare extends Square {
    constructor(selector,){
        super(selector,'red')
        this.whenClicked()
    }

    whenClicked(){
        this.square.addEventListener('click', function(){alert('Kliknałeś w czerwony przycisk')})
    }
}