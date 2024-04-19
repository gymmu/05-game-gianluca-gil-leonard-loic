import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

/**
 * Spielobjekt Gegner
 */
export function Enemy(x, y) {
  k.add([
    k.sprite("enemy", { anim: "idle" }), // Sprite des Gegners
    k.pos(x * TILESIZE + 16, y * TILESIZE), // positionieren des Gegners
    k.body({ isStatic: true }), // Gegner hat keine Bewegung
    k.area(), // collision-Area des Gegners
    k.scale(1), // Skalierung des Gegners
    "enemy", // Tag des Gegners
    {
      update() {
        const player = k.get("player")[0] // Spieler-Objekt holen
        if (player && this.isColliding(player, "player")) {
          // auf Kollision prüfen
          player.hurt(10) // Spieler schaden
          this.destroy() // Gegner zerstören
        }
        const playerPos = getPlayerPos() // Spieler-Position holen
        const diffX = playerPos.x - this.pos.x // Abstand zum Spieler x-Richtung
        const diffY = playerPos.y - this.pos.y // Abstand zum Spieler y-Richtung
        if (Math.abs(diffX) < 0 && Math.abs(diffY) < 0) return // kein Abstand → raus
        const angle = Math.atan2(diffY, diffX) // Winkel zurPlayer berechnen
        this.move(Math.cos(angle) * 100, Math.sin(angle) * 100) // Bewegung
      },
    },
  ])
}

/**
 * Spieler-Position holen
 */
function getPlayerPos() {
  const player = k.get("player")[0]
  return player ? player.pos : k.vec2(0, 0)
}
