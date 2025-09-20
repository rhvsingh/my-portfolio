import dynamic from "next/dynamic"

// export const DynamicParticleSystem = dynamic(() => import("./three/ParticleSystem"), {
//     ssr: false,
//     loading: () => (
//         <div className="absolute inset-0 overflow-hidden opacity-20">
//             {[...Array(50)].map((_, i) => (
//                 <div
//                     key={i}
//                     className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
//                     style={{
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                         animationDelay: `${Math.random() * 4}s`,
//                         animationDuration: `${1 + Math.random() * 3}s`,
//                     }}
//                 />
//             ))}
//         </div>
//     ),
// })
