import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

function addLighting(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(5, 10, 7);
  directional.castShadow = true;
  directional.shadow.mapSize.width = 1024;
  directional.shadow.mapSize.height = 1024;
  scene.add(directional);

  const hemisphere = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.3);
  scene.add(hemisphere);

  const point = new THREE.PointLight(0xffffff, 0.5, 10);
  point.position.set(0, 3, 2);
  scene.add(point);
}

export { addLighting };