/**
 * Gesture UI boundary for future gesture-state presentation.
 * Recognition and MediaPipe integration are intentionally excluded.
 */

/** Registers the future gesture event boundary with the workspace UI. */
class GestureController {
    /** Stores gesture-related status UI references. */
    constructor(elements) {
        this.connectionStatus = elements.connectionStatus;
        this.statusReadouts = elements.statusReadouts;
    }

    /** Attaches a placeholder listener for future gesture-engine events. */
    registerEventListeners() {
        window.addEventListener("gestureforge:gesture", this.handleGestureEvent);
    }

    /** Placeholder for future gesture-state updates. */
    handleGestureEvent() {
        // Gesture recognition and status updates belong to a future phase.
    }
}

export { GestureController };
