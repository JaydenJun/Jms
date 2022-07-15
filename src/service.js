let service = {
 url: 'http://www.codeboy.com:9999/mfresh'
}
service.cartDetailAdd = function () {
 let url = service.url + 'data/cart_detail_add.php'
 let options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `uid=${uid}&pid=${pid}`

 }
 return fetch(url, options).then(res => res.json())
}
service.newsSelect = function (pageNum) {
 pageNum = pageNum ? pageNum : 1
 let url = service.url + 'data/news_select.php?pageNUm=' + pageNum
 return fetch(url).then(res => res.json())
}
export default service