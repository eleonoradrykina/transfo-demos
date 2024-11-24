import { OrbitControls, Html } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import MapModel from './MapModel'
import MachineZaal from './MachineZaal'
import Mechaniekers from './Mechaniekers'
import Ketelhuis from './Ketelhuis'
import { useRef, useState, useEffect } from 'react'
import { useControls } from 'leva'
import { useThree } from '@react-three/fiber'
import { ToneMapping, EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { ToneMappingMode, BlendFunction } from 'postprocessing'



export default function Experience() {

    let selectedMeshes = null

    const clearSelection = (meshes) => {
    console.log('clearSelection')
    //turn off the light:
    if (meshes) {
        meshes.forEach(mesh => {
            mesh.material.emissiveIntensity = 0
        })
    }   
  }

  const handleBuildingClick = (e) => {
    e.stopPropagation()
    clearSelection(selectedMeshes)
    const newMeshes =  e.eventObject.children[0].children
    //light up the building:
    newMeshes.forEach(mesh => {
      mesh.material.emissiveIntensity = 3
    })

    selectedMeshes = newMeshes
  }

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
        <EffectComposer>
            <ToneMapping mode= {ToneMappingMode.OPTIMIZED_CINEON} />
            <Bloom luminanceThreshold={ 0.3 } 
            mipmapBlur 
            intensity={ 1.5 }/>
            {/* <DepthOfField 
                    focusDistance={0.06}
                    focalLength={0.02}
                    bokehScale={8} /> */}
        </EffectComposer>
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
           target={selectedMeshes ? selectedMeshes[0].position : null}
           />

        {/* <directionalLight
            ref={dirLight}
            castShadow 
            shadow-normalBias={ 0.75 }
            position={ [ 4, 6, 6 ] } 
            intensity={ 1.5 }  /> */}
        <ambientLight
        intensity={1.0} />
        <MapModel />
        <MachineZaal onClick={handleBuildingClick} />
        <Mechaniekers onClick={handleBuildingClick} />
        <Ketelhuis onClick={handleBuildingClick} />
        </>
    )
    }   