import { k, addGeneralGameLogic } from "../game.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-03", async () => {
  k.setGravity(0)
  loadKeyboardRPG()

  await generateMapRPG("maps/level-03.txt")

  k.add([
    k.sprite("background", { width: k.width(), height: k.height() }),
    k.pos(0, 0),
    k.z(-100),
    k.fixed(),
  ])

  addGeneralGameLogic()

  k.onCollide("player", "door", (player) => {
    if (player.hasKey === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.hasKey = true
  })
})
