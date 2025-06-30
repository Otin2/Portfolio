import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// --- Utilidades para formas en GLSL ---
const shapeFunctions = `
vec3 pyramid(vec3 pos) {
    float h = 2.0;
    float y = pos.y;
    float x = pos.x;
    float z = pos.z;
    float factor = 1.0 - abs(y) / h;
    vec3 p = vec3(x * factor, y, z * factor);
    if (abs(y) > h) p = vec3(0.0, sign(y) * h, 0.0);
    return p;
}
vec3 torus(vec3 pos) {
    float r = 0.5;
    float R = 2.0;
    float theta = atan(pos.z, pos.x);
    float phi = atan(pos.y, length(pos.xz) - R);
    return vec3(
        (R + r * cos(phi)) * cos(theta),
        r * sin(phi),
        (R + r * cos(phi)) * sin(theta)
    );
}
vec3 torusTight(vec3 pos) {
    float r = 1.0;
    float R = 1.2;
    float theta = atan(pos.z, pos.x);
    float phi = atan(pos.y, length(pos.xz) - R);
    return vec3(
        (R + r * cos(phi)) * cos(theta),
        r * sin(phi),
        (R + r * cos(phi)) * sin(theta)
    );
}
`;

const vertexShader = `
    attribute vec3 color;
    varying vec3 vColor;
    uniform float uSize;
    uniform float uRotationY;
    uniform vec2 uMouse;
    uniform float uAspect;
    uniform float uMorphTime;
    uniform float uExpansion;
    ${shapeFunctions}
    void main() {
        vColor = color;
        vec3 pos = position;
        float time = uRotationY;
        pos = mix(vec3(0.0), pos, uExpansion);
        // --- Ciclo: Esfera → Cubo → Pirámide → Toroide Donut → Toroide Apretado → Pirámide → Cubo → Esfera ---
        float cycle = mod(uMorphTime, 35.0);
        float block = floor(cycle / 5.0);
        float blockTime = mod(cycle, 5.0);
        vec3 spherePos = pos;
        vec3 cubePos = normalize(pos) * 2.0;
        vec3 pyramidPos = pyramid(pos);
        vec3 torusDonutPos = torus(pos);
        vec3 torusTightPos = torusTight(pos);
        if (block == 0.0) pos = (blockTime < 4.0) ? spherePos : mix(spherePos, cubePos, (blockTime-4.0)/1.0);
        else if (block == 1.0) pos = (blockTime < 4.0) ? cubePos : mix(cubePos, pyramidPos, (blockTime-4.0)/1.0);
        else if (block == 2.0) pos = (blockTime < 4.0) ? pyramidPos : mix(pyramidPos, torusDonutPos, (blockTime-4.0)/1.0);
        else if (block == 3.0) pos = (blockTime < 4.0) ? torusDonutPos : mix(torusDonutPos, torusTightPos, (blockTime-4.0)/1.0);
        else if (block == 4.0) pos = (blockTime < 4.0) ? torusTightPos : mix(torusTightPos, pyramidPos, (blockTime-4.0)/1.0);
        else if (block == 5.0) pos = (blockTime < 4.0) ? pyramidPos : mix(pyramidPos, cubePos, (blockTime-4.0)/1.0);
        else if (block == 6.0) pos = (blockTime < 4.0) ? cubePos : mix(cubePos, spherePos, (blockTime-4.0)/1.0);
        else pos = spherePos;
        // Rotación global
        float x = pos.x * cos(time) - pos.z * sin(time);
        float z = pos.x * sin(time) + pos.z * cos(time);
        pos.x = x; pos.z = z;
        // Proyección a pantalla
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        vec4 projected = projectionMatrix * mvPosition;
        vec2 screenPos = projected.xy / projected.w;
        screenPos.x *= uAspect;
        // Repulsión 2D
        float dist = distance(screenPos, uMouse);
        if (dist < 0.5) {
        float force = (0.5 - dist) * 4.0;
        vec2 dir = normalize(screenPos - uMouse);
        pos.x += dir.x * force;
        pos.y += dir.y * force;
        }
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = uSize;
    }
`;

const fragmentShader = `
    varying vec3 vColor;
    void main() {
        vec2 coords = gl_PointCoord - vec2(0.5);
        float dist = length(coords);
        float glow = smoothstep(0.5, 0.05, dist);
        if (dist > 0.5) discard;
        // Glow específico para cada color
        vec3 glowColor;
        if (vColor.b > 0.95 && vColor.g < 0.6) {
        // Azul #0072ff
        glowColor = vec3(0.2, 0.6, 1.0);
        } else if (vColor.g > 0.7 && vColor.b > 0.95) {
        // Celeste #00c6ff
        glowColor = vec3(0.3, 0.9, 1.0);
        } else if (vColor.r > 0.7 && vColor.g > 0.7 && vColor.b > 0.7) {
        // Gris claro
        glowColor = vec3(1.0, 1.0, 1.0);
        } else {
        // Gris oscuro
        glowColor = vec3(0.5, 0.5, 0.6);
        }
        glowColor = mix(vColor, glowColor, 0.8) * (1.0 - dist) * 1.5;
        float alpha = mix(0.85, 1.0, 1.0 - dist);
        gl_FragColor = vec4(mix(vColor, glowColor, glow), alpha * glow);
    }
`;

function useMouseUniform(canvasRef) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const move = e => {
            const rect = canvas.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
            setMouse({ x, y });
            setActive(true);
        };

        const leave = () => {
            setMouse({ x: 1000, y: 1000 }); // fuera de rango
            setActive(false);
        };

        canvas.addEventListener('mousemove', move);
        canvas.addEventListener('mouseleave', leave);
        return () => {
            canvas.removeEventListener('mousemove', move);
            canvas.removeEventListener('mouseleave', leave);
        };
    }, [canvasRef]);

    return { mouse, active };
}

function ParticleSystem({ count = 1250, particleSize = 12.5, canvasRef }) {
    const meshRef = useRef();
    const [rot, setRot] = useState(0);
    const [, setExpansion] = useState(0);
    const expansionRef = useRef(0);
    const { mouse, active: mouseActive } = useMouseUniform(canvasRef);

    useEffect(() => {
        expansionRef.current = 0;
        setExpansion(0);
    }, []);

    const { geometry, material } = useMemo(() => {
        const g = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
        // Esfera
        const t = Math.random() * Math.PI * 2;
        const p = Math.acos(1 - 2 * Math.random());
        const r = 1.5 + Math.random() * 0.3;
        pos[i * 3] = r * Math.sin(p) * Math.cos(t);
        pos[i * 3 + 1] = r * Math.cos(p);
        pos[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
        // Color aleatorio
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
            col[i * 3] = 0.0; col[i * 3 + 1] = 0.45; col[i * 3 + 2] = 1.0; // Azul #0072ff
        } else if (colorChoice < 0.66) {
            col[i * 3] = 0.0; col[i * 3 + 1] = 0.78; col[i * 3 + 2] = 1.0; // Celeste #00c6ff
        } else {
            if (Math.random() < 0.5) {
            col[i * 3] = 0.8; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 0.8; // Gris claro
            } else {
            col[i * 3] = 0.353; col[i * 3 + 1] = 0.353; col[i * 3 + 2] = 0.353; // Gris oscuro #5A5A5A
            }
        }
        }
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        g.setAttribute('color', new THREE.BufferAttribute(col, 3));
        const m = new THREE.ShaderMaterial({
        uniforms: {
            uSize: { value: particleSize },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uAspect: { value: 1 }, // cuadrado
            uRotationY: { value: 0 },
            uMorphTime: { value: 0 },
            uExpansion: { value: 0 }
        },
        vertexShader, fragmentShader, transparent: true, depthWrite: false
        });
        return { geometry: g, material: m };
    }, [count, particleSize]);

    useFrame((_, delta) => {
        if (material) {
        if (mouseActive) {
            material.uniforms.uMouse.value.x = mouse.x;
            material.uniforms.uMouse.value.y = mouse.y;
        } else {
            material.uniforms.uMouse.value.x = 1000.0;
            material.uniforms.uMouse.value.y = 1000.0;
        }
        material.uniforms.uRotationY.value = rot;
        material.uniforms.uMorphTime.value += 0.005;
      // Animar expansión
        if (expansionRef.current < 1) {
        expansionRef.current = Math.min(expansionRef.current + delta / 0.75, 1);
            setExpansion(expansionRef.current);
        }
        material.uniforms.uExpansion.value = expansionRef.current;
        }
    setRot(r => r + 0.01);
    });

    return <points ref={meshRef} geometry={geometry} material={material} />;
}

export default function AnimatedSphere(props) {
    const canvasContainerRef = useRef();
    const [canvasEl, setCanvasEl] = useState(null);


    useEffect(() => {
        if (canvasContainerRef.current) {
            const realCanvas = canvasContainerRef.current.querySelector('canvas');
            if (realCanvas) setCanvasEl(realCanvas);
        }
    }, []);

    return (
        <div ref={canvasContainerRef} style={{ width: '100%', height: '100%' }}>
            <Canvas style={{ width: '100%', height: '100%' }}>
                <ParticleSystem {...props} canvasRef={{ current: canvasEl }} />
            </Canvas>
        </div>
    );
} 