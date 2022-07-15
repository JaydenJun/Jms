import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  let [userName,setUserName]=useState("")
  useEffect(function(){
    let n=sessionStorage['userName']
    if(n){
      setUserName(n)
    }
  },[])

function logout(){
  delete sessionStorage['userName']
  setUserName("")
}

  return (
    <>
    <header className="header container">
  <h1 className="logo"><Link to="/" className="link"></Link></h1>
  <div className="h_con">
    <ul className="clearfloat">
      <li className="phone">4000-585-116</li>
      <li><a href="#">中文</a></li>
      <li><em>|</em></li>
      <li><a href="#">English</a></li>
      <li><a href="#" className="weixin"></a></li>
      <li><a href="#" className="weibo"></a></li>

      {
      userName?
      (<>
        <li className="top_user"><Link to="/usercenter">{userName}</Link></li>
        <li className="top_quit"><a href="#" onClick={logout}>退出</a></li>
      </>)
      :
      (<>
       <li><a href="login.html" className="h_login">登录</a></li>
       <li><em>|</em></li>
       <li><a href="register.html" className="h_register">注册</a></li>
      </>)}
     
    </ul>
    <div className="search clearfloat">
      <button type="button"></button>
      <input type="text"/>
    </div>
  </div>
</header>
{/*nav*/}
<nav className="navbar">
  <div className="container">
    <div className="nav">
      <ul>
        <li><Link to=""><span className="icon_home"></span>首页</Link></li>
        <li><Link to="">关于净美仕</Link></li>
        <li><Link to="">公司动态</Link></li>
        <li className="nav_pd">
          <a href="product.html">产品中心<span className="icon_pd"></span></a>
          <div className="pd_dropdown">
            <a href="product.html?type=1">净美仕净化器</a>
            <a href="product.html?type=2">净美仕滤网</a>
          </div>
        </li>
        <li><a href="contact.html">联系我们</a></li>
      </ul>
    </div>
    <div className="s_cart">
      <a href="cart.html">
        <span className="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span className="icon_sj"></span>
      </a>
      <div className="cart_dropdown">
        {/*<h3>您的购物车为空~</h3>*/}
        <ul>
          {/*<li>*/}
            {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
            {/*<div>*/}
              {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
            {/*</div>*/}
            {/*<strong>¥1599.00</strong>*/}
            {/*<em></em>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
            {/*<div>*/}
              {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
            {/*</div>*/}
            {/*<strong>¥1599.00</strong>*/}
            {/*<em></em>*/}
          {/*</li>*/}
        </ul>
        <div className="cd_js clearfloat">
          <span>共计：<strong>0.00</strong></span>
          <a href="#">结算</a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
