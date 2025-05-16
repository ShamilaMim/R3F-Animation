import { Canvas } from '@react-three/fiber';
import './App.css';
import Box from './components/Box';
import Cone from './components/Cone';
import { OrbitControls} from '@react-three/drei';
import { GridHelper } from 'three'; // Import from three.js directly
import Sphere from './components/Sphere';

function CustomGrid() {
  return (
    <primitive
      object={new GridHelper(10, 12, 'red', 'white')} // Custom colors
      position={[0, -1, 0]} // Position it slightly below objects
    />
  );
}

function App() {
  return (
    <>
      <Canvas>
        {/* Lights */}
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <ambientLight intensity={0.8} />


        {/* Custom Grid */}
        <CustomGrid />

        <Sphere position={[0,0,0]}  size={[1,32,32]} color={'lightgreen'} isWireFrame={true}/>

        {/* OrbitControls */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
