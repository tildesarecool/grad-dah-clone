controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(assets.image`ProjectileBullet`, PlayerShip, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    if (EnemyCounter > 0) {
        EnemyCounter = 0
    }
    info.changeScoreBy(1)
    music.sonar.play()
})
let projectile: Sprite = null
let PlayerShip: Sprite = null
let EnemyCounter = 0
EnemyCounter = 0
effects.starField.startScreenEffect(500)
PlayerShip = sprites.create(assets.image`GradShip`, SpriteKind.Player)
let AlienShips = sprites.create(assets.image`AlienShip`, SpriteKind.Enemy)
controller.moveSprite(PlayerShip, 200, 200)
PlayerShip.setStayInScreen(true)
PlayerShip.setPosition(13, 48)
info.setLife(3)
game.onUpdateInterval(100, function () {
    if (EnemyCounter == 0) {
        AlienShips.setPosition(111, randint(1, scene.screenHeight()))
        EnemyCounter += 1
    } else {
        AlienShips.setBounceOnWall(true)
    }
})
