import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

function createProduct() {
  const house = new THREE.Group();

  // Main building
  const building = new THREE.Mesh(
    new THREE.BoxGeometry(2, 1.2, 2),
    new THREE.MeshStandardMaterial({ color: 0xf5deb3, roughness: 0.6 })
  );
  building.position.y = 0.6;
  building.name = "House Body";
  house.add(building);

  // Roof
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.45, 0.7, 4),
    new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.5 })
  );
  roof.position.y = 1.45;
  roof.rotation.y = Math.PI / 4;
  roof.name = "Roof";
  house.add(roof);

  // Door
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.6, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.4 })
  );
  door.position.set(0, 0.3, 1.04);
  door.name = "Door";
  house.add(door);

  // Windows (front)
  const window1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.3, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x87ceeb, roughness: 0.1, metalness: 0.5, transparent: true, opacity: 0.7 })
  );
  window1.position.set(-0.6, 0.7, 1.04);
  window1.name = "Window 1";
  house.add(window1);

  const window2 = window1.clone();
  window2.position.x = 0.6;
  window2.name = "Window 2";
  house.add(window2);

  // Chimney
  const chimney = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.45, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5 })
  );
  chimney.position.set(-0.7, 1.7, -0.5);
  chimney.name = "Chimney";
  house.add(chimney);

  // Optional: Add a simple step in front of the door
  const step = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.08, 0.25),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.7 })
  );
  step.position.set(0, 0.04, 1.18);
  step.name = "Step";
  house.add(step);

  house.position.set(0, 0, 0);

  return house;
}

export { createProduct };