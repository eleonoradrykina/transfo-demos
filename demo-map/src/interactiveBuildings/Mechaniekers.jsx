/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { SRGBColorSpace } from 'three'

export default function Mechaniekers(props) {
const { nodes, materials } = useGLTF('./models/mechaniekers.glb')
const colorMap = useLoader(TextureLoader, './models/textures/mechaniekers-baked.jpg')
colorMap.flipY = false
colorMap.colorSpace = SRGBColorSpace

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.573, 0.306, 0.635]}
        rotation={[0, 0.009, 0]}
        scale={[0.209, 0.324, 0.624]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.building}
        >
          <Html
            position={ [-0.85,3.0,0.2]}
            distanceFactor={6}
            occlude>
              <p className='building-label'>{props.label}</p>
            </Html>
          <meshStandardMaterial 
          roughness={1}
          metalness={0}
          map={colorMap}
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials.roof}
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

useGLTF.preload('./models/mechaniekers.glb')
