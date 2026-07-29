/**
 * Application entry point and UI registry for GestureForge AI.
 * This module establishes composition only; it contains no feature logic.
 */

import { DrawingController } from "./drawing.js";
import { GestureController } from "./gesture.js";
import { CursorController } from "./cursor.js";

/** Coordinates module construction and shared UI element registration. */
class AppController {
    /** Creates the application controller with the current document context. */
    constructor(documentRoot) {
        this.documentRoot = documentRoot;
        this.elements = this.registerElements();
        this.drawingController = new DrawingController(this.elements);
        this.gestureController = new GestureController(this.elements);
        this.cursorController = new CursorController(this.elements);
    }

    /** Collects the complete UI surface for future modules to consume. */
    registerElements() {
        return {
            applicationShell: this.documentRoot.querySelector(".application-shell"),
            navigation: this.documentRoot.querySelector(".top-navigation"),
            brand: this.documentRoot.querySelector(".brand"),
            cameraStatus: this.documentRoot.querySelector(".status-item"),
            fpsStatus: this.documentRoot.querySelector(".fps-status"),
            themeControl: this.documentRoot.querySelector(".theme-control"),
            toolbar: this.documentRoot.querySelector(".tool-panel"),
            toolbarButtons: this.documentRoot.querySelectorAll(".tool-button"),
            workspace: this.documentRoot.querySelector(".workspace"),
            connectionStatus: this.documentRoot.querySelector(".connection-chip"),
            cameraStage: this.documentRoot.querySelector(".camera-stage"),
            cameraPlaceholder: this.documentRoot.querySelector(".camera-placeholder"),
            drawingCanvas: this.documentRoot.querySelector(".drawing-canvas"),
            virtualCursor: this.documentRoot.querySelector(".virtual-cursor"),
            loadingOverlay: this.documentRoot.querySelector(".loading-overlay"),
            statusBar: this.documentRoot.querySelector(".status-bar"),
            statusReadouts: this.documentRoot.querySelectorAll(".status-readout"),
        };
    }

    /** Registers application-level UI listeners without assigning behavior. */
    initialize() {
        this.elements.themeControl?.addEventListener("click", this.handleThemeControlClick);
        this.elements.toolbarButtons.forEach((button) => {
            button.addEventListener("click", this.handleToolbarButtonClick);
        });

        this.drawingController.registerEventListeners();
        this.gestureController.registerEventListeners();
        this.cursorController.registerEventListeners();
    }

    /** Placeholder for a future theme-control interaction. */
    handleThemeControlClick() {
        // Theme behavior will be introduced in a future UI phase.
    }

    /** Placeholder for future toolbar command routing. */
    handleToolbarButtonClick() {
        // Tool selection behavior will be introduced with the interaction engine.
    }
}

/** Initializes the UI composition once the page document is ready. */
function initializeApplication() {
    const appController = new AppController(document);
    appController.initialize();
}

document.addEventListener("DOMContentLoaded", initializeApplication);

export { AppController };
