import { TILESIZE } from "./globals.js"
import { k } from "./game.js"

/**
 * Erstelle das Spielobjekt Spieler.
 * Hier werden die Eigenschaften des Spielers festgelegt. Der Spieler wird dann
 * im Level 1 erstellt, und in späteren Levels wieder geladen.
 *
 * Müssen Änderungen am Spieler gemacht werden, kann man das Spielerobjekt über
 * die Funktion `getPlayer()` holen.
 */
export default function createTrail() {
  const trail = k.add([
    k.sprite("trail", { anim: "move" }),
    k.pos(),
    k.area(),
    k.offscreen({ destroy: true }),

    "spell",

    // Hier können Eigenschaften für den Spieler festgehalten werden, diese
    // können dann im Rest des Spiels verwendet werden.
    {
      speed: TILESIZE * 4,
      dir: null,
      dead: false,
    },
  ])

  // Wenn das Spielobjekt mit etwas kollidiert, soll es zerstört werden.
  trail.onCollide(
    (obj) => obj.isNot("player"),
    () => {
      trail.destroy()
    },
  )
  // Wenn das Spielobjekt nach 10 Sekunden nicht zerstört wurde, soll es
  // auch zerstört werden.
  k.wait(10, () => {
    trail.destroy()
  })
}

/**
 *  Hilfsfunktion um das Spielobjekt von `player` einfach zu bekommen.
 */
export function getTrail() {
  return k.get("spell")[0]
}
