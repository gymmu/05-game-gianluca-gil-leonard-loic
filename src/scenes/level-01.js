import { k, addGeneralGameLogic } from "../game.js"
import createPlayer from "../player.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./level-02.js"
import { JackSparrow } from "../jacksparrow.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-01", async () => {
  k.setGravity(0)
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
  k.onCollide("player", "npc", (player, jacksparrow) => {
    let boxBack = k.add([
      k.pos(jacksparrow.pos.add(64, -56)),
      k.rect(420, 110),
      k.color(207, 185, 151),
      k.anchor("center"),
      k.outline(5, rgb(160, 140, 100)),
    ])

    let text1 = k.add([
      k.text(
        "Suche in jedem Level stehts nach dem Schlüssel.\nDenn ohne diesen Schlüssel, können wir nicht aufschliessen, was wir nicht haben, das er aufschliesst. Also was für einen Sinn würde es machen, das zu finden was er aufschliesst, was wir nicht haben, ohne zuerst den Schlüssel gefunden zu haben, der es aufschliesst?",
        {
          size: 17,
          width: 400,
          height: 240,
          textAlign: "center",
          lineHeight: 1.2,
        },
      ),
      k.pos(jacksparrow.pos.add(64, -56)),
      k.anchor("center"),
      k.color(0, 0, 0),
    ])
    k.onCollideEnd("player", "npc", (player, jacksparrow) => {
      text1.destroy()
      boxBack.destroy()
    })
  })
})
