import { memo, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Grid, Center, GizmoHelper, GizmoViewport,
  AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF
} from '@react-three/drei'
import { useControls } from 'leva'

export default function App() {
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#6f6f6f',
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: '#9d4b4b',
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true
  })

  return (
    <Canvas shadows camera={{ position: [10, 12, 12], fov: 25 }}>
      <group position={[0, -0.5, 0]}>
        <Center top>
          <Suzi rotation={[-0.63, 0, 0]} scale={2} />
        </Center>

        <Center top position={[-2, 0, 2]}>
          <mesh castShadow>
            <sphereGeometry args={[0.5, 64, 64]} />
            <meshStandardMaterial color="#9d4b4b" />
          </mesh>
        </Center>

        <Center top position={[2.5, 0, 1]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#9d4b4b" />
          </mesh>
        </Center>

        <Shadows />
        <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
      </group>

      <OrbitControls makeDefault />
      <Environment preset="city" />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
      </GizmoHelper>
    </Canvas>
  )
}

const Shadows = memo(() => (
  <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
))

function Suzi(props) {
  const { nodes, scene } = useGLTF('/model.gltf')

  // Debug: see the loaded nodes in console
  useEffect(() => {
    console.log('GLTF nodes:', nodes)
  }, [nodes])

  // Use the specific mesh if it exists, otherwise render the whole scene
  if (nodes?.Suzanne?.geometry) {
    return (
      <mesh castShadow receiveShadow geometry={nodes.Suzanne.geometry} {...props}>
        <meshStandardMaterial color="#9d4b4b" />
      </mesh>
    )
  }

  // Fallback: render entire model as primitive
  return <primitive object={scene} {...props} />
}

// Preload the model to improve performance
useGLTF.preload('/model.gltf')
