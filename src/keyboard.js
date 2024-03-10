import { k } from "./game.js"
import { getPlayer } from "./player.js"

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein Jump'n'Run-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 */
export function loadKeyboardJumpAndRun() {
  const player = getPlayer()
  // Wenn die Taste gedrückt wird, dann soll die Animation abgespielt werden.
  k.onKeyPress("left", () => {
    player.play("runLeft")
  })
  // Solange wie die Taste gedrückt wird, wird der Spieler in jedem Frame nach
  // links verschoben.
  k.onKeyDown("left", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  // Wenn die Taste losgelassen wird, wird die idleAnimation abgespielt.
  k.onKeyRelease("left", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("right", () => {
    player.play("runRight")
  })
  k.onKeyDown("right", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("right", () => {
    player.play("idleRight")
  })

  k.onKeyPress("space", () => {
    player.jump()
  })
}

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein RPG-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 *
 * Da wir uns hier anders bewegen können wie in einem Jump'n'Run, haben wir
 * extra eine weitere Funktion erstellt, wo all diese Funktionen drin sind, wie
 * zum Beispiel nach oben oder unten laufen.
 */
export function loadKeyboardRPG() {
  const player = getPlayer()

  // Event handlers for left movement
  k.onKeyPress("left", () => {
    player.play("runLeft")
  })
  k.onKeyDown("left", () => {
    if (!k.isKeyDown("up") && !k.isKeyDown("down")) {
      player.move(k.LEFT.scale(player.speed))
    }
  })
  k.onKeyRelease("left", () => {
    if (!k.isKeyDown("up") && !k.isKeyDown("down")) {
      player.play("idleLeft")
    }
  })

  // Event handlers for right movement
  k.onKeyPress("right", () => {
    player.play("runRight")
  })
  k.onKeyDown("right", () => {
    if (!k.isKeyDown("up") && !k.isKeyDown("down")) {
      player.move(k.RIGHT.scale(player.speed))
    }
  })
  k.onKeyRelease("right", () => {
    if (!k.isKeyDown("up") && !k.isKeyDown("down")) {
      player.play("idleRight")
    }
  })

  // Event handlers for up movement
  k.onKeyPress("up", () => {
    player.play("runUp")
  })
  k.onKeyDown("up", () => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
      player.move(k.UP.scale(player.speed))
    }
  })
  k.onKeyRelease("up", () => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
      player.play("idleUp")
    }
  })

  // Event handlers for down movement
  k.onKeyPress("down", () => {
    player.play("runDown")
  })
  k.onKeyDown("down", () => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
      player.move(k.DOWN.scale(player.speed))
    }
  })
  k.onKeyRelease("down", () => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
      player.play("idleDown")
    }
  })

  // Fix diagonal movement speed
  const diagonalSpeedFactor = 1 / 1.414 // Approximately 0.707
  k.onKeyDown("left", () => {
    if (k.isKeyDown("up") || k.isKeyDown("down")) {
      player.move(k.LEFT.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("right", () => {
    if (k.isKeyDown("up") || k.isKeyDown("down")) {
      player.move(k.RIGHT.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("up", () => {
    if (k.isKeyDown("left") || k.isKeyDown("right")) {
      player.move(k.UP.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("down", () => {
    if (k.isKeyDown("left") || k.isKeyDown("right")) {
      player.move(k.DOWN.scale(player.speed * diagonalSpeedFactor))
    }
  })
}
