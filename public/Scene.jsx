import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.Cylinder002__0.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Cylinder002__0_1.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Cylinder002__0_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Cylinder002__0_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Cylinder002__0_4.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
