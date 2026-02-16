"use client"

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

interface PlanetCoreProps {
    progress: number; // 0 to 1
}

export default function PlanetCore({ progress }: PlanetCoreProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const planetRef = useRef<THREE.Mesh | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        const mainLight = new THREE.PointLight(0xe50914, 2); // Marcomnation Red Light
        mainLight.position.set(5, 5, 5);
        scene.add(mainLight);

        const edgeLight = new THREE.PointLight(0xffffff, 0.5);
        edgeLight.position.set(-5, -5, 2);
        scene.add(edgeLight);

        // Planet Geometry & Texture
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load("/planet.jpg");
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.8,
            metalness: 0.2,
        });

        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);
        planetRef.current = planet;

        // Background / Atmosphere
        const bgTexture = textureLoader.load("/star-background.jpg");
        scene.background = bgTexture;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (planetRef.current) {
                planetRef.current.rotation.y += 0.001;
            }
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Scroll Reactivity
    useGSAP(() => {
        if (!planetRef.current || !cameraRef.current) return;

        // As progress (scroll) increases:
        // 1. Planet scales up (zooms in)
        // 2. Planet rotates more intensely
        // 3. Camera moves closer or further

        const scale = 1 + progress * 2.5;
        const rotationY = progress * Math.PI * 4;
        const positionZ = 5 - progress * 3.5;

        gsap.to(planetRef.current.scale, {
            x: scale,
            y: scale,
            z: scale,
            duration: 1,
            ease: "power2.out"
        });

        gsap.to(planetRef.current.rotation, {
            y: rotationY,
            duration: 1.5,
            ease: "power1.out"
        });

        gsap.to(cameraRef.current.position, {
            z: positionZ,
            duration: 1.2,
            ease: "power2.inOut"
        });

    }, [progress]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none w-full h-full"
        />
    );
}
