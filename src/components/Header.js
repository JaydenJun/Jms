import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  let [userName, setUserName] = useState("")
  let [searchKeyword, setSearchKeyword] = useState("")
  let searchInput = useRef()
  let nav = useNavigate()
  let {pathname}=useLocation()
  let [showDropdown,setShowDropdown]=useState(false)
  useEffect(function () {
    let n = sessionStorage['userName']
    if (n) {
      setUserName(n)
    }
  }, [])

  function logout() {
    delete sessionStorage['userName']
    setUserName("")
  }

  function search() {
    let kw = searchInput.current.value
    console.log(kw)
    nav('/product')
  }

  return (
    <>
      <header className="header container">
        <h1 className="logo"><Link to="/" className="link"></Link></h1>
        <div className="h_con">
          <ul className="clearfloat">
            <li className="phone">4000-585-116</li>
            <li><a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">中文</a></li>
            <li><em>|</em></li>
            <li><a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">English</a></li>
            <li><a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer" className="weixin"></a></li>
            <li><a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer" className="weibo"></a></li>
            {
              userName ?
                (<>
                  <li className="top_user"><Link to="/usercenter">{userName}</Link></li>
                  <li className="top_quit"><a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer" onClick={logout}>退出</a></li>
                </>)
                :
                (<>
                  <li><Link to="/login" className="h_login">登录</Link></li>
                  <li><em>|</em></li>
                  <li><Link to="/register" className="h_register">注册</Link></li>
                </>)}

          </ul>
          <div className="search clearfloat">
            <button type="button" onClick={search}></button>
            <input
              placeholder='商品搜索'
              ref={searchInput} type="text" defaultValue={searchKeyword} />
          </div>
        </div>
      </header>
      {/*nav*/}
      <nav className="navbar">
        <div className="container">
          <div className="nav">
            <ul>
              <li 
              className={pathname=='/'?'cur':undefined}
              ><Link to="/"><span className="icon_home"></span>首页</Link></li>
              <li
              className={pathname=='/about'?'cur':undefined}
              ><Link to="/about">关于净美仕</Link></li>
              <li
              className={pathname=='/news'?'cur':undefined}
              ><Link to="/news">公司动态</Link></li>
              <li 
              className={pathname=='/product'?'nav_pd cur':'nav_pd'}
              >
                <Link to="/product">产品中心<span className="icon_pd"></span></Link>
                <div className="pd_dropdown">
                  <Link to="/product?type=1">净美仕净化器</Link>
                  <Link to="/product?type=2">净美仕滤网</Link>
                </div>
              </li>
              <li
              className={pathname=='/contact'?'cur':undefined}
              ><Link to="/contact">联系我们</Link></li>
            </ul>
          </div>
          <div className="s_cart" 
          onMouseEnter={()=>setShowDropdown(true)} 
          onMouseLeave={()=>setShowDropdown(false)}>
            <Link to="/cart">
              <span className="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span className="icon_sj"></span>
            </Link>
            <div className="cart_dropdown" 
            style={{display:showDropdown?'block':'none'}}>
              <h3>您的购物车为空~</h3>
              <ul>
                <li>
                <a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>
                <div>
                <span>-</span><input type="text" value="2"/><span>+</span>
                </div>
                <strong>¥1599.00</strong>
                <em></em>
                </li>
                <li>
                <a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>
                <div>
                <span>-</span><input type="text" value="2"/><span>+</span>
                </div>
                <strong>¥1599.00</strong>
                <em></em>
                </li>
              </ul>
              <div className="cd_js clearfloat">
                <span>共计：<strong>0.00</strong></span>
                <a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">结算</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
