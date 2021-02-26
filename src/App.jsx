// Three.js
// import { Canvas } from "react-three-fiber"
import { Controls } from "react-three-gui"
import Scene from "./SceneSetup/Scene"

import React, {Suspense} from "react"
import { EffectComposer } from '@react-three/postprocessing'

// Pages
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
      <Controls.Provider>
        <Controls.Canvas className="webgl-canvas">
          <Scene />

          <Suspense fallback={null}>
            <EffectComposer multisampling={4} />
          </Suspense>
        </Controls.Canvas>
        {/*<Controls />*/}
        
      </Controls.Provider>
      <Home />
    </>
  );
}

export default App;
