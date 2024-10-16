import Scene from "../../../public/Scene";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "animate.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container animate__animated animate__fadeInDown">
      <div className="canvas">
        <Canvas camera={{ position: [0, 5, 5], fov: 100 }}>
          <ambientLight />
          <OrbitControls
            enableZoom={false}
            minDistance={200}
            maxDistance={200}
          />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
      <div className="content-container">
        <h2>My name is Emircan, I am a Frontend Developer</h2>
        <a href="#contact" className="button" >Contact Me</a>
      </div>
    </div>
  );
};

export default Hero;
