import { useEffect, useRef } from "react";
import * as THREE from "three";

// Three.js tunnel background + cursor glow + scroll progress bar.
export default function Background() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current, gl = glowRef.current, bar = barRef.current;
    let mx = 0, my = 0, cz = 0, raf, renderer;

    const onMove = (e) => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
      gl.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };

    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x02070a, 0.02);
      const cam = new THREE.PerspectiveCamera(70, 1, 0.1, 400);
      const C = [0x00f0ff, 0x39ff88];
      const path = (z) => new THREE.Vector3(Math.sin(z * 0.045) * 4, Math.cos(z * 0.03) * 2.5, z);
      const add = THREE.AdditiveBlending;
      const disposables = [];

      const rings = [];
      const ringGeo = new THREE.TorusGeometry(6, 0.05, 8, 72);
      disposables.push(ringGeo);
      for (let i = 0; i < 75; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: C[i % 2], transparent: true, blending: add, depthWrite: false });
        const m = new THREE.Mesh(ringGeo, mat);
        m.position.copy(path(-i * 3.6));
        scene.add(m); rings.push(m); disposables.push(mat);
      }

      const N = 2200, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        const z = -Math.random() * 280, a = Math.random() * 6.283, rad = 3 + Math.random() * 14;
        const p = path(z), c = new THREE.Color(C[i % 2]);
        pos.set([p.x + Math.cos(a) * rad, p.y + Math.sin(a) * rad, z], i * 3);
        col.set([c.r, c.g, c.b], i * 3);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, blending: add, depthWrite: false });
      const pts = new THREE.Points(g, pMat);
      scene.add(pts); disposables.push(g, pMat);

      const off = innerWidth < 700 ? 1.8 : 3.6;
      const geos = [
        new THREE.IcosahedronGeometry(2.2, 1),
        new THREE.TorusKnotGeometry(1.5, 0.45, 100, 12),
        new THREE.OctahedronGeometry(2.2),
        new THREE.DodecahedronGeometry(2.1),
        new THREE.TorusGeometry(1.8, 0.6, 12, 40),
      ];
      const objs = geos.map((geo, i) => {
        const o = new THREE.Group();
        const m1 = new THREE.MeshBasicMaterial({ color: C[i % 2], wireframe: true, transparent: true, opacity: 0.85, blending: add });
        const m2 = new THREE.MeshBasicMaterial({ color: C[(i + 1) % 2], transparent: true, opacity: 0.08, blending: add });
        o.add(new THREE.Mesh(geo, m1)); o.add(new THREE.Mesh(geo, m2));
        const z = -(i * 60 + 14), p = path(z);
        o.position.set(p.x + (i % 2 ? -off : off), p.y, z);
        scene.add(o); disposables.push(geo, m1, m2);
        return o;
      });

      const resize = () => {
        renderer.setSize(innerWidth, innerHeight, false);
        cam.aspect = innerWidth / innerHeight;
        cam.updateProjectionMatrix();
      };
      resize();
      addEventListener("resize", resize);
      addEventListener("pointermove", onMove);

      const frame = (t) => {
        const m = document.documentElement.scrollHeight - innerHeight;
        const p = m > 0 ? scrollY / m : 0;
        const tz = -p * 240, v = tz - cz;
        cz += v * 0.06;
        const a = path(cz), b = path(cz - 10);
        cam.position.set(a.x + mx * 1.5, a.y - my, a.z);
        cam.lookAt(b.x, b.y, b.z);
        cam.rotateZ(Math.sin(cz * 0.03) * 0.05);
        cam.fov = 70 + Math.min(Math.abs(v) * 1.5, 22);
        cam.updateProjectionMatrix();
        rings.forEach((q, i) => {
          q.rotation.z = i * 0.3 + t * 0.0004 * (i % 2 ? 1 : -1);
          q.material.opacity = 0.25 + 0.55 * Math.pow(0.5 + 0.5 * Math.sin(t * 0.003 - i * 0.45), 3);
        });
        objs.forEach((o, i) => {
          o.rotation.x = t * 0.0006 + i;
          o.rotation.y = t * 0.0009;
          o.scale.setScalar(1 + 0.08 * Math.sin(t * 0.002 + i));
        });
        pts.rotation.z = t * 0.00004;
        bar.style.transform = `scaleX(${p})`;
        renderer.render(scene, cam);
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);

      return () => {
        cancelAnimationFrame(raf);
        removeEventListener("resize", resize);
        removeEventListener("pointermove", onMove);
        disposables.forEach((d) => d.dispose());
        renderer.dispose();
      };
    } catch (err) {
      console.error("WebGL background failed:", err);
    }
  }, []);

  return (
    <>
      <canvas id="bg" ref={canvasRef} />
      <div id="gl" ref={glowRef} />
      <div id="bar" ref={barRef} />
    </>
  );
}
