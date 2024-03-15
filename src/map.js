import { k } from "./game.js"
import { TILESIZE } from "./globals.js"
import { getPlayer } from "./player.js"
import * as GameObjects from "./gameObjects.js"

/**
 *  Diese Funktion liest eine txt-Datei ein, und erstellt aufgrund der Struktur
 * eine Karte für das Spiel. Jedes Zeichen in der txt-Datei entspricht einer
 * Kachel im Spiel, wenn in der txt-Datei kein Buchstabe ist, dann wird die
 * Stelle einfach frei gelassen.
 *
 * Die verschiedenen Buchstaben entsprechen der Art der Kachel die erzeugt
 * werden soll. Wie die folgenden Beispiele.
 *  - p: Player
 *  - o: Hindernis
 *  - f: Blume
 */

/**
 * Liest das gewünschte Level ein, und erstellt die entsprechende Karte.
 *
 * Siehe bei der Funktion generateMapJumpAndRun für mehr Dokumentation.
 */
export async function generateMapRPG(mapfile) {
  const map = await fetch(mapfile)
  const mapContent = await map.text()
  const lines = mapContent.split("\n")
  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    for (let x = 0; x < line.length; x++) {
      const char = line[x]

      if (char !== " " && char !== "\n" && char !== "s" && char !== "S") {
        GameObjects.backgroundRPG(x, y)
      }

      if (char === "p") {
        const player = getPlayer()
        player.pos = k.vec2(x, y).scale(TILESIZE)
      } else if (char === "d") {
        GameObjects.door1RPG(x, y)
      } else if (char === "S") {
        GameObjects.sideWallRightRPG(x, y)
      } else if (char === "s") {
        GameObjects.sideWallLeftRPG(x, y)
      } else if (char === "T") {
        GameObjects.trunkRPG(x, y)
      } else if (char === "t") {
        GameObjects.treeRPG(x, y)
      } else if (char === "k") {
        GameObjects.keyRPG(x, y)
      } else if (char === "m") {
        GameObjects.mushroomRPG(x, y)
      } else if (char === "w") {
        GameObjects.wallRPG(x, y)
      }
    }
  }
}
