import { OrbitControls, Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import MapModel from './MapModel'
import MainBuilding from './MainBuilding'
import { useRef, useState, useEffect } from 'react'
import { useControls } from 'leva'


export default function Experience() {

    const dirLight = useRef()
    const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    if (dirLight.current) {
      setIsReady(true)
    }
  })

  const cameraControls = useControls('Camera',{
    minDistance: {
        value: 5.1,
        min: 0,
        max: 10,
        step: 0.1,
    },
    maxDistance: {
        value: 16.3,
        min: 5,
        max: 100,
        step: 0.1,
    },
    minAzimuthAngle: {
        value: -0.4,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
    },
    maxAzimuthAngle: {
        value: 0.81,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
    },
    maxPolarAngle: {
        value: 1.26,
        min: 0,
        max: Math.PI,
        step: 0.01,
    },
    minPolarAngle: {
        value: 0.86,
        min: 0,
        max: Math.PI,
        step: 0.01,
    },
    smoothTime: {
        value: 0.25,
        min: 0,
        max: 1,
        step: 0.01,
    },
    draggingSmoothTime: {
        value: 0.125,
        min: 0,
        max: 1,
        step: 0.01,
    },
    maxSpeed: {
        value: 1.5,
        min: 0,
        max: 10,
        step: 0.01,
    },
    azimuthRotateSpeed: {
        value: 1.0,
        min: 0,
        max: 10,
        step: 0.01,
    },
})
    return (
        <>
        <Perf position="top-left"/>
        <OrbitControls 
           minDistance={cameraControls.minDistance}
           maxDistance={cameraControls.maxDistance}
           minAzimuthAngle={cameraControls.minAzimuthAngle}
           maxAzimuthAngle={cameraControls.maxAzimuthAngle}
           maxPolarAngle={cameraControls.maxPolarAngle}
           minPolarAngle={cameraControls.minPolarAngle}
           smoothTime = {cameraControls.smoothTime}
           draggingSmoothTime = {cameraControls.draggingSmoothTime}
           maxSpeed = {cameraControls.maxSpeed}
           azimuthRotateSpeed = {cameraControls.azimuthRotateSpeed}
           dampingFactor = {0.1}
           />

        {/* <directionalLight
            ref={dirLight}
            castShadow 
            shadow-normalBias={ 0.75 }
            position={ [ 4, 6, 6 ] } 
            intensity={ 1.5 }  /> */}
        <ambientLight/>
       {isReady && (
        <directionalLightHelper args={[dirLight.current, 2, 0xff0000]} />
      )}
        <MainBuilding rotation-y={ - Math.PI * 0.2} position = {[0.5, 0, 1.2]} />
        <MapModel />
        <mesh position = {[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>

        </>
    )
    }   