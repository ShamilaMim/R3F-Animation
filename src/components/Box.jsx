import { useFrame } from "@react-three/fiber"
import { useRef } from "react"



const Box = ({position, size, color}) => {

    const ref = useRef ()

    useFrame((state, delta) =>{
        ref.current.rotation.x +=delta*0.9
        ref.current.rotation.y +=delta*0.4
        ref.current.rotation.z +=Math.sin(delta)
        ref.current.position.z =Math.sin(state.clock.elapsedTime)*4

    })
    return (

        <mesh position={ position } ref={ref}>
            <boxGeometry args={ size } />
            <meshStandardMaterial color={ color } />
        </mesh>
    )

}

export default Box