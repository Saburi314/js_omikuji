'use strict';

{
  const btn = document.getElementById('btn');
  const Count = document.getElementById('Count');

  const daikiti = document.getElementById('daikiti');
  const kiti = document.getElementById('kiti');
  const suekiti = document.getElementById('suekiti');
  const kyou = document.getElementById('kyou');

// 全体
let clickCount = 0;
// 大吉の回数
let daikitiCount = 0;
// 吉の回数
let kitiCount = 0;
// 末吉の回数
let suekitiCount = 0;
// 凶の回数
let kyouCount = 0;

  btn.addEventListener('click', () => {

    let num = Math.random();

    if(num < 0.1){
        btn.textContent = "大吉";
        clickCount++;
        Count.textContent = clickCount;

        daikitiCount++;
        daikiti.textContent = daikitiCount;

    }else if(num <0.4){
        btn.textContent = "吉";
        clickCount++;
        Count.textContent = clickCount;

        kitiCount++;
        kiti.textContent = kitiCount;

    }else if(num <0.7){
        btn.textContent = "末吉";
        clickCount++;
        Count.textContent = clickCount;

        suekitiCount++;
        suekiti.textContent = suekitiCount;
    }else{
        btn.textContent ="凶";
        clickCount++;
        Count.textContent = clickCount;

        kyouCount++;
        kyou.textContent = kyouCount;
    } 


  });



}