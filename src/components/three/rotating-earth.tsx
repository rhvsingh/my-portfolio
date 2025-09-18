import { useRef } from "react"
import * as THREE from "three"
import { Sphere, ThreeCanvas, useFrame } from "./three-provider"

function Earth() {
    const earthRef = useRef<THREE.Mesh>(null!)
    const atmosphereRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.02
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y += 0.005
        }
    })

    return (
        <group>
            <Sphere ref={earthRef} args={[1, 32, 32]}>
                <meshStandardMaterial color="#22c55e" transparent opacity={0.5} wireframe />
            </Sphere>

            <Sphere ref={atmosphereRef} args={[1.1, 16, 16]}>
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} wireframe />
            </Sphere>

            <Sphere args={[0.7]}>
                <meshStandardMaterial emissive="#fbbf24" emissiveIntensity={0.3} />
            </Sphere>
        </group>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Earth />
        </>
    )
}

const RotatingEarth = () => {
    return (
        <div className="w-20 h-20">
            <ThreeCanvas camera={{ position: [0, 0, 3], fov: 60 }}>
                <Scene />
            </ThreeCanvas>
        </div>
    )
}

export default RotatingEarth
