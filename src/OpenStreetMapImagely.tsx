import { OpenStreetMapImageryProvider } from 'cesium'
import React, { useContext, useEffect } from 'react'

import { ViewerContext } from './Viewer'

export interface OpenStreetMapImageryProps
  extends Pick<
    OpenStreetMapImageryProvider.ConstructorOptions,
    'url' | 'credit'
  > {}

export const OpenStreetMapImagery: React.FC<OpenStreetMapImageryProps> = ({
                                                              url,
                                                              credit
                                                            }) => {
  const viewer = useContext(ViewerContext)
  useEffect(() => {
    if (viewer?.isDestroyed() !== false) {
      return
    }
    const imageryLayer = viewer.imageryLayers.addImageryProvider(
      new OpenStreetMapImageryProvider({
        url,
        credit
      })
    )
    return () => {
      if (!viewer.isDestroyed()) {
        viewer.imageryLayers.remove(imageryLayer)
      }
    }
  }, [url, credit, viewer])

  return null
}