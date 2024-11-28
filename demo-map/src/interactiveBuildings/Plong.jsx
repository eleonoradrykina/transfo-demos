/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { SRGBColorSpace } from 'three'

export default function Plong(props) {
  const { nodes } = useGLTF('./models/plong.glb')
  const colorMap = useLoader(TextureLoader, './models/textures/plong-baked.jpg')
  colorMap.flipY = false
  colorMap.colorSpace = SRGBColorSpace
  return (
    <group {...props} dispose={null}>
     <group>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.plong.geometry}
        position={[1.504, 0.12, -0.343]}
        rotation={[0, 0.009, 0]}
      >
        <meshStandardMaterial 
        map={colorMap}
        emissive="#BC78FF" 
        emissiveIntensity={0}
        />
      </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/plong.glb')