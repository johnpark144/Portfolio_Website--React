import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export function Model({ sectionRef, timelineValue}) {
  const { nodes, materials } = useGLTF("/desktop_computer.glb");
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${timelineValue} top`,
          end: `top+=${timelineValue + 400} top`,
          scrub: timelineValue > -1000 ? 1 : false,
        },
      })
      .fromTo(scene.rotation, { y: 4, x: 3 }, { y: 0, x: 0 });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${timelineValue + 800} top`,
          end: `top+=${timelineValue + 1900} top`,
          scrub: 1,
        },
      })
      .to(scene.rotation, {y: -2, x: 4, z: 2 }, "key1")  
  }, []);

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials["01___Default"]}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials["01___Default"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/desktop_computer.glb");
