import { k, addGeneralGameLogic } from "../game.js"
import createPlayer from "../player.js"
import createTrail from "../attack.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-01", async () => {
  k.setGravity(0)
  createPlayer()
  loadKeyboardRPG()

  await generateMapRPG("maps/level-01.txt")

  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.hasKey === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.hasKey = true
  })
})
