import * as THREE from 'three';

export function init3DBackground() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const geometry = new THREE.TetrahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xfbbf24, 
    roughness: 0.4, 
    metalness: 0.6 
  });

  const particles = [];
  for (let i = 0; i < 35; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    const scale = Math.random() * 0.4 + 0.1;
    mesh.scale.set(scale, scale, scale);
    scene.add(mesh);
    particles.push({ 
      mesh, 
      speedY: Math.random() * 0.002 + 0.001, 
      rotSpeed: Math.random() * 0.005 
    });
  }

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xff4d00, 1, 100);
  pointLight.position.set(2, 5, 5);
  scene.add(pointLight);

  const animate = () => {
    requestAnimationFrame(animate);
    particles.forEach(p => {
      p.mesh.position.y += p.speedY;
      p.mesh.rotation.x += p.rotSpeed;
      p.mesh.rotation.z += p.rotSpeed;
      if (p.mesh.position.y > 8) p.mesh.position.y = -8;
    });
    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
