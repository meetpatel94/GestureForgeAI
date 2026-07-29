"""Flask route skeleton for the GestureForge AI workspace."""

from http import HTTPStatus

from flask import Flask, jsonify, render_template


app = Flask(__name__)

TEMPORARY_STATUS = {
    "camera": False,
    "hand_detected": False,
    "gesture": "Waiting",
    "cursor_x": 0,
    "cursor_y": 0,
    "mode": "Idle",
    "fps": 0,
}


@app.get("/")
def index():
    """Render the GestureForge AI workspace."""
    return render_template("index.html")


@app.post("/camera/start")
def start_camera():
    """Return the camera-start placeholder response."""
    return jsonify({"success": True, "message": "Camera start placeholder"})


@app.post("/camera/stop")
def stop_camera():
    """Return the camera-stop placeholder response."""
    return jsonify({"success": True, "message": "Camera stop placeholder"})


@app.get("/video_feed")
def video_feed():
    """Report that the video streaming endpoint is not implemented yet."""
    return jsonify({"message": "Video feed not implemented"}), HTTPStatus.NOT_IMPLEMENTED


@app.get("/status")
def status():
    """Return the temporary workspace status payload."""
    return jsonify(TEMPORARY_STATUS)
