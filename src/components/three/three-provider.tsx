import { Suspense, useState, useEffect } from "react"
import { Canvas, CanvasProps } from "@react-three/fiber"
import { Skeleton } from "@/components/ui/skeleton"

// Re-export commonly used Three.js components to centralize imports
export { useFrame, useThree, type ThreeEvent } from "@react-three/fiber"

export {
    Sphere,
    Box,
    Octahedron,
    Text,
    Float,
    Tube,
    OrbitControls,
    RoundedBox,
    Html,
    Points,
    PointMaterial,
    Plane,
} from "@react-three/drei"

// Centralized Three.js Canvas configuration to prevent multiple instances
export const ThreeCanvas = ({
    children,
    camera = { position: [0, 0, 8], fov: 60 },
    shadows = false,
    style = { background: "transparent" },
    className = "",
    ...props
}: CanvasProps & { className?: string }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={className} style={style}>
                <div className="flex items-center justify-center h-full">
                    <div>Loading 3D scene...</div>
                </div>
            </div>
        )
    }

    return (
        <Suspense fallback={<Skeleton className="h-[20px] w-[20px] rounded-full" />}>
            <Canvas
                camera={camera}
                shadows={shadows}
                style={style}
                className={className}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                frameloop="always"
                dpr={[1, 2]}
                {...props}
            >
                {children}
            </Canvas>
        </Suspense>
    )
}
