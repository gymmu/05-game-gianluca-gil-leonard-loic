import { k, addGeneralGameLogic } from "../game.js"
import createPlayer from "../player.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./level-02.js"

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

  k.onCollide("player", "door", (player) => {
    if (player.hasKey === true) {
      k.go("level-02")
    }
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.hasKey = true
  })
})
