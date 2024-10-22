import Scene from "../../../public/Scene";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "animate.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero animate__animated animate__fadeInDown">
      <div className="canvas" id="hero">
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
        <span className="content-title">My name is Emircan, I am a Frontend Developer</span>
        <a href="#contact" className="button" >Contact Me</a>
      </div>
    </div>
  );
};

export default Hero;
