import { Canvas } from '@react-three/fiber';
import './App.css';
import Box from './components/Box';
import Cone from './components/Cone';
import { OrbitControls} from '@react-three/drei';
import { GridHelper } from 'three'; // Import from three.js directly

function CustomGrid() {
  return (
    <primitive
      object={new GridHelper(10, 10, 'red', 'white')} // Custom colors
      position={[0, -1, 0]} // Position it slightly below objects
    />
  );
}

function Grid() {
  return (
    <>
      <Canvas>
        {/* Lights */}
        <directionalLight position={[0, 0, 2]} intensity={0.2} />
        <ambientLight intensity={0.4} />


        {/* Custom Grid */}
        <CustomGrid />

        {/* First Cone */}
        <Cone position={[0, 0, 0]} size={[1, 2, 18]} color={"orange"} />

        {/* Second Cone */}
        <Cone position={[2, 1, 1]} size={[1, 2, 18]} color={"red"} />

        {/* Boxes */}
        <Box position={[0, 0, 0]} size={[1, 1, 1]} color={"hotpink"} />
        <Box position={[1, 2, 1]} size={[0.5, 0.5, 0.5]} color={"lightgreen"} />

        {/* OrbitControls */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Grid;
