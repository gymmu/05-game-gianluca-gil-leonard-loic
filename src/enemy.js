import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

export function Enemy(x, y) {
  k.add([
    k.sprite("enemy", { anim: "idle" }),
    k.pos(x * TILESIZE + 16, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(1),
    "enemies",
    {
      update() {
        const playerPos = getPlayerPos()
        const diffX = playerPos.x - this.pos.x
        const diffY = playerPos.y - this.pos.y
        if (Math.abs(diffX) < 32 && Math.abs(diffY) < 32) return
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
