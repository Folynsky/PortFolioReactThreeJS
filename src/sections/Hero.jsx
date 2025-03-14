import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
// import { maxMipLevel } from 'three/src/nodes/TSL.js'
import { calculateSizes } from '../constants'

const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }
    // })
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='min-h-screen border-2 border-blue-400 flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, Im Kevin <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products and brands</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}

            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>

                <PerspectiveCamera makeDefault position={[0,0,30]} />
                <HackerRoom 
                //scale={0.07} 
                position={sizes.deskPosition} 
                rotation = {[0, -Math.PI, 0]}
                scale = {sizes.deskScale}
                //scale={[controls.positionX, controls.positionY, controls.positionZ]}


                />
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>

            </Canvas>
        </div>
    </section>
  )
}

export default Hero