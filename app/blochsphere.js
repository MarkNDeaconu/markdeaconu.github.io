import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function BlochSpherePoints({ position, isMeasured, setIsMeasured }) {
  const mountRef = useRef(null);
  const [transitionProgress, setTransitionProgress] = useState(0); // Controls transition smoothness

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(200, 200);
    mountRef.current.appendChild(renderer.domElement);

    const sphereGroup = new THREE.Group();
    sphereGroup.scale.set(0.7, 0.7, 0.7);

    const pointGeometry = new THREE.SphereGeometry(0.01, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff, emissive: 0x002244 });
    const points = [];

    const numPoints = 500;
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      point.position.set(x, y, z);
      point.originalPosition = point.position.clone();
      points.push(point);
      sphereGroup.add(point);
    }
    scene.add(sphereGroup);

    const rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01,
    };

    const alignmentTarget = Math.random() > 0.5 ? 1 : -1;

    const animate = () => {
      requestAnimationFrame(animate);

      points.forEach((point) => {
        // Determine target position based on measurement state
        const targetPosition = isMeasured
          ? new THREE.Vector3(0, alignmentTarget, 0) // Measurement state target (top or bottom)
          : point.originalPosition; // Original random position for dispersal

        // Use transitionProgress to smooth the movement between target positions
        point.position.lerp(targetPosition, 0.05); // Adjust the smoothness with the lerp factor
      });

      // Apply rotation only during dispersal (when not measured)
      if (!isMeasured) {
        sphereGroup.rotation.x += rotationSpeed.x;
        sphereGroup.rotation.y += rotationSpeed.y;
        sphereGroup.rotation.z += rotationSpeed.z;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMeasured]);

  // Hover event handlers to smoothly adjust transitionProgress
  const handleMouseEnter = () => {
    setIsMeasured(true);
  };

  const handleMouseLeave = () => {
    setIsMeasured(false);
  };

  return (
    <div
      ref={mountRef}
      style={{ position: 'fixed', top: '0px', [position]: '0px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default function App() {
  const [isMeasured, setIsMeasured] = useState(false);

  return (
    <>
      <BlochSpherePoints position="right" isMeasured={isMeasured} setIsMeasured={setIsMeasured} />
      <BlochSpherePoints position="left" isMeasured={isMeasured} setIsMeasured={setIsMeasured} />
    </>
  );
}



















