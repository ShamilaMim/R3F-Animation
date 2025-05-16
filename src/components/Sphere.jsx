import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"


function Sphere({position, size, color, isWireFrame=false}) {
    const ref= useRef()
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    useFrame((state,delta)=>{
        const speed= isHovered ? 0.9: 0.2
        ref.current.rotation.y +=delta*speed

    });
    
  return (
    <mesh 
        position={position} 
        ref={ref}
        onPointerEnter={(e)=>(e.stopPropagation(), setIsHovered(true))}
        onPointerLeave={ ()=> setIsHovered(false)}
        onClick= { ()=> setIsClicked(!isClicked) }
        scale={ isClicked ? 1.5: 1 }
    >
        <sphereGeometry args={size} />
        <meshStandardMaterial 
          color={isHovered ? "yellow": color }
          wireframe={isWireFrame}
        />
      </mesh>
  )
}

export default Sphere
