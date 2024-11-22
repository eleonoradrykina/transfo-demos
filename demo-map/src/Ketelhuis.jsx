/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Ketelhuis(props) {
  const { nodes, materials } = useGLTF('./models/ketelhuis.glb')
  const colorMap = useLoader(TextureLoader, './models/textures/ketelhuis-baked.jpg')
  colorMap.flipY = false

  return (
    <group {...props} dispose={null}>
      <group position={[-0.793, 0.87, -0.556]} rotation={[0, 0.009, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.building}
        >
        <meshStandardMaterial 
          map={colorMap}
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials.roof}
        >
        <meshStandardMaterial 
          map={colorMap}
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.roof}
          position={[-0.008, 0.036, 0.103]}
          scale={[0.38, 0.882, 0.923]}
        >
        <meshStandardMaterial 
          map={colorMap}
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials['Material.006']}
          position={[0.475, 0.788, 0.65]}
          rotation={[0, 0.005, 0]}
        >
        <meshStandardMaterial 
          map={colorMap}
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/ketelhuis.glb')
