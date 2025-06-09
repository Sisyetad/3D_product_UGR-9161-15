import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let infoPanel = document.getElementById('info-panel');
let selectedObject = null;
let originalMaterials = new Map();

function setupInteraction(scene, camera) {
  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (selectedObject) resetObjectAppearance(selectedObject);
      highlightObject(object);
      selectedObject = object;

      if (object.name) {
        infoPanel.textContent = object.name;
        infoPanel.style.display = 'block';
        setTimeout(() => infoPanel.style.display = 'none', 2000);
      }
    } else {
      if (selectedObject) {
        resetObjectAppearance(selectedObject);
        selectedObject = null;
      }
      infoPanel.style.display = 'none';
    }
  });

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'auto';
  });
}

function highlightObject(object) {
  if (!originalMaterials.has(object)) {
    originalMaterials.set(object, object.material);
  }
  object.material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
  object.scale.set(1.05, 1.05, 1.05);
}

function resetObjectAppearance(object) {
  if (originalMaterials.has(object)) {
    object.material = originalMaterials.get(object);
    originalMaterials.delete(object);
  }
  object.scale.set(1, 1, 1);
}

export { setupInteraction };