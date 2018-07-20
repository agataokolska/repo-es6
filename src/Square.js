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
    }

    attachSquare(){
        this.container.appendChild(this.square)
    }
}

export class RedSquare extends Square {
    constructor(selector,color){
        super(selector)
        this.square.style.backgroundColor = 'red'
        this.whenClicked()
    }

    whenClicked(){
        this.square.addEventListener('click', function(){alert('Kliknałeś w czerwony przycisk')})
    }
}