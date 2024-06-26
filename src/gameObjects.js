import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

/**
 * Ein Hintergrund Spielobjekt, das auf leeren Feldern oder als Hintergrund von
 * anderen Objekten gesetzt wird.
 */
export function backgroundRPG(x, y) {
  k.add([
    k.sprite("floor"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    // `z` wird hier verwendet um diese Kachel weiter im Hintergrund zu
    // zeichnen, damit das eigentliche Spielobjekt auf dem Feld nicht
    // überlagert wird.
    k.z(-10),
  ])
}
/**
 *  Ein Spielobjekt Höhle. Kann verwendet werden um ein neues Level zu betreten.
 */
export function door1RPG(x, y) {
  k.add([
    k.sprite("door1"),
    k.pos(x * TILESIZE, y * TILESIZE + 9),
    k.body({ isStatic: true }),
    k.area(),
    "door",
  ])
}
 

export function door2RPG(x, y) {
  k.add([
    k.sprite("door1"),
    k.pos(x * TILESIZE, y * TILESIZE + 9),
    k.body({ isStatic: true }),
    k.area(),
    "door-small",
  ])
}

export function sideWallRPG(x, y, shiftRight = 0) {
  k.add([
    k.sprite("sideWall"),
    k.pos(x * TILESIZE + shiftRight, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

export function sidePillarRPG(x, y, shiftRight = 0) {
  k.add([
    k.sprite("sidePillar"),
    k.pos(x * TILESIZE + shiftRight, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

/**
 * Ein Spielobjekt Blume, das den Spieler heilt.
 */
export function keyRPG(x, y) {
  k.add([
    k.sprite("key"),
    k.pos(x * TILESIZE + 16, y * TILESIZE + 16),
    k.area(),
    k.scale(0.5),
    "key",
    {
      isConsumable: true,
    },
  ])
}

/**
 * Spielobjekt Wand.
 *
 * Der Spieler kann hier nicht durchlaufen. Kann als Klippe verwendet werden.
 */
export function wallRPG(x, y) {
  k.add([
    k.sprite("wall"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

export function cornerRightRPG(x, y) {
  k.add([
    k.sprite("cornerRight"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

export function cornerLeftRPG(x, y) {
  k.add([
    k.sprite("cornerLeft"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}
