import { TILESIZE } from "./globals.js"
import { k } from "./game.js"

export default function createJackSparrow() {
  const jacksparrow = k.add([
    k.sprite("jacksparrow", { anim: "idle1" }),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.area(),
    k.body({ isStatic: true }),

    "npc",
  ])
  //
  //  jacksparrow.onCollide(
  //    (obj) => obj.isNot("player"),
  //    () => {},
  //  )
}

export function getJackSparrow() {
  return k.get("jacksparrow")[0]
}
