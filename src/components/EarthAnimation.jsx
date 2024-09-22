import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { gsap } from "gsap";

const EarthAnimation = () => {
  const mountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let scene, camera, renderer, particles, renderingParent, resizeContainer;
    let mouseX, mouseY;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 400;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      createParticles();
      setupEventListeners();
      animate();
      setupAnimations();
    };

    const createParticles = () => {
      const distance = Math.min(200, window.innerWidth / 4);
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < 2800; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        const x = distance * Math.sin(theta) * Math.cos(phi);
        const y = distance * Math.sin(theta) * Math.sin(phi);
        const z = distance * Math.cos(theta);

        vertices.push(x, y, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      particles = new THREE.Points(
        geometry,
        new THREE.PointsMaterial({ color: 0x00ffff, size: 2 })
      );
      particles.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);

      renderingParent = new THREE.Group();
      renderingParent.add(particles);

      resizeContainer = new THREE.Group();
      resizeContainer.add(renderingParent);
      scene.add(resizeContainer);
    };

    const setupEventListeners = () => {
      window.addEventListener("resize", onWindowResize);
      document.addEventListener("mousemove", onMouseMove);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      gsap.to(particles.rotation, {
        duration: 0.1,
        x: mouseY * -1,
        y: mouseX,
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const setupAnimations = () => {
      const animProps = { scale: 1, xRot: 0, yRot: 0 };

      gsap.to(animProps, {
        duration: 0,
        scale: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine",
        onUpdate: function () {
          renderingParent.scale.set(
            animProps.scale,
            animProps.scale,
            animProps.scale
          );
        },
      });

      gsap.to(animProps, {
        duration: 60,
        xRot: Math.PI * 2,
        yRot: Math.PI * 4,
        repeat: -1,
        yoyo: true,
        ease: "none",
        onUpdate: function () {
          renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
        },
      });
    };

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleRegister = () => {
    navigate("/register");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleAboutUs = () => {
    navigate("/aboutus");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <div className="absolute left-8 top-8 text-white z-10">
          <div className="font-[Rejoy] text-4xl leading-snug">
            <div className="text-7xl underline leading-snug">Fun Fact:</div>
            <div>"If the Sun were as</div>
            <div>tall as a</div>
            <div>typical front door,</div>
            <div>Earth would be the </div>
            <div>size of a nickel."</div>
            <div>~NASA</div>
            <div className="mt-10">
              <button
                onClick={handleRegister}
                className="leading-10 px-4 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded"
              >
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
        <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
      </div>
      <div className="h-100 w-100% p-x-[4vw] relative">
        <div className="flex flex-row justify-between gap-4">
          <h1 className="text-white text-8xl font-[Rejoy]">Get in touch.</h1>
          <a
            onClick={handleAboutUs}
            className="text-white text-2xl mb-4 mr-4 font-[Rejoy] absolute bottom-0 right-0"
            href=""
          >
            ⤵️About us
          </a>
        </div>
        <hr className="border-white w-full" />
      </div>
    </>
  );
};

export default EarthAnimation;
