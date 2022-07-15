import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Carousel() {

  let [adList, setAdList] = useState([])
  let [curAd, setcurAd] = useState(0)
  useEffect(function () {
    let adList = [
      { aid: 10, pic: '/images/banner_01.jpg', href: '/product?pid=3' },
      { aid: 13, pic: '/images/banner_02.jpg', href: '/product?pid=4' },
      { aid: 15, pic: '/images/banner_03.jpg', href: '/product?pid=6' },
      { aid: 17, pic: '/images/banner_04.jpg', href: '/product?pid=7' }
    ]
    setAdList(adList)
  }, [])

  useEffect(function () {
    if (adList.length > 0) {
      let i = 0
      setInterval(() => {
        i++
        i = i >= adList.length ? 0 : i
        setcurAd(i)
      }, 2000)
    }
  }, [adList])


  function prev() {
    let i = curAd - 1
    i = i < 0 ? adList.length - 1 : i
    setcurAd(i)
  }
  function next() {
    let i = curAd + 1
    i = i >= adList.length ? 0 : i
    setcurAd(i)
  }
  return (
    <div className="banner">
      {/* 练习：编写banner的html和css*/}
      {/* 图片列表*/}
      <ul>
        {adList.map((ad, i) => (
          <li
            key={ad.aid}
            style={{
              background: `url(${ad.pic}) center 0 no-repeat`,
              display: i === curAd ? "block" : "none",
              zIndex: i === curAd ? 20 : 10,
            }}>
            <Link to={ad.href} className="link"></Link></li>
        ))}
        {/* <li style="background: url(images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_02.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_03.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li>
        <li style="background: url(images/banner_04.jpg) center 0 no-repeat;"><a href="#" className="link"></a></li> */}
      </ul>
      {/* 左右箭头*/}
      <span className="cut prev"
        onClick={prev}></span>
      <span className="cut next"
        onClick={next}
      ></span>
      {/* 小圆点指示器*/}
      <div className="indicator">
        {adList.map((ad, i) => (
          <a
            key={i}
            href="/#" className={i === curAd ? "cur" : undefined}
            onClick={() => setcurAd(i)}
          ></a>
        ))}
        {/* <a href=""></a><a href=""></a><a href=""></a> */}
      </div>
    </div>
  )
}
