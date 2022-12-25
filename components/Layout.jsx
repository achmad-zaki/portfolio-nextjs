import React from 'react'
import img1 from '../public/images/Eclipse.png'
import img2 from '../public/images/Eclipse 2.png'
import img3 from '../public/images/Pill-Blue-Glossy.png'
import img4 from '../public/images/SuperToroid-Yellow-Glossy.png'
import Image from 'next/image'
import Head from 'next/head'

export default function Layout(props) {
  return (
    <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <div className='min-h-screen relative'>
            <div className="absolute top-0 left-0 w-5/6 md:w-1/2">
                <Image
                src={img1}
                alt="image"
                priority
                />
            </div>
            <div className="absolute bottom-0 right-0">
                <Image
                src={img2}
                width={300}
                alt="image"
                />
            </div>
            <div className="absolute inset-y-72">
                <Image
                    src={img3}
                    width={120}
                    alt="image"
                />
                </div>
                <div className="absolute bottom-5 right-0 w-1/4 md:w-1/6">
                <Image
                    src={img4}
                    alt="image"
                />
            </div>
            {props.children}
        </div>
    </>
  )
}
