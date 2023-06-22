class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement("img")
        this.element.src = imgSrc
        this.element.style.position = "absolute"
        this.gameScreen.appendChild(this.element)
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
    }

    move() {
        this.left += this.directionX
        this.top += this.directionY

        if (this.left < 10) {
            this.left = 10
        }
        if (this.top < 10) {
            this.top = 10
        }
        if (this.left > this.gameScreen.width - this.width - 10) {
            this.left > this.gameScreen.width - this.width - 10
        }
        if (this.top > this.gameScreen.height - this.height - 10) {
            this.top > this.gameScreen.height - this.height - 10
        }
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    //getBoundingClientRect permet de récuperer la position de chaque côté de l'élement

    didCollide(obstacles) {
        const obstaclesPosition = obstacles.getBoundingClientRect()
        const playerSizePosition = this.element.getBoundingClientRect()
        if (playerSizePosition.left < obstaclesPosition.right && playerSizePosition.right > obstaclesPosition.left && playerSizePosition.top < obstaclesPosition.bottom && playerSizePosition.bottom > obstaclesPosition.top) {
            return true
        }
        return false
    }


}