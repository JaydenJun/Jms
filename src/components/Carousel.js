import React, { useEffect, useState } from 'react'

export default function Carousel() {

  let [adList, setAdList] = useState([])
  useEffect(function () {
    let adList = [
      {aid:10,pic:'/images/banner_01.jpg',href:'/product?pid=3'},
      {aid:13,pic:'/images/banner_02.jpg',href:'/product?pid=4'},
      {aid:15,pic:'/images/banner_03.jpg',href:'/product?pid=6'},
      {aid:17,pic:'/images/banner_04.jpg',href:'/product?pid=7'}
    ]
    setAdList(adList)
  }, [])
  return (
    <div className="banner">
      {/* 练习：编写banner的html和css*/}
      {/* 图片列表*/}
      <ul>
        {adList.map((ad,i)=>(
            <li
            key={ad.aid}
            style={{background: "url(images/banner_02.jpg) center 0 no-repeat",
            display:"block",zIndex:"20"}}><a href="#" className="link"></a></li>
        ))}
        {/* <li style="background: url(images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_02.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_03.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_04.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li> */}
      </ul>
      {/* 左右箭头*/}
      <span className="cut prev"></span>
      <span className="cut next"></span>
      {/* 小圆点指示器*/}
      <div className="indicator">
        <a href="" className="cur"></a><a href=""></a><a href=""></a><a href=""></a>
      </div>
    </div>
  )
}
