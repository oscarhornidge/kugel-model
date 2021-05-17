input.onGesture(Gesture.TiltRight, function () {
    Kugel.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoUp, function () {
    Kugel.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Kugel.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    Kugel.change(LedSpriteProperty.Y, -1)
})
let Kugel: game.LedSprite = null
Kugel = game.createSprite(2, 2)
