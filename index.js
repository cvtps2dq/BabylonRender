// create scene
let canvas = document.getElementById("renderCanvas");
let engine = new BABYLON.Engine(canvas, true);
let scene = new BABYLON.Scene(engine);

// create camera
let camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
// and give our camera a space to control
camera.attachControl(canvas, true);
camera.inputs.add(new BABYLON.FreeCameraKeyboardMoveInput());

// set camera controls to WASD keys
camera.keysUp = [87];       // W
camera.keysDown = [83];     // A
camera.keysLeft = [65];     // S
camera.keysRight = [68];    // D

// slow down the camera
camera.speed = 0.5;

// add light source
let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

// add meshes
let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
let sphereVector = new BABYLON.Vector3(0, 1, 0)
let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {segments: 32, diameter: 1}, scene);
sphere.position.addInPlace(sphereVector)

// Render loop
engine.runRenderLoop(function () {
    scene.render();
});

// Handle window resize
window.addEventListener("resize", function () {
    engine.resize();
});