import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { CineonToneMapping } from 'three'
import { Bvh } from '@react-three/drei'
import './index.css'

import Experience from './Experience'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Canvas 
      //  flat
        shadows
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
  </StrictMode>
)
