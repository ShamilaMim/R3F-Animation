
const Cone = ({position,size,color}) => {
  return (
    <mesh position={position}>

      <coneGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Cone
