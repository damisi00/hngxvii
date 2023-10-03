// import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Canvas>
     <mesh>
      
     </mesh>
    </Canvas>
   
      <button  className='tl'>top-left</button>

      <button className='tr'>top-right</button>

      <button className='centre'>center</button>

      <button className='bl'>bottom-left</button>
      <button type="button" className='br'>bottom-right</button>
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
      
      
    </>
  )
}

export default App
