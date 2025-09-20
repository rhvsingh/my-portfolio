import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
    const { progress } = useProgress()
    return (
        <Html
            as="div"
            center
            style={{
                display: "grid",
                placeItems: "center",
            }}
        >
            <div className="text-white text-2xl">{progress} % loaded</div>
        </Html>
    )
}

export default CanvasLoader
