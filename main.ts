function CreateAlienShip () {
    AlienShips = sprites.create(assets.image`AlienShip`, SpriteKind.Enemy)
    AlienShips.setPosition(154, 0)
    for (let index = 0; index < 10; index++) {
        pause(500)
        AlienShips.x += -7
        AlienShips.y += 7
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(assets.image`ProjectileBullet`, PlayerShip, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    music.smallCrash.play()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    EnemyCounter = EnemyCounter - 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
    music.sonar.play()
})
let projectile: Sprite = null
let AlienShips: Sprite = null
let PlayerShip: Sprite = null
let EnemyCounter = 0
EnemyCounter = 0
effects.starField.startScreenEffect(500)
PlayerShip = sprites.create(assets.image`GradShip`, SpriteKind.Player)
controller.moveSprite(PlayerShip, 200, 200)
PlayerShip.setStayInScreen(true)
PlayerShip.setPosition(13, 48)
info.setLife(3)
for (let index = 0; index < 2; index++) {
    CreateAlienShip()
    pause(200)
}
game.onUpdateInterval(100, function () {
	
})
