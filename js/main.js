// main.js
// Entry point for the app, combines all modules and starts animation loop

import { scene, camera, renderer, controls, initScene, THREE } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { setupCameraAnimation, update } from './cameraAnimation.js';

initScene();

// Create and add product to the scene
const product = createProduct();
scene.add(product);

// Add lights
addLighting(scene);

// Setup interaction and camera behavior
setupInteraction(scene, camera);
setupCameraAnimation(camera, controls);

// Add a ground plane
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.8, metalness: 0.2 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Animation loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  // Update camera animation
  update(delta, camera);

  // Optional floating effect
  product.position.y = Math.sin(clock.elapsedTime * 2) * 0.05;

  controls.update();
  renderer.render(scene, camera);
}
animate();
