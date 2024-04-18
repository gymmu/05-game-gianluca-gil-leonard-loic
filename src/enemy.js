import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

export function Enemy(x, y) {
  k.add([
    k.sprite("enemy", { anim: "idle" }),
    k.pos(x * TILESIZE + 16, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(1),
    "enemy",
    {
      update() {
        const player = k.get("player")[0]
        if (player && this.isColliding(player, "player")) {
          player.hurt(10) // Assuming player has a `hurt` method
          this.destroy()
        }
        const playerPos = getPlayerPos()
        const diffX = playerPos.x - this.pos.x
        const diffY = playerPos.y - this.pos.y
        if (Math.abs(diffX) < 0 && Math.abs(diffY) < 0) return
        const angle = Math.atan2(diffY, diffX)
        this.move(Math.cos(angle) * 100, Math.sin(angle) * 100)
      },
    },
  ])
}

function getPlayerPos() {
  const player = k.get("player")[0]
  return player ? player.pos : k.vec2(0, 0)
}
