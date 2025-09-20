"use client"

import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import CanvasLoader from "../three/canvas-loader"
import { useMediaQuery } from "react-responsive"

type GLTFResult = GLTF & {
    nodes: {
        Plane_0?: THREE.Mesh
    }
    materials: {
        Hills?: THREE.MeshStandardMaterial
    }
}

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

const TheHillsModel = (props: React.ComponentProps<"group">) => {
    const { nodes, materials } = useGLTF("/3d-modals/the-hills/scene.gltf") as GLTFResult

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Root">
                        <group name="Plane">
                            {nodes.Plane_0 && materials.Hills && (
                                <mesh
                                    name="Plane_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Plane_0.geometry}
                                    material={materials.Hills}
                                />
                            )}
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

// Preload the GLTF file
useGLTF.preload("/3d-modals/the-hills/scene.gltf")

const TheHills = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
    return (
        <div className="absolute inset-0 -z-10 opacity-30">
            <Canvas className="w-full h-full">
                <CameraRig />
                <Suspense fallback={<CanvasLoader />}>
                    <TheHillsModel scale={isMobile ? 4 : 4} position={[0.9, 0, 0]} />
                </Suspense>

                <ambientLight intensity={3} color={"skyblue"} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
            </Canvas>
        </div>
    )
}

export default TheHills
