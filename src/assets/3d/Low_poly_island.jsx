import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/low_poly_island.glb')
  const boxRef = useRef(null)
  useFrame(() => {
    boxRef.current.rotation.z += 0.003; // z방향으로 항상 돌개끔
  });

  return (
    <group {...props} dispose={null}>
      <group ref={boxRef}  rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group position={[71.05, -69.32, 18.15]} rotation={[0, 0, -0.46]} scale={1.85}>
          <mesh geometry={nodes['GY1-material'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_1'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material'].geometry} material={materials.material_8} />
        </group>
        <group position={[-141.08, 139.37, -11.4]} rotation={[0, 0, -2.55]} scale={0.33}>
          <mesh geometry={nodes['LP1-material'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material'].geometry} material={materials.material_13} />
        </group>
        <group position={[-31.45, 146.74, -2.5]} rotation={[0, 0, 1.81]} scale={1.85}>
          <mesh geometry={nodes['GY1-material_1'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_2'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material_1'].geometry} material={materials.material_8} />
        </group>
        <group position={[91.02, -112.31, 39.64]} rotation={[0, 0, -0.66]} scale={1.84}>
          <mesh geometry={nodes['GY1-material_2'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['GY2-material'].geometry} material={materials.material_19} />
          <mesh geometry={nodes['GY3-material'].geometry} material={materials.material_20} />
        </group>
        <group position={[-129.61, -103.13, 11.19]} rotation={[0, 0, 1.07]} scale={0.87}>
          <mesh geometry={nodes['WE2-material'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_2'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-133.11, -105.98, 11.19]} rotation={[0, 0, 0.09]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_1'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_3'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_1'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-150.05, 122.26, 11.19]} rotation={[0, 0, -0.59]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_2'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_4'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_2'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-136.42, 78.44, 11.19]} rotation={[0, 0, 0.09]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_3'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_5'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_3'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-152.13, 99.58, -3.36]} rotation={[0, 0, -0.75]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_6'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material'].geometry} material={materials.material_18} />
        </group>
        <group position={[-130.67, 90.85, -3.36]} rotation={[0, 0, -0.75]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_7'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_1'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_1'].geometry} material={materials.material_18} />
        </group>
        <group position={[-141.58, 124.49, -3.36]} rotation={[0, 0, -0.39]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_8'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_2'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_2'].geometry} material={materials.material_18} />
        </group>
        <group position={[-136.81, 121.35, -7.42]} rotation={[0, 0, -2.24]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_9'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material'].geometry} material={materials.material_15} />
        </group>
        <group position={[-113.53, 100.26, -7.42]} rotation={[0, 0, -0.41]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_10'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_1'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_1'].geometry} material={materials.material_15} />
        </group>
        <group position={[-127.86, -95.05, -7.42]} rotation={[0, 0, -0.41]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_11'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_2'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_2'].geometry} material={materials.material_15} />
        </group>
        <group position={[-130.84, -88.56, -7.42]} rotation={[0, 0, 1.14]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_12'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_3'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_3'].geometry} material={materials.material_15} />
        </group>
        <group position={[-121.11, -86.11, -7.42]} rotation={[0, 0, -0.84]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_13'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_4'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_4'].geometry} material={materials.material_15} />
        </group>
        <group position={[-116.99, -98.03, -7.42]} rotation={[0, 0, -2.11]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_14'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_5'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_5'].geometry} material={materials.material_15} />
        </group>
        <group position={[-132.33, -97.68, -7.42]} rotation={[0, 0, 1.34]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_15'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_6'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_6'].geometry} material={materials.material_15} />
        </group>
        <group position={[84.61, -60.02, 5.99]} rotation={[0, 0, -0.33]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_16'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_3'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_3'].geometry} material={materials.material_18} />
        </group>
        <group position={[89.87, -56.95, 5.99]} rotation={[0, 0, -0.89]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_17'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_4'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_4'].geometry} material={materials.material_18} />
        </group>
        <group position={[86.51, -55.64, 5.99]} rotation={[0, 0, -1.23]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_18'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_5'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_5'].geometry} material={materials.material_18} />
        </group>
        <group position={[91.33, -59.51, 5.99]} rotation={[0, 0, -0.89]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_19'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_6'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_6'].geometry} material={materials.material_18} />
        </group>
        <group position={[87.97, -60.31, 5.99]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_20'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_7'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_7'].geometry} material={materials.material_18} />
        </group>
        <group position={[136.18, 46.31, 11]} rotation={[0, 0, -2.67]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_21'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_7'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_7'].geometry} material={materials.material_15} />
        </group>
        <group position={[127.01, 31.17, 11.19]} rotation={[0, 0, 0.09]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_4'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_22'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_4'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[129.41, 32.31, 11.19]} rotation={[0, 0, 0.09]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_5'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_23'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_5'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[132.31, 36.22, 11.19]} rotation={[0, 0, 0.3]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_6'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_24'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_6'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[125.24, 36.73, 11.19]} rotation={[0, 0, -0.22]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_7'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_25'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_7'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[124.11, 42.66, 11.19]} rotation={[0, 0, -0.22]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_8'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_26'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_8'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[132.31, 43.3, 11.19]} rotation={[0, 0, 0.42]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_9'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_27'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_9'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-98.49, 112.49, -3.36]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_28'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['PK-material_8'].geometry} material={materials.material_17} />
          <mesh geometry={nodes['PK2-material_8'].geometry} material={materials.material_18} />
        </group>
        <group position={[128.9, 38.88, 11.19]} scale={0.87}>
          <mesh geometry={nodes['WE2-material_10'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['BK1-material_29'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['OR1-material_10'].geometry} material={materials['Lamp.001_0']} />
        </group>
        <group position={[-127.86, -83.65, -7.42]} scale={0.87}>
          <mesh geometry={nodes['BK1-material_30'].geometry} material={materials.material_8} />
          <mesh geometry={nodes['YW2-material_8'].geometry} material={materials.material_14} />
          <mesh geometry={nodes['B2-material_8'].geometry} material={materials.material_15} />
        </group>
        <group position={[10.55, 126.39, -2.5]} rotation={[0, 0, 0.84]} scale={1.85}>
          <mesh geometry={nodes['GY1-material_3'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_5'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material_31'].geometry} material={materials.material_8} />
        </group>
        <group position={[120.21, -77.51, -1.32]} rotation={[0, 0, -1.37]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_1'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_1'].geometry} material={materials.material_13} />
        </group>
        <group position={[95.86, -72.87, 1.76]} rotation={[0, 0, 1.62]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_2'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_2'].geometry} material={materials.material_13} />
        </group>
        <group position={[-111.92, 129.81, -9.46]} rotation={[0, 0, -2.55]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_3'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_3'].geometry} material={materials.material_13} />
        </group>
        <group position={[-136.54, 99.76, -5.19]} rotation={[0, 0, -2.55]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_4'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_4'].geometry} material={materials.material_13} />
        </group>
        <group position={[13.7, 53.35, 38.22]} rotation={[-0.05, 0, -0.01]} scale={0.05}>
          <mesh geometry={nodes['GN1-material'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-31.06, 8.5, 41.7]} rotation={[0.11, -0.13, -0.81]} scale={0.04}>
          <mesh geometry={nodes['GN1-material_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_1'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_1'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-30.02, 22.58, 40.76]} rotation={[-0.13, -0.13, -2.78]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_2'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_2'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_2'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-27.12, 18.21, 42.16]} rotation={[-0.03, -0.05, 2.18]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_3'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_3'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_3'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-23.31, 23.19, 41.73]} rotation={[0.02, 0.04, -0.63]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_4'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_4'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_4'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-29.13, 3.98, 43.14]} rotation={[-0.07, -0.01, 0.18]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_5'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_5'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_5'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-32.01, 6, 42.78]} rotation={[0.17, 0.01, -1.75]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_6'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_6'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_6'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-16.03, -39.73, 36.13]} rotation={[0, 0, 0.5]} scale={0.12}>
          <mesh geometry={nodes['BN-material'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_7'].geometry} material={materials.material_5} />
          <mesh geometry={nodes['YW2-material_9'].geometry} material={materials.material_14} />
        </group>
        <group position={[22.37, 46.85, 36.64]} rotation={[0, 0, -2.09]} scale={0.12}>
          <mesh geometry={nodes['BN-material_1'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_8'].geometry} material={materials.material_5} />
          <mesh geometry={nodes['YW2-material_10'].geometry} material={materials.material_14} />
        </group>
        <group position={[13.28, 47.83, 37.41]} rotation={[0, 0, -1.95]} scale={0.12}>
          <mesh geometry={nodes['BN-material_2'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_9'].geometry} material={materials.material_5} />
          <mesh geometry={nodes['YW2-material_11'].geometry} material={materials.material_14} />
        </group>
        <group position={[-28.31, 7.24, 40.72]} rotation={[0, 0, -0.54]} scale={0.12}>
          <mesh geometry={nodes['BN-material_3'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_10'].geometry} material={materials.material_5} />
          <mesh geometry={nodes['YW2-material_12'].geometry} material={materials.material_14} />
        </group>
        <group position={[-30.23, 8.04, 42.75]} scale={1.01}>
          <mesh geometry={nodes['GN1-material_7'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['BN-material_4'].geometry} material={materials.material_4} />
        </group>
        <group position={[-118.18, -16.75, 7.73]} rotation={[0, 0, -2.81]} scale={1.85}>
          <mesh geometry={nodes['GY1-material_4'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_9'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material_32'].geometry} material={materials.material_8} />
        </group>
        <group position={[74.25, -25.14, -4.78]} rotation={[0, 0, 2.43]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_5'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_5'].geometry} material={materials.material_13} />
        </group>
        <group position={[58.8, -41.4, 1.76]} rotation={[0, 0, 3.14]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_6'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_6'].geometry} material={materials.material_13} />
        </group>
        <group position={[-91.25, 76.6, 7.46]} rotation={[0, 0, 3.14]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_7'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_7'].geometry} material={materials.material_13} />
        </group>
        <group position={[-75.79, 92.86, 0.93]} rotation={[0, 0, 2.43]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_8'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_8'].geometry} material={materials.material_13} />
        </group>
        <group position={[-115.45, 77.79, 0.93]} rotation={[0, 0, -2.55]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_9'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_9'].geometry} material={materials.material_13} />
        </group>
        <group position={[-103.79, 58.63, 7.46]} rotation={[0, 0, -1.84]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_10'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_10'].geometry} material={materials.material_13} />
        </group>
        <group position={[-123.65, -89.53, -7.89]} rotation={[0, 0, -1.84]} scale={0.32}>
          <mesh geometry={nodes['LP1-material_11'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_11'].geometry} material={materials.material_13} />
        </group>
        <group position={[-122.83, -107.22, -8.45]} rotation={[0, 0, -0.29]} scale={0.28}>
          <mesh geometry={nodes['LP1-material_12'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_12'].geometry} material={materials.material_13} />
        </group>
        <group position={[134.08, -43.39, -2]} rotation={[0, 0, -0.29]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_13'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_13'].geometry} material={materials.material_13} />
        </group>
        <group position={[99.43, -50.96, -0.12]} rotation={[0, 0, -0.29]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_14'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_14'].geometry} material={materials.material_13} />
        </group>
        <group position={[128.51, 6.01, 7.46]} rotation={[0, 0, -0.29]} scale={0.33}>
          <mesh geometry={nodes['LP1-material_15'].geometry} material={materials.material_12} />
          <mesh geometry={nodes['LP2-material_15'].geometry} material={materials.material_13} />
        </group>
        <group position={[24.67, 51.64, 38.08]} rotation={[-0.18, 0, 0]} scale={0.06}>
          <mesh geometry={nodes['GN1-material_8'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_7'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_7'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[24.72, 45.59, 39.21]} rotation={[0.04, 0.05, -2.33]} scale={0.08}>
          <mesh geometry={nodes['GN1-material_9'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_8'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_8'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-17.28, -44.94, 37.62]} rotation={[0.31, -0.01, -2.43]} scale={0.07}>
          <mesh geometry={nodes['GN1-material_10'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_9'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_9'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-22.25, -37.37, 40.17]} rotation={[0.18, 0.08, -0.89]} scale={0.07}>
          <mesh geometry={nodes['GN1-material_11'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_10'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_10'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[-13.05, -36.61, 38.11]} rotation={[-0.02, -0.02, 0.01]} scale={0.06}>
          <mesh geometry={nodes['GN1-material_12'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['GN3-material_11'].geometry} material={materials.material_10} />
          <mesh geometry={nodes['GN4-material_11'].geometry} material={materials['Lamp.001']} />
        </group>
        <group position={[124.19, -61.41, -4.95]} scale={10.43}>
          <mesh geometry={nodes['BN-material_5'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['BN2-material'].geometry} material={materials.material_9} />
        </group>
        <group position={[116.32, 22.93, 10.83]} rotation={[0, 0, -0.73]} scale={1.85}>
          <mesh geometry={nodes['GY1-material_5'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_10'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material_33'].geometry} material={materials.material_8} />
        </group>
        <group position={[85.82, -8.61, 10.83]} scale={1.85}>
          <mesh geometry={nodes['GY1-material_6'].geometry} material={materials.Lamp} />
          <mesh geometry={nodes['WE1-material_11'].geometry} material={materials.material_7} />
          <mesh geometry={nodes['BK1-material_34'].geometry} material={materials.material_8} />
        </group>
        <group position={[24.3, 47.26, 57.48]} rotation={[-3.01, -0.09, 1]} scale={0.82}>
          <mesh geometry={nodes['GN1-material_13'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['BN-material_6'].geometry} material={materials.material_4} />
        </group>
        <group position={[-26.4, -44.45, 57.93]} rotation={[0.6, 0.36, 2.15]} scale={2.36}>
          <mesh geometry={nodes['GN1-material_14'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['BN-material_7'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_30'].geometry} material={materials.material_5} />
        </group>
        <group position={[-8.06, -48.68, 57.93]} rotation={[-0.66, 0.21, -1.74]} scale={2.44}>
          <mesh geometry={nodes['GN1-material_15'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['BN-material_8'].geometry} material={materials.material_4} />
          <mesh geometry={nodes['G2-material_31'].geometry} material={materials.material_5} />
        </group>
        <group position={[28.27, 7.94, -32.3]} scale={4.08}>
          <mesh geometry={nodes['BE1-material'].geometry} material={materials.material} />
          <mesh geometry={nodes['YW1-material'].geometry} material={materials.material_1} />
          <mesh geometry={nodes['WE2-material_11'].geometry} material={materials.material_2} />
        </group>
        <mesh geometry={nodes['G2-material'].geometry} material={materials.material_5} position={[-103.73, 74.94, 0.54]} rotation={[0, 0, -2.39]} scale={0.42} />
        <mesh geometry={nodes['WE1-material'].geometry} material={materials.material_7} position={[-121.78, -57.55, -4.99]} rotation={[-2.85, -0.1, 1.51]} scale={[8.56, 2.13, 16.03]} />
        <mesh geometry={nodes['G2-material_1'].geometry} material={materials.material_5} position={[-120.98, 136.52, -20.98]} rotation={[0, 0, -2.39]} scale={0.42} />
        <mesh geometry={nodes['G2-material_2'].geometry} material={materials.material_5} position={[-120.98, 136.52, -20.98]} rotation={[0, 0, -2.39]} scale={0.42} />
        <mesh geometry={nodes['WE1-material_3'].geometry} material={materials.material_7} position={[-36.9, -23.98, 48.82]} scale={7.01} />
        <mesh geometry={nodes['WE1-material_4'].geometry} material={materials.material_7} position={[-123.62, 111.15, 35.4]} scale={7.01} />
        <mesh geometry={nodes['G2-material_3'].geometry} material={materials.material_5} position={[122.67, -81.19, -8.13]} rotation={[0, 0, -0.62]} scale={0.42} />
        <mesh geometry={nodes['G2-material_4'].geometry} material={materials.material_5} position={[93.99, -68.86, -5.05]} rotation={[0, 0, 2.37]} scale={0.42} />
        <mesh geometry={nodes['G2-material_5'].geometry} material={materials.material_5} position={[-114.36, 126.13, -16.26]} rotation={[0, 0, -1.79]} scale={0.42} />
        <mesh geometry={nodes['G2-material_6'].geometry} material={materials.material_5} position={[-138.98, 96.08, -11.99]} rotation={[0, 0, -1.79]} scale={0.42} />
        <mesh geometry={nodes['WE1-material_6'].geometry} material={materials.material_7} position={[-97.4, -72.03, -1.16]} scale={7.01} />
        <mesh geometry={nodes['WE1-material_7'].geometry} material={materials.material_7} position={[-97.22, -62.86, -1.92]} rotation={[-0.09, -0.3, -0.02]} scale={[8.56, 2.13, 16.03]} />
        <mesh geometry={nodes['WE1-material_8'].geometry} material={materials.material_7} position={[105.73, -62.98, -1.16]} scale={7.01} />
        <mesh geometry={nodes['G2-material_11'].geometry} material={materials.material_5} position={[-14.68, -41.14, 37.79]} rotation={[-1.76, 0.51, 0.24]} scale={2.36} />
        <mesh geometry={nodes['G2-material_12'].geometry} material={materials.material_5} position={[-24.64, 21.03, 41.11]} rotation={[1.19, 0.36, 2.5]} scale={2.36} />
        <mesh geometry={nodes['G2-material_13'].geometry} material={materials.material_5} position={[118.94, -30.38, -6.9]} rotation={[0, 0, -1.22]} scale={0.34} />
        <mesh geometry={nodes['G2-material_14'].geometry} material={materials.material_5} position={[115.41, -27.71, -6.9]} rotation={[0, 0, 0.47]} scale={0.34} />
        <mesh geometry={nodes['G2-material_15'].geometry} material={materials.material_5} position={[70.06, -23.75, -11.58]} rotation={[0, 0, -3.1]} scale={0.42} />
        <mesh geometry={nodes['G2-material_16'].geometry} material={materials.material_5} position={[54.69, -43.06, -5.05]} rotation={[0, 0, -2.39]} scale={0.42} />
        <mesh geometry={nodes['G2-material_17'].geometry} material={materials.material_5} position={[-95.35, 74.94, 0.66]} rotation={[0, 0, -2.39]} scale={0.42} />
        <mesh geometry={nodes['G2-material_18'].geometry} material={materials.material_5} position={[-79.99, 94.25, -5.88]} rotation={[0, 0, -3.1]} scale={0.42} />
        <mesh geometry={nodes['G2-material_19'].geometry} material={materials.material_5} position={[-135.57, -93.1, -16.95]} rotation={[0, 0, -0.51]} scale={0.42} />
        <mesh geometry={nodes['G2-material_20'].geometry} material={materials.material_5} position={[-107.3, -77.27, -11.4]} rotation={[0, 0, 0.47]} scale={0.42} />
        <mesh geometry={nodes['G2-material_21'].geometry} material={materials.material_5} position={[-117.9, 74.11, -5.88]} rotation={[0, 0, -1.79]} scale={0.42} />
        <mesh geometry={nodes['G2-material_22'].geometry} material={materials.material_5} position={[-103.27, 54.24, 0.66]} rotation={[0, 0, -1.09]} scale={0.42} />
        <mesh geometry={nodes['G2-material_23'].geometry} material={materials.material_5} position={[-123.14, -93.76, -14.45]} rotation={[0, 0, -1.09]} scale={0.4} />
        <mesh geometry={nodes['G2-material_24'].geometry} material={materials.material_5} position={[-118.59, -106.79, -14.45]} rotation={[0, 0, 0.47]} scale={0.4} />
        <mesh geometry={nodes['G2-material_25'].geometry} material={materials.material_5} position={[134.96, -48.54, -10.76]} rotation={[0, 0, -1.11]} scale={0.42} />
        <mesh geometry={nodes['G2-material_26'].geometry} material={materials.material_5} position={[103.82, -50.5, -6.93]} rotation={[0, 0, 0.47]} scale={0.42} />
        <mesh geometry={nodes['G2-material_27'].geometry} material={materials.material_5} position={[132.9, 6.47, 0.66]} rotation={[0, 0, 0.47]} scale={0.42} />
        <mesh geometry={nodes['G2-material_28'].geometry} material={materials.material_5} position={[-17.37, -25.35, 56.95]} rotation={[0.59, 0.37, 2.16]} scale={2.36} />
        <mesh geometry={nodes['G2-material_29'].geometry} material={materials.material_5} position={[-16.98, -25.95, 56.95]} rotation={[0.59, 0.37, 2.16]} scale={2.36} />
      </group>
    </group>
  )
}

useGLTF.preload('/low_poly_island.glb')
