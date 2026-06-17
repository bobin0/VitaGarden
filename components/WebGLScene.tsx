"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLScene() {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = mountRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x060d08, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 3;

    /* ── Blob shader quad ── */
    const blobGeo = new THREE.PlaneGeometry(8, 8);
    const blobMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
        uScroll:     { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2  uResolution;
        uniform vec2  uMouse;
        uniform float uScroll;
        varying vec2  vUv;

        float smin(float a, float b, float k) {
          float h = clamp(.5 + .5*(b-a)/k, 0.,1.);
          return mix(b,a,h) - k*h*(1.-h);
        }
        float blob(vec2 uv, vec2 c, float r) { return r / length(uv - c); }

        vec3 palette(float t) {
          vec3 a = vec3(.04,.10,.06);
          vec3 b = vec3(.06,.18,.09);
          vec3 c2 = vec3(.10,.30,.14);
          vec3 d = vec3(.0);
          return a + b*cos(6.28318*(c2*t+d));
        }

        void main() {
          vec2 uv = vUv;
          float t  = uTime * .18;
          float sc = uScroll * .0003;

          float b1 = blob(uv, vec2(.28+sin(t*.9+1.2)*.16, .55+cos(t*.6)*.14), .14);
          float b2 = blob(uv, vec2(.72+cos(t*.7)*.13,     .38+sin(t*.8)*.16), .12);
          float b3 = blob(uv, vec2(.50+sin(t*.5+2.1)*.18, .72+cos(t*.4)*.12), .10);
          float b4 = blob(uv, vec2(uMouse.x+sin(t*.3)*.04, 1.-uMouse.y+cos(t*.4)*.04), .08);
          float b5 = blob(uv, vec2(.15+cos(t*.6+3.)*.10, .30+sin(t*.7)*.12), .08);

          float v = b1+b2+b3+b4*1.2+b5;
          v = clamp(v, 0., 1.2);

          vec3 col = palette(v * .7 + sc);
          col += vec3(.005) * fract(sin(dot(uv*400.+t, vec2(127.1,311.7)))*43758.5);

          // vignette
          float vig = 1. - smoothstep(.4, 1.1, length(uv - .5) * 1.4);
          col *= vig * 1.2;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      depthWrite: false,
    });
    const blobMesh = new THREE.Mesh(blobGeo, blobMat);
    blobMesh.position.z = -1;
    scene.add(blobMesh);

    /* ── 3D Wireframe Icosahedron ── */
    const icoGeo = new THREE.IcosahedronGeometry(0.75, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x4a9e70, wireframe: true, transparent: true, opacity: 0.25,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(2.2, 0.2, 0.5);
    scene.add(ico);

    /* ── 3D Torus Knot ── */
    const torusGeo = new THREE.TorusKnotGeometry(0.4, 0.12, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x86c99a, wireframe: true, transparent: true, opacity: 0.18,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-2.5, -0.5, 0.2);
    scene.add(torus);

    /* ── 3D Octahedron ── */
    const octGeo = new THREE.OctahedronGeometry(0.3);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x2d5a3d, wireframe: true, transparent: true, opacity: 0.3,
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    oct.position.set(-1.8, 1.4, 0.3);
    scene.add(oct);

    /* ── Particles ── */
    const COUNT = 160;
    const pGeo  = new THREE.BufferGeometry();
    const pos   = new Float32Array(COUNT * 3);
    const vel: { x: number; y: number }[] = [];
    const sz    = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      pos[i*3]   = (Math.random() - .5) * 8;
      pos[i*3+1] = (Math.random() - .5) * 6;
      pos[i*3+2] = (Math.random() - .5) * 2;
      vel.push({ x: (Math.random()-.5)*.002, y: -(Math.random()*.003+.001) });
      sz[i] = Math.random() * 4 + 1;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute("size",     new THREE.BufferAttribute(sz, 1));

    const pMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vA;
        void main() {
          vA = .15 + .15*sin(uTime*.5 + position.x*3.);
          vec4 mv = modelViewMatrix * vec4(position, 1.);
          gl_PointSize = size * (300. / -mv.z);
          gl_Position  = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - .5);
          if (d > .5) discard;
          gl_FragColor = vec4(.29,.62,.44, (1.-d*2.)*vA);
        }
      `,
      transparent: true, depthWrite: false,
    });
    const pts = new THREE.Points(pGeo, pMat);
    scene.add(pts);

    /* ── Mouse & Scroll ── */
    const mouse = { x: .5, y: .5 };
    let scroll = 0;
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    const onScroll = () => { scroll = window.scrollY; };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll",    onScroll, { passive: true });

    /* ── Resize ── */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      blobMat.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Loop ── */
    const clock = new THREE.Clock();
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t  = clock.getElapsedTime();

      blobMat.uniforms.uTime.value   = t;
      blobMat.uniforms.uMouse.value.set(mouse.x, mouse.y);
      blobMat.uniforms.uScroll.value = scroll;
      pMat.uniforms.uTime.value      = t;

      // Rotate 3D objects
      ico.rotation.x  = t * .3;
      ico.rotation.y  = t * .5;
      torus.rotation.x = t * .4;
      torus.rotation.y = t * .3;
      oct.rotation.x   = t * .6;
      oct.rotation.z   = t * .4;

      // Float
      ico.position.y   =  .2 + Math.sin(t * .6) * .15;
      torus.position.y = -.5 + Math.cos(t * .5) * .2;
      oct.position.y   = 1.4 + Math.sin(t * .8) * .12;

      // Subtle camera drift with mouse
      camera.position.x += (( mouse.x - .5) * .4 - camera.position.x) * .02;
      camera.position.y += ((.5 - mouse.y) * .25 - camera.position.y) * .02;
      camera.lookAt(0, 0, 0);

      // Scroll camera Z
      camera.position.z = 3 + scroll * .0008;

      // Update particles
      const pa = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pa[i*3]   += vel[i].x + Math.sin(t*.2+i)*.0003;
        pa[i*3+1] += vel[i].y;
        if (pa[i*3+1] < -3.2) pa[i*3+1] = 3.2;
        if (pa[i*3]   >  4.2) pa[i*3]   = -4.2;
        if (pa[i*3]   < -4.2) pa[i*3]   =  4.2;
      }
      pGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll",    onScroll);
      window.removeEventListener("resize",    onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
