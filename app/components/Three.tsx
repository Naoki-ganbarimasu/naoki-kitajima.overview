"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls';
import { FontLoader } from './three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from './three/examples/jsm/geometries/TextGeometry';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.5, 100);
    camera.position.set(0, -1, 3);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff,  3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Fonts
    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font: string) => {
      const textGeometry = new TextGeometry('naoki kitajima', {
        font: font,
        size: 0.7,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 4,
      });
      textGeometry.center();

      const textMaterial = new THREE.MeshStandardMaterial({ color: 0x99FF33 }); // 黄緑色
      const text = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(text);

      const boxGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x008000 }); // 緑色

      for (let i = 0; i < 300; i++) {
        const box = new THREE.Mesh(boxGeometry, boxMaterial);

        box.position.x = (Math.random() - 0.5) * 10;
        box.position.y = (Math.random() - 0.5) * 10;
        box.position.z = (Math.random() - 1.1) * 5;
        box.rotation.set(10, 10, 10)
        box.rotation.x = Math.random() * Math.PI;
        box.rotation.y = Math.random() * Math.PI;

        const scale = Math.random();
        box.scale.set(scale, scale, scale);

        scene.add(box);
      }

      const animate = () => {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    });

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className='w-full h-full' />;
};

export default ThreeScene;
