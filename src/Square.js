export class Square{
    constructor(selector, color){
        this.container = document.querySelector(selector)
        this.square = null
        this.color = color

        this.makeSquare()
        this.attachSquare()
        this.attachClickListener()
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

    attachClickListener(){
        // this.square.addEventListener('click', function(){alert('Kliknałeś w ' + this.color +  'przycisk')}) w przypadku zwyklej funkcji gubimy this dlatego nalezy użyć funkcji strzałkowej któtrej kontekst wywołania jest w miejscu zadeklarowania
        this.square.addEventListener('click', this.whenClicked)
    }

    whenClicked = () => {alert('Kliknałeś w ' + this.color +  ' przycisk')}

    attachSquare(){
        this.container.appendChild(this.square)
    }
}

export class RedSquare extends Square {
    constructor(selector,){
        super(selector,'red')   
    }
}