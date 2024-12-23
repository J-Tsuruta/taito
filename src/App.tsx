import React from 'react'

import {Camera} from './Camera'
import {PlateauTileset} from './PlateauTileset'
import {Viewer} from './Viewer'
import {Lighting} from "@/src/Lighting";
import {Clock} from "@/src/Clock";
import {PlateauTerrain} from "@/src/PlateauTerrain";
import {OpenStreetMapImagery} from "@/src/OpenStreetMapImagely";

export const App: React.FC = () => {
  return (
    <Viewer>
      <Camera/>
      <Clock/>
      <Lighting/>
      <PlateauTerrain />
      <OpenStreetMapImagery/>
      {/*<PlateauTileset path='bldg/13100_tokyo/13101_chiyoda-ku/notexture'/>*/}
      {/*<PlateauTileset path='bldg/13100_tokyo/13102_chuo-ku/notexture'/>*/}
      <PlateauTileset path='bldg/13100_tokyo/13106_taito-ku/notexture'/>
    </Viewer>
  )
}