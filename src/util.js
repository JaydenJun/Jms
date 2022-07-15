export let formatDate = function (num) {
 num = parseInt(num);
 let d = new Date(num);
 let yy = d.getFullYear()
 let mo = d.getMonth() + 1
 mo = mo < 10 ? '0' + mo : mo
 let dd=d.getDate()
 dd=dd<10?'0'+dd:dd
 let hh=d.getHours()
 hh=hh<10?'0'+hh:hh
 let mi=d.getMinutes()
 mi=mi<10?'0'+mi:mi
 return `${yy}-${mo}-${dd}`
  // `${yy}-${mo}-${dd} ${hh}:${mi}`;
}