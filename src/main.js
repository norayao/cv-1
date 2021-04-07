
let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let str = `
/* 你好！
 * 下方即将演示如何生成一个太极图案。
 * 首先，生成一个方形 div
 */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
 * 然后将它变为圆形
 */
#div1 {
    border-radius: 50%
}
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*
 * 易有太极，是生两仪。
 * 画两条阴阳鱼
 */
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 给阴阳鱼加上眼睛
 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    margin-left: -50px;

    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*
 * 最后，让它转起来
 */
#div1 {
    animation: rotate 1s linear infinite;
    -webkit-animation: rotate 1s linear infinite; /* Safari 和 Chrome */
}
@keyframes rotate {
  from { transform: rotate(0deg) }
  to   { transform: rotate(360deg)}
}


`;

let n = 0;
let display = '';

let step = () =>{
    setTimeout(()=>{
       if (n < str.length){
           // 替换换行符与空格
           if(str[n] === "\n"){
               display += "<br>";
           }
           else if(str[n] === " "){
               display += "&nbsp";
           }
           else{
               display += str[n];
           }
           // 显示
           demo.innerHTML = display;
           style.innerHTML = str.substring(0,n);

           // 滚动条自动拉至底端
           window.scroll(0,99999);
           demo.scroll(0,99999);
           n += 1;
           step();
       }
    },5);
};

step();