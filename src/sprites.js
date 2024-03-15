import { TILESIZE as TS } from "./globals"
import { k } from "./game.js"

/**
 * Diese Funktion soll alle Spritesheets in das Spiel laden.
 *
 * Diese Funktion muss ganz am Anfang einmal ausgeführt werden, bevor dann
 * Spielobjekte mit diesen Sprites erstellt werden.
 *
 * Die Spritesheets könnten auch pro Level neu bzw. anders geladen werden,
 * damit können einfach andere Atmosphären im Spiel erzeugt werden.
 */
export default function loadSprites() {
  k.loadSpriteAtlas("sprites/character.png", {
    hero: {
      // Alles war hier kommt, gehört zum Sprite `hero`
      x: 0, // x-Koordinate des Pixels wo das Sprite beginnt.
      y: 0, // y-Koordinate des Pixels wo das Sprite beginnt.
      width: 256, // Die Breite des Sprites in Pixeln. Hier sind jeweils 4 Animationen nebeneinander, deshalb 3 * TILESIZE
      height: 512, // Die Höhe des Sprites in Pixeln. Hier sind die 8 Laufrichtungen untereinander, deshalb 4 * TILESIZE
      sliceX: 4, // In der x-Richtung sind es 4 Kacheln, so wird es gleichmässig aufgeteilt.
      sliceY: 8, // In der y-Richtung sind es 8 Kacheln, so wird es gleichmässig aufgeteilt.
      anims: {
        // Hier werden die verschiedenen Animationen definiert.
        runDown: { from: 0, to: 3, loop: true, speed: 10 }, // Die Animation nach unten rennen, besteht aus den ersten 3 Kacheln. Die Animation soll sich wiederholen wenn sie durchlaufen ist.
        idleDown: 1, // Ist es nur eine Kachel, kann diese direkt angegeben werden.
        runLeft: { from: 4, to: 7, loop: true, speed: 10 }, // Die Geschwindigkeit der Animation kann auch verändert werden.
        idleLeft: 5,
        runRight: { from: 8, to: 11, loop: true, speed: 10 },
        idleRight: 9,
        runUp: { from: 12, to: 15, loop: true, speed: 10 },
        idleUp: 13,
      },
    },
  })

  /**
   * Hier werden alle sprites für die statischen Spielobjekte geladen.
   */
  k.loadSpriteAtlas("sprites/Floor.png", {
    floor: { x: 0, y: 0, width: TS, height: TS },
  })
  k.loadSpriteAtlas("sprites/Door1.png", {
    door1: { x: 0, y: 0, width: TS, height: TS },
  })
  k.loadSpriteAtlas("sprites/SideWall.png", {
    sideWall: { x: 0, y: 0, width: 21, height: 64 },
  })
  k.loadSpriteAtlas("sprites/SidePillar.png", {
    sidePillar: { x: 0, y: 0, width: 21, height: 64 },
  })
  k.loadSpriteAtlas("sprites/ground.png", {
    key: { x: 3 * TS, y: 0 * TS, width: TS, height: TS },
  })
  k.loadSpriteAtlas("sprites/BackWall.png", {
    wall: { x: 0, y: 0, width: TS, height: TS },
  })
}
