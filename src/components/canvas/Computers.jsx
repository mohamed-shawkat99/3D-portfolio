import React , {Suspense,useEffect,useState} from 'react'
import{Canvas, events} from '@react-three/fiber';
import { OrbitControls, Preload , useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'
import { three } from 'maath';


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.6}
        position={isMobile ? [-0, -3, -0.2] : [0, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    // Initial check
    setIsMobile(mediaQuery.matches);

    // Handler for media query change
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Attach listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return(
    <Canvas
    // frameloop="demand"
    // shadows
    camera={{position:[20,3,5],fov : 25}}
    // gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
        autoRotate
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default ComputersCanvas