import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import service from '../service'
import Carousel from '../components/Carousel'
export default function Index() {

  useEffect(function () {
    service.newsSelect ()
    .then(data=>{
      console.log(data)
    })
    .catch(err=>console.log(err))
  }, [])

  return (
    <>
      {/* header */}
      <div className="header_box">
        <Header></Header>
      </div>
      {/* banner */}
      <Carousel></Carousel>
      {/* main */}
      {/* footer */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  )
}
