let service = {
 url: 'http://www.codeboy.com:9999/mfresh/'
}

service.cartDetailAdd = function (uid,pid) {
 let url = service.url + 'data/cart_detail_add.php'
 let options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `uid=${uid}&pid=${pid}`

 }
 return fetch(url, options).then(res => res.json())
}

service.cartDetailDelete = function (did) {
 let url = service.url + 'data/cart_detail_delete.php?did=' + did
 return fetch(url).then(res => res.json())
}

service.cartDetailSelect = function (uid) {
 let url = service.url + 'data/cart_detail_delete.php?uid=' + uid
 return fetch(url).then(res => res.json())
}

service.cartDetailUpdate = function (did, pid, count) {
 let url = service.url + 'data/cart_detail_delete.php'
 let options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `did=${did}&pid=${pid}&count=${count}`
 }
 return fetch(url, options).then(res => res.json())
}

service.newsSelect = function (pageNum) {
 pageNum = pageNum ? pageNum : 1
 let url = service.url + 'data/news_select.php?pageNUm=' + pageNum
 return fetch(url).then(res => res.json())
}

service.newsDetail = function (nid) {
 let url = service.url + 'data/news_detail.php?nid=' + nid
 return fetch(url).then(res => res.json())
}

service.productDetail = function (pid) {
 let url = service.url + 'data/product_detail.php?pid=' + pid
 return fetch(url).then(res => res.json())
}

service.productSelect = function (pageNum = 1, type = 1) {
 // pageNum = pageNum ? pageNum : 1
 let url = `${service.url}data/product_select.php?pageNUm=${pageNum}&type=${type}`
 return fetch(url).then(res => res.json())
}

service.userCheckPhone = function (phone) {
 let url = service.url + 'data/user_check_phone.php?phone=' + phone
 return fetch(url).then(res => res.json())
}

service.userCheckUname = function (uname) {
 let url = service.url + 'data/user_check_uname.php?uname=' + uname
 return fetch(url).then(res => res.json())
}

service.userLogin = function (unameOrPhone, upwd) {
 let url = service.url + 'data/user_Login.php'
 let options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `unameOrPhone=${unameOrPhone}&upwd=${upwd}`
 }
 return fetch(url, options).then(res => res.json())
}

service.userRegister = function (uname, upwd, phone) {
 let url = service.url + 'data/user_register.php'
 let options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `uname=${uname}&upwd=${upwd}&phone=${phone}`
 }
 return fetch(url, options).then(res => res.json())
}


export default service