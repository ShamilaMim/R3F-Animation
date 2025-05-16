function Basic() {


    return (
      <>
        <Canvas>
          <directionalLight position={[0, 0, 2]} intensity={0.2} />
          <ambientLight intensity={0.4} />
  
          <group position={[1,0,0]}>
            <Box position={[1, 0, 2]} size={[1, 1, 2]} color={"green"} />
            <Box position={[-2, 0, 2]} size={[1, 1, 2]} color={"red"} />
            <Box position={[0,0,0]} size={[1,1,1]} color={"yellow"} />
          </group>
  
        </Canvas>
      </>
    )
  }