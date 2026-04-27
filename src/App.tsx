import { Canvas } from '@react-three/fiber'
import './App.css'
import Panorama from './components/Panorama'

function App() {
  return (
    <div className='w-screen h-screen'>
      <Canvas camera={{fov: 75, position: [0, 0, 0.1]}}>
        <Panorama/>
      </Canvas>
    </div>
  )
}

export default App
