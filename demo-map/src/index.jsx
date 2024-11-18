import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'

import Experience from './Experience'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2, 5, 10 ]
        } }
    >
        <Experience />
    </Canvas>
  </StrictMode>
)
