import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

/**
 * Funktion zum Erstellen des JackSparrow-Objekts
 * @param {number} x x-Position des Objekts
 * @param {number} y y-Position des Objekts
 */
export function JackSparrow(x, y) {
  k.add([
    k.sprite("jacksparrow", { anim: "idle" }), // Sprite des Jack Sparrow
    k.pos(x * TILESIZE + 16, y * TILESIZE), // Position des Objekts
    k.body({ isStatic: true }), // Objekt hat keine Bewegung
    k.area(), // collision-Area des Objekts
    k.scale(1.6), // Skalierung des Objekts
    "npc", // Tag des Objekts
  ])
}
