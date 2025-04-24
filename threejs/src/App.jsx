import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    // Rotación
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.2

    // Movimiento senoidal
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2

    // Escala pulsante
    const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.2
    meshRef.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App 