import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Leva } from 'leva'
import { Bvh } from '@react-three/drei'
import './index.css'

import Experience from './Experience'

export default function Map() {

  return (
    <>
      <Leva collapsed />
       <Canvas 

        // onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
        flat
        gl= { { 
            // antialias: true,
             toneMappingExposure: 0.5
        } }
        camera={ {
            fov: 45,
            near: 0.1,
            far: 100,
            position: [ 2, 5, 10 ]
        } }
        onPointerMissed={() => console.log('pointer missed')}
    >
        <Bvh>
            <Experience />
        </Bvh>
    </Canvas>
    </>
  )
}