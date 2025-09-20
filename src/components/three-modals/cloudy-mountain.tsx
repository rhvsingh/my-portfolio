import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import CanvasLoader from "../three/canvas-loader"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
    nodes: {
        Object_2: THREE.LineSegments
        Object_3: THREE.Mesh
        Object_4: THREE.Mesh
        Object_5: THREE.Mesh
        Object_6: THREE.Mesh
    }
    materials: {
        base: THREE.LineBasicMaterial
        base2: THREE.MeshStandardMaterial
        cliff: THREE.MeshStandardMaterial
        cloud: THREE.MeshStandardMaterial
    }
}

export function CloudyMountainModel(props: React.ComponentProps<"group">) {
    const { nodes, materials } = useGLTF("/3d-models/cloudy-mountain/scene.gltf") as unknown as GLTFResult
    const ref = useRef<THREE.Group>(null)

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.001
        }
    })
    return (
        <group ref={ref} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="cloudy_mountain">
                        <lineSegments name="Object_2" geometry={nodes.Object_2.geometry} material={materials.base} />
                        <mesh
                            name="Object_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_3.geometry}
                            material={materials.base2}
                        />
                        <mesh
                            name="Object_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.cliff}
                        />
                        <mesh
                            name="Object_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.cloud}
                        />
                        <mesh
                            name="Object_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.cloud}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/3d-models/cloudy-mountain/scene.gltf")

const CloudyMountain = () => {
    return (
        <div className="absolute inset-0 -z-10 opacity-30">
            <Canvas className="w-full h-full">
                {/* <CameraRig /> */}
                <Suspense fallback={<CanvasLoader />}>
                    <CloudyMountainModel position={[2, 0, 4]} scale={5} />
                </Suspense>

                <ambientLight intensity={3} color="skyblue" />
                <directionalLight position={[10, 10, 10]} intensity={1} />
            </Canvas>
        </div>
    )
}

export default CloudyMountain
