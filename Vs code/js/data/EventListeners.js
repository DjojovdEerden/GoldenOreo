window.addEventListener('keydown', (event) => {
    console.log(event)
    switch (event.key) {
        case 'w': // sprong kracht
            if (player.velocity.y === 0) player.velocity.y = -20

            break
        case 'a': // gaat naar links
            keys.a.pressed = true
            break
        case 'd': // gaat naar rechts
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event)
    switch (event.key) {
        case 'a': // gaat naar links
            keys.a.pressed = false
            break
        case 'd': // gaat naar rechts
            keys.d.pressed = false
            break
    }
})