import { k, addGeneralGameLogic } from "../game.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./level-02.js"

/**
 * Szene für das Level 1.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 *
 * Der Spieler muss in jedem Level nach dem Schlüssel suchen,
 * da er ohne diesen Schlüssel nicht weiterkommen kann.
 */
k.scene("level-01", async () => {
  k.setGravity(0)
  loadKeyboardRPG()

  await generateMapRPG("maps/level-01.txt")

  // Background hinzufügen
  k.add([
    k.sprite("background", { width: k.width(), height: k.height() }),
    k.pos(0, 0),
    k.z(-100), // Die Hintergrund<|instruction|><|bot|>lich zuerst
    k.fixed(), // Und fixiert, so dass er nicht bewegt wird
  ])

  addGeneralGameLogic()

  // Wenn der Spieler die Tür mit dem Schlüssel betritt,
  // springt er zu level 2 weiter
  k.onCollide("player", "door", (player) => {
    if (player.hasKey === true) {
      k.go("level-02")
      player.heal(100 - player.hp())
    }
  })

  // Wenn der Spieler einen Schlüssel findet, merkt er ihn sich
  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.hasKey = true
  })

  // Wenn der Spieler Jack Sparrow trifft,
  // wird ein Text und ein Rechteck angezeigt,
  // bis der Spieler den Text nicht mehr betrifft.
  k.onCollide("player", "npc", (player, jacksparrow) => {
    const boxBack = k.add([
      k.pos(jacksparrow.pos.add(64, -56)), // Position
      k.rect(420, 110), // Grösse
      k.color(207, 185, 151), // Farbe
      k.anchor("center"), // Ankerpunkt in der Mitte
      k.outline(5, rgb(160, 140, 100)), // Umriss
    ])

    const text1 = k.add([
      k.text(
        "Suche in jedem Level stehts nach dem Schlüssel.\n" +
          "Denn ohne diesen Schlüssel, können wir nicht aufschliessen, was wir nicht haben, das er aufschliesst. Also was für einen Sinn würde es machen, das zu finden was er aufschliesst, was wir nicht haben, ohne zuerst den Schlüssel gefunden zu haben, der es aufschliesst?",
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
