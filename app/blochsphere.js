import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BlochSpherePoints() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(200, 200); // Keep the renderer size appropriate for display
    mountRef.current.appendChild(renderer.domElement);

    // Generate points on the sphere
    const sphereGroup = new THREE.Group();
    sphereGroup.scale.set(0.7, 0.7, 0.7); // Slightly increase the size of the sphere
    const pointGeometry = new THREE.SphereGeometry(0.01, 8, 8); // Points on the sphere
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff, emissive: 0x002244 });
    const numPoints = 500;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(2 * Math.random() - 1); // Latitude
      const theta = 2 * Math.PI * Math.random(); // Longitude

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      point.position.set(x, y, z);
      sphereGroup.add(point);
    }
    scene.add(sphereGroup);

    // Random rotation speeds
    const rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01, // Random speed for x-axis
      y: (Math.random() - 0.5) * 0.01, // Random speed for y-axis
      z: (Math.random() - 0.5) * 0.01, // Random speed for z-axis
    };

    // Animate the Bloch sphere
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply random smooth rotation to the sphere group
      sphereGroup.rotation.x += rotationSpeed.x;
      sphereGroup.rotation.y += rotationSpeed.y;
      sphereGroup.rotation.z += rotationSpeed.z;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Position the container in the very top-right corner
  return <div ref={mountRef} style={{ position: 'fixed', top: '0px', right: '0px' }} />;
}












