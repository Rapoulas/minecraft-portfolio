import { Canvas } from '@react-three/fiber'
import './App.css'
import Panorama from './components/Panorama'
import { useState } from 'react'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='w-screen h-screen'>
      <Canvas camera={{fov: 75, position: [0, 0, 0.1]}}>
        <Panorama/>
      </Canvas>
      <img 
        src="title.png" 
        alt="Title"
        onLoad={() => setLoaded(true)} 
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-1/3 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}/>
    </div>
  )
}

export default App
