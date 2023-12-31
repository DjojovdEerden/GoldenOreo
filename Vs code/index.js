const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

class Sprite { 
    constructor({positon}){
        this.positon = positon
        this.image=  new Image()
        this.image.src = './img/backgroundLevel1.png'

    }
    draw(){
        c.drawImage(this.image, this.positon.x, this.positon.y) 
    }
}

const backgroundLevel1 = new Sprite({
    positon:{  
        x: 0,
        y: 0,
    },
})

const player = new Player()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    backgroundLevel1.draw()
    player.velocity.x = 0 // snelheid
    if (keys.d.pressed) 
        player.velocity.x = 5
    else if (keys.a.pressed)
        player.velocity.x = -5

    player.draw()
    player.update()
}

animate()