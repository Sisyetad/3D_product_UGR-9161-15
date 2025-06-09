let autoRotate = true;
let rotationSpeed = 0.2;
let angle = 0;
let radius = 5;

function setupCameraAnimation(camera, controls) {
  controls.addEventListener('start', () => autoRotate = false);
  controls.addEventListener('end', () => {
    autoRotate = true;
    angle = Math.atan2(camera.position.z, camera.position.x);
    radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
  });
}

function update(deltaTime, camera) {
  if (autoRotate) {
    angle += rotationSpeed * deltaTime;
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    camera.lookAt(0, 1, 0);
  }
}

export { setupCameraAnimation, update };