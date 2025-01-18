// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.gltf', (gltf) => {
  scene.add(gltf.scene);
}, undefined, (error) => {
  console.error(error);
});