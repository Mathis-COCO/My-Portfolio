import React, { useRef, useEffect, useState, useContext } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthTextureDay from '../../assets/img/earth_texture.jpg';
import earthTextureNight from '../../assets/img/earth_texture_night.jpg';
import moonTexture from '../../assets/img/moon_texture.jpg';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThreeBuilding = () => {
  const mountRef = useRef(null);
  const [currEarthTexture, setEarthTexture] = useState(earthTextureDay);
  const [appTheme] = useContext(ThemeContext);

  useEffect(() => {
    const themeTextures = {
      Light: earthTextureDay,
      Dark: earthTextureNight
    };

    setEarthTexture(themeTextures[appTheme]);
  }, [appTheme]);

  function NightDayMode() {
    setEarthTexture(prevTexture => {
      if (prevTexture === earthTextureDay) {
        return earthTextureNight;
      } else {
        return earthTextureDay;
      }
    });
  }

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Sphère principale (Terre)
    const mainSphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const mainSphereMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load(currEarthTexture) });
    const mainSphere = new THREE.Mesh(mainSphereGeometry, mainSphereMaterial);
    scene.add(mainSphere);

    // Sphère secondaire (Lune)
    const secondarySphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const secondarySphereMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load(moonTexture) });
    const secondarySphere = new THREE.Mesh(secondarySphereGeometry, secondarySphereMaterial);
    mainSphere.add(secondarySphere);

    // Position de la sphère secondaire par rapport à la sphère principale
    secondarySphere.position.x = 2; // Modifier les valeurs x, y, z pour ajuster la position

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    function animate() {
      requestAnimationFrame(animate);

      mainSphere.rotation.y += 0.001;
      secondarySphere.rotation.y += 0.003;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [currEarthTexture]);

  return <div ref={mountRef} className='homepage-planets' />;
};

export default ThreeBuilding;
