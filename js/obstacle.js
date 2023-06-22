class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = Math.floor(Math.random() * 500 + 70)
        this.top = -150
        this.width = 100
        this.height = 150
        this.element = document.createElement("img")
        this.element.src = "./images/redCar.png"
        this.element.style.position = "absolute"
        this.gameScreen.appendChild(this.element)
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
    };

    move() {
        this.top += 3
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }


}
