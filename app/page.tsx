import Head from 'next/head'
// import styles from 'styles/global.css'
import './styles/Home.css'
import LogoIcon from './Cam.png'
import Image from 'next/image'
import Header from './Headear'
import Footer from './Footer'
import Content from './Content'
import React from 'react'

function page() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Content />
      <Footer />
    </main>
  )
}

export default page

