import { OrbitControls, Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import MapModel from './MapModel'
import MainBuilding from './MainBuilding'
import { useRef, useState, useEffect } from 'react'


export default function Experience() {
    // const mainBuildingRef = useRef()
    const dirLight = useRef()
     const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    if (dirLight.current) {
      setIsReady(true)
    }
  })
    return (
        <>
        <Perf position="top-left"/>
        <OrbitControls />

        <directionalLight
            ref={dirLight}
            castShadow 
            shadow-normalBias={ 0.75 }
            position={ [ 4, 6, 6 ] } 
            intensity={ 1.5 }  />
        <ambientLight/>
       {isReady && (
        <directionalLightHelper args={[dirLight.current, 2, 0xff0000]} />
      )}
        <MainBuilding rotation-y={ - Math.PI * 0.2} position = {[0.5, 0, 1.2]} />
        <MapModel />

        </>
    )
    }   