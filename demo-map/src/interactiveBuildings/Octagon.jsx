/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { SRGBColorSpace } from 'three'

export default function Octagon(props) {
  const { nodes, materials } = useGLTF('./models/octagon.glb')
  const colorMap = useLoader(TextureLoader, './models/textures/octagon-baked.jpg')
  colorMap.flipY = false
  colorMap.colorSpace = SRGBColorSpace
  return (
    <group {...props} dispose={null}>
        <group position={[1.89, -0.102, -1.122]} rotation={[0, -0.375, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        position={[0.1, 0.14, 0.26]}
        rotation={[0, 0.4, -Math.PI]}
        scale={[-0.109, -0.151, -0.075]}
      >
        <meshStandardMaterial 
          map={colorMap} 
          emissive="#BC78FF" 
          emissiveIntensity={ 0 } 
        />
      </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
        //   material={materials['Material.001']}
        >
          <meshStandardMaterial 
            map={colorMap} 
            emissive="#BC78FF" 
            emissiveIntensity={ 0 } 
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials.roof}
        >
            <Html
              position={ [-0.15,1.15,0.15]}
              distanceFactor={6}
              occlude>
              <p className='building-label'>{props.label}</p>
            </Html>
          <meshStandardMaterial 
            map={colorMap} 
            emissive="#BC78FF" 
            emissiveIntensity={ 0 } 
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials.building}
        >
          <meshStandardMaterial 
            map={colorMap} 
            emissive="#BC78FF" 
            emissiveIntensity={ 0 } 
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/octagon.glb')