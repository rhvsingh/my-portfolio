import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import CanvasLoader from "../three/canvas-loader"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
    nodes: {
        Object_2?: THREE.Mesh
    }
    materials: {
        wire_228184153?: THREE.MeshStandardMaterial
    }
}

const GreatMountainModel = (props: React.ComponentProps<"group">) => {
    const { nodes, materials } = useGLTF("/3d-models/great-mountain/scene.gltf") as GLTFResult
    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="great_mountainobjcleanergles">
                        {nodes.Object_2 && materials.wire_228184153 && (
                            <mesh
                                name="Object_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_2.geometry}
                                material={materials.wire_228184153}
                            />
                        )}
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/3d-models/great-mountain/scene.gltf")

const CameraRig = () => {
    const { camera } = useThree()
    const angleRef = useRef(0)

    useFrame(() => {
        angleRef.current += 0.001
        const radius = 3
        const y = 2

        camera.position.x = Math.cos(angleRef.current) * radius
        camera.position.z = Math.sin(angleRef.current) * radius
        camera.position.y = y

        camera.lookAt(0, 0, 0)
    })

    return null
}

const GreatMountain = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-30">
            <Canvas className="w-full h-full">
                <CameraRig />
                <Suspense fallback={<CanvasLoader />}>
                    <GreatMountainModel scale={0.009} position={[0, -2, 0]} rotation={[0, Math.PI / 4, 0]} />
                </Suspense>

                <ambientLight intensity={3} color="skyblue" />
                <directionalLight position={[10, 10, 10]} intensity={1} />
            </Canvas>
        </div>
    )
}

export default GreatMountain
