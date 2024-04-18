import { k } from "./game.js"
import { getPlayer } from "./player.js"
import createTrail, { getTrail } from "./attack.js"
import { DEBUG } from "./globals.js"

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
  k.onKeyPress("a", () => {
    player.play("runLeft")
  })
  k.onKeyDown("a", () => {
    if (!k.isKeyDown("w") && !k.isKeyDown("s")) {
      player.move(k.LEFT.scale(player.speed))
    }
  })
  k.onKeyRelease("a", () => {
    if (!k.isKeyDown("w") && !k.isKeyDown("s")) {
      player.play("idleLeft")
    }
  })

  // Event handlers for right movement
  k.onKeyPress("d", () => {
    player.play("runRight")
  })
  k.onKeyDown("d", () => {
    if (!k.isKeyDown("w") && !k.isKeyDown("s")) {
      player.move(k.RIGHT.scale(player.speed))
    }
  })
  k.onKeyRelease("d", () => {
    if (!k.isKeyDown("w") && !k.isKeyDown("s")) {
      player.play("idleRight")
    }
  })

  // Event handlers for up movement
  k.onKeyPress("w", () => {
    player.play("runUp")
  })
  k.onKeyDown("w", () => {
    if (!k.isKeyDown("a") && !k.isKeyDown("d")) {
      player.move(k.UP.scale(player.speed))
    }
  })
  k.onKeyRelease("w", () => {
    if (!k.isKeyDown("a") && !k.isKeyDown("d")) {
      player.play("idleUp")
    }
  })

  // Event handlers for down movement
  k.onKeyPress("s", () => {
    player.play("runDown")
  })
  k.onKeyDown("s", () => {
    if (!k.isKeyDown("a") && !k.isKeyDown("d")) {
      player.move(k.DOWN.scale(player.speed))
    }
  })
  k.onKeyRelease("s", () => {
    if (!k.isKeyDown("a") && !k.isKeyDown("d")) {
      player.play("idleDown")
    }
  })

  // Fix diagonal movement speed
  const diagonalSpeedFactor = 1 / 1.414 // Approximately 0.707
  k.onKeyDown("a", () => {
    if (k.isKeyDown("w") || k.isKeyDown("s")) {
      player.move(k.LEFT.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("d", () => {
    if (k.isKeyDown("w") || k.isKeyDown("s")) {
      player.move(k.RIGHT.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("w", () => {
    if (k.isKeyDown("a") || k.isKeyDown("d")) {
      player.move(k.UP.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onKeyDown("s", () => {
    if (k.isKeyDown("a") || k.isKeyDown("d")) {
      player.move(k.DOWN.scale(player.speed * diagonalSpeedFactor))
    }
  })
  k.onMousePress("left", (x, y) => {
    createTrail(x, y)
  })

  k.onKeyDown("f", () => {
    setFullscreen(!isFullscreen())
  })

  if (DEBUG) {
    k.onKeyPress("1", () => {
      k.go("level-01")
    })
    k.onKeyPress("2", () => {
      k.go("level-02")
    })
    k.onKeyPress("3", () => {
      k.go("level-03")
    })
    k.onKeyPress("4", () => {
      k.go("level-04")
    })
    k.onKeyPress("up", () => {
      player.speed *= 1.5
    })
    k.onKeyPress("down", () => {
      player.speed /= 1.5
    })
  }
}
