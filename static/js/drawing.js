/**
 * Drawing UI boundary for future canvas interactions.
 * No drawing behavior is implemented in this architecture module.
 */

/** Registers drawing-surface events for a future drawing engine. */
class DrawingController {
    /** Stores references to UI elements supplied by the application controller. */
    constructor(elements) {
        this.canvas = elements.drawingCanvas;
        this.toolbar = elements.toolbar;
    }

    /** Attaches placeholder listeners without handling drawing input. */
    registerEventListeners() {
        this.canvas?.addEventListener("pointerdown", this.handlePointerDown);
        this.canvas?.addEventListener("pointermove", this.handlePointerMove);
        this.canvas?.addEventListener("pointerup", this.handlePointerUp);
        this.toolbar?.addEventListener("click", this.handleToolbarInteraction);
    }

    /** Placeholder for future drawing-surface pointer start handling. */
    handlePointerDown() {
        // Drawing behavior belongs to a future drawing implementation phase.
    }

    /** Placeholder for future drawing-surface pointer movement handling. */
    handlePointerMove() {
        // Drawing behavior belongs to a future drawing implementation phase.
    }

    /** Placeholder for future drawing-surface pointer end handling. */
    handlePointerUp() {
        // Drawing behavior belongs to a future drawing implementation phase.
    }

    /** Placeholder for future drawing-toolbar command handling. */
    handleToolbarInteraction() {
        // Drawing commands will be routed by a future interaction layer.
    }
}

export { DrawingController };
