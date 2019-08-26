 //1~100以内的质数；
//  for(var i=2;i<100;i++){
//      var flag=true;
//      for(var j=2;j<i;j++){
//          if(i%j==0){
//              flag=false;
//              j=i;
//          }
//      }
//    if(flag){
//     //    console.log(i);
//        document.write(i+",");
//    }
//  }
//  document.write("<br>");
 //2,打印到三角形；
//   for(var i=1;i<=4;i++){
//       for(var k=1;k<=(4-i);k++){

//       }
//   }
//   for(var i = 1;i <= 4;i++){
//         for(var k = 1;k <=(4-i);k++){
//             document.write("k");
//         }for(var j = 1;j <= i;j++){
//             document.write("y")
//         }
//         document.write("<br>")
//     }

//     for(var i=0;i<4;i++){
//             for(var j=4;j>i;j--){
//                document.write("p"); 
//             }
//             for(var k=0;k<2*i+1;k++){
//                document.writeln("*");
//             }
//             document.write("</br>")
//          }

         
var n=document.getElementById('n');
var m=document.getElementById('m');
var d=document.getElementById('d');
var mo=document.getElementById('mo');
var shi=document.getElementById('shi');
var feng=document.getElementById('feng');
var s=document.getElementById('s');
console.log(n);
function time(){
  var date=new Date();
  var n1=date.getFullYear();
  var m1=date.getMonth()+1;
  var d1=date.getDate();
  var xing=date.getDay();
  var h=date.getHours();
  var fen=date.getMinutes();
  var s1=date.getSeconds();
  n.innerHTML=n1;
  m.innerHTML=m1;
  d.innerHTML=d1;
  mo.innerHTML=obj[xing];
  shi.innerHTML=h;
  feng.innerHTML=fen;
  s.innerHTML=s1;
}
var obj={
1:'一',
2:'二',
3:'三',
4:'四',
5:'五',
6:'六',
7:'日'
}

setInterval(function(){
time();

},1000) 