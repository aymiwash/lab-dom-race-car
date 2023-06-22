class Game {
    // code to be added
    constructor() {
        this.startScreen = document.querySelector("#game-intro")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-screen")
        this.player = new Player(this.gameScreen, 200, 500, 80, 120, "./images/car.png")
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
    }

    start() {
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameloop()
    }

    gameloop() {
        if (this.gameIsOver) {
            
            return
        }

        this.update()

        //requesAnimationFrame permet de faire une loop en fonction du taux de rafraichissement de l'écran de l'user
        requestAnimationFrame(()=>this.gameloop())
    }

    update() {
        console.log(`updating`);
        this.player.move()

        if(this.lives <= 0){
            this.gameIsOver = true
        }
        
        if(Math.random() > 0.98 && this.obstacles.length < 1){
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        this.obstacles.forEach((obstacle)=>{
            if(this.player.didCollide(obstacle)){
                this.lives -= 1
                obstacle.element.remove()

            }
        })
    }



}