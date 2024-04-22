import { Canvas } from '@react-three/fiber'
import {Sky} from "@react-three/drei"
import {Physics} from "@react-three/cannon"
import './App.css'
import { Ground } from "./components/Ground"
import { PLayer } from './components/Player'

function App() {

  return (
    <>
    {/* { <div> Outside canvas</div> } */}
        <Canvas>
          <Sky sumPosition={[100,100,20]} />
          <ambientLight intensity={0.5} />  
          <Physics>
            <PLayer/>
            <Ground/>   
          </Physics> 
        </Canvas>
      
 
     
    </>
  )
}

export default App
