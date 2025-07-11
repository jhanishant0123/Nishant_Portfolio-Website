
import * as THREE from 'https://cdn.skypack.dev/three@0.152.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('3d-profile');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.z = 2.5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/profile.png');
const geometry = new THREE.BoxGeometry(1.2, 1.6, 0.05);
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const facePanel = new THREE.Mesh(geometry, material);
scene.add(facePanel);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
