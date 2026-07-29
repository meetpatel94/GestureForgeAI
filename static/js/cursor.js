/**
 * Virtual cursor UI boundary for future cursor presentation.
 * Position, smoothing, and gesture control are intentionally excluded.
 */

/** Registers the future cursor event boundary with the workspace UI. */
class CursorController {
    /** Stores the virtual cursor and workspace element references. */
    constructor(elements) {
        this.virtualCursor = elements.virtualCursor;
        this.workspace = elements.workspace;
    }

    /** Attaches a placeholder listener for future cursor-engine events. */
    registerEventListeners() {
        window.addEventListener("gestureforge:cursor", this.handleCursorEvent);
    }

    /** Placeholder for future cursor-position updates. */
    handleCursorEvent() {
        // Cursor movement and smoothing belong to a future engine phase.
    }
}

export { CursorController };
