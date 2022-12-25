import Head from 'next/head'
import Image from 'next/image'
import { HeroSection } from '../components/HeroSection'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout title='Dashboard'>
        <HeroSection/>
      </Layout>
    </>
  )
}
