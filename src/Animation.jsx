import { Canvas } from '@react-three/fiber'
import './App.css'
import Box from './components/Box'





function Animation() {


  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={0.2} />
        <ambientLight intensity={0.4} />

        <Box position={[0,0,0]} size={[1,1,1]} color={"hotpink"} />
        <Box position={[1,1,1]} size={[0.5,0.5,0.5]} color={"lightgreen"} />
       
      </Canvas>
    </>
  )
}

export default Animation
