import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export default function MapModel() {

const mapAngle = useControls('Map',{
    mapAngle: {
        value: 0,
        min: -3.14,
        max: 3.14159,
        step: 0.01,
    },
})

    // const model = useGLTF('./models/map-bachelors-full.glb')
    const model = useGLTF('./models/map-bachelors.glb')

    return (
        <>
         <primitive object={model.scene} scale={ 1.0 } rotation-y={-Math.PI*0.2}  />
        </>
    )

}

// useGLTF.preload('./models/map-bachelors-full.glb')
useGLTF.preload('./models/map-bachelors.glb')
