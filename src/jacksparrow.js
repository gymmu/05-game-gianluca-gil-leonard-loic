import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

export function JackSparrow(x, y) {
  k.add([
    k.sprite("jacksparrow", { anim: "idle" }),
    k.pos(x * TILESIZE + 16, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(1.6),
    "npc",
  ])
}

export function getJackSparrow() {
  return k.get("jacksparrow")[0]
}
