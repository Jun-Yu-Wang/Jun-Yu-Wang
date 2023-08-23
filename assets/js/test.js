
var deltaY = 0;
var scollType = '';
var step = 0;
var timeout = false;
document.addEventListener("wheel", function (e) {
  if (timeout) {
    return;
  }
  var type = e.deLtaY > 0 ? 'down' : 'up';
  if (scollType === type) {
    if (step === 10) {
      window.scrollTo(0, window.scrollY + e.deltaY);
      return;
    }
    deltaY += e.deltaY;
    if (deltaY >= 300) {
      switch (step) {

        case 0:
          // document.querySelector(".raindrop").classList.add('show');
          step = 1;
          scrollToCmtList(getOffset(document.querySelector(".home_box2")).top);
          const rainBox = document.querySelector(".rain_box");
          rainBox.classList.add('show');
          rainBox.classList.add('step4');

          if (rainBox.getAttribute('class')) {
            if (rainBox.className.indexOf('step4') > -1) {
              timeout = true;
              setTimeout(() => {
                timeout = false;
              }, 2500);
            }
          }


          break;
        case 1:
          // document.querySelectorAll("#A2_txt span")[0].classList.add('show')
          step = 5;
          break;
        // case 2:
        //   document.querySelectorAll("#A2_txt span")[1].classList.add('show')
        //   document.querySelector(".rain_box").classList.add('step2');
        //   step = 3
        //   break;
        // case 3:
        //   document.querySelectorAll("#A2_txt span")[2].classList.add('show')
        //   document.querySelector(".rain_box").classList.add('step3');
        //   step = 4
        //   break;
        // case 4:
        //   document.querySelectorAll("#A2_txt span")[3].classList.add('show')
        //   document.querySelector(".rain_box").classList.add('step4');
        //   step = 5
        //   break;
        case 5:
          scrollToCmtList(getOffset(document.querySelector(".home_box3")).top);
          document.querySelector(".home_box3 .txt").classList.add('on')
          step = 6;
          break;
        case 6:
          scrollToCmtList(getOffset(document.querySelector(".home_box4")).top);
          step = 7;
          break;
        case 7:
          scrollToCmtList(getOffset(document.querySelector(".home_box5")).top);
          step = 8;
          break;
        case 8:
          scrollToCmtList(getOffset(document.querySelector(".home_box6")).top);
          step = 9;
          break;
        case 9:
          scrollToCmtList(getOffset(document.querySelector(".home_box7")).top);
          step = 10;
          break;
        default:
          break;
      }

      // if (scrollTop <= dist) {
      //   document.querySelector(".raindrop").classList.add('show');
      // } else {

      // }

      deltaY = 0;
    } else if (deltaY <= -300) {
      scrollToCmtList(0);
      if (0 < step < 5) {
        step = 0;
      } else {
        step--;
      }
      deltaY = 0;
    }
  } else {
    scollType = type;
    deltaY = 0;
  }

  // console.log(e);
  // e.preventDefault();
});

document.addEventListener('click', function () {
  var outerShadow = document.createElement("div");
  outerShadow.className = "outerShadow";
  var element = document.querySelector(".home_box2 .footer");
  element.appendChild(outerShadow);
  setTimeout(() => {
    element.removeChild(outerShadow);
  }, 2500);
});
function scrollToCmtList(e) {
  var now = window.scrollY;
  // let dist = document.querySelector(".home_box2").offsetHeight;
  var avalibleHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (e > avalibleHeight) {
    e = avalibleHeight;
  }
  var step = (e - now) / 10;
  setTimeout(async () => {
    deltaY = 0;
    if (Math.abs(step) <= 1) {
      return window.scrollTo(0, e);
    }
    window.scrollTo(0, now + step);
    await this.scrollToCmtList(e);
  }, 10);
}
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return {
    top: _y,
    left: _x
  };
}


var menu = false;
function menuSwitch() {
  menu = !menu;
  var nav = document.getElementById('nav');
  if (menu) {
    nav.classList.add('on');
  } else {

    nav.classList.remove('on');
  }
}




var home_box6Line = document.querySelectorAll(".home_box6 .content .box .line")
var home_box6P = document.querySelectorAll(".home_box6 .content .box p")
home_boxPosition();
function home_boxPosition() {

  for (let i = 0; i < home_box6P.length; i++) {
    home_box6Line[i].style.height = home_box6P[i].offsetTop - 30 + "px";
    if (i === 0) {
      home_box6Line[i].style.left = home_box6P[i].offsetLeft + 30 + "px";
    } else {
      home_box6Line[i].style.left = home_box6P[i].offsetLeft + home_box6P[i].clientWidth - 30 + "px"
    }
  }
}



const carouselBox = document.querySelector('.carousel_box');
let home_box7CarouselBox = 0;
let home_box7CarouselNumber = 3;
const data = [
  { year: "2016", description: "2016" },
  { year: "2017", description: "2017" },
  { year: "2018", description: "建立3大標準程序" },
  { year: "2019", description: "推動銀髮安逡計畫" },
  { year: "2020", description: "首創地址編碼" },
  { year: "2021", description: "建置大表與官網上線" },
  { year: "2022", description: "2022" }
];
const carouselItem = [];

// console.log(carouselBox.querySelectorAll('div'))


function home_box7Carousel() {
  let number = 0;
  if (carouselBox.clientWidth > 1280) {
    number = 4
  } else if (carouselBox.clientWidth > 990) {
    number = 3
  } else {
    number = 2
  }

  if (home_box7CarouselBox !== number) {
    const removediv = carouselBox.querySelectorAll('div');
    if (removediv) {
      for (let i = 0; i < removediv.length; i++) {
        removediv[i].remove();
      }
    }
    home_box7CarouselBox = number;

    for (let i = 0; i < home_box7CarouselBox; i++) {
      carouselItem[i] = document.createElement('div');
      const num = home_box7CarouselBox - 2;
      if (i === num) {
        carouselItem[i].innerHTML = `
          <span>${data[home_box7CarouselNumber + i - num].year}</span>
          <p>${data[home_box7CarouselNumber + i - num].description}</p>
          <button class="left" onClick="home_box7CarouselSwitch(-1)"><</button>
          <button class="right" onClick="home_box7CarouselSwitch(1)">></button>
        `;
        carouselItem[i].classList.add("active")
      } else {
        carouselItem[i].innerHTML = `
          <span>${data[home_box7CarouselNumber + i - num].year}</span>
          <p>${data[home_box7CarouselNumber + i - num].description}</p>
        `;
      }
      carouselBox.appendChild(carouselItem[i]);
    }
  }
}

function home_box7CarouselSwitch(e) {
  // console.log(e);
  // home_box7CarouselNumber = (home_box7CarouselNumber + e !== 0) ?
  const num = home_box7CarouselNumber + e;
  if (num < 0) {
    home_box7CarouselNumber = data.length
  } else if (num > data.length) {
    home_box7CarouselNumber = 0
  } else {
    home_box7CarouselNumber = num
  }
  console.log(home_box7CarouselNumber);
  const removediv = carouselBox.querySelectorAll('div');
  if (removediv) {
    for (let i = 0; i < removediv.length; i++) {
      removediv[i].remove();
    }
  }

  for (let i = 0; i < home_box7CarouselBox; i++) {
    carouselItem[i] = document.createElement('div');
    const num = home_box7CarouselBox - 2;
    if (i === num) {
      carouselItem[i].innerHTML = `
          <span>${data[home_box7CarouselNumber + i - num].year}</span>
          <p>${data[home_box7CarouselNumber + i - num].description}</p>
          <button class="left" onClick="home_box7CarouselSwitch(-1)"><</button>
          <button class="right" onClick="home_box7CarouselSwitch(1)">></button>
        `;
      carouselItem[i].classList.add("active")
    } else {
      if (home_box7CarouselNumber + i - num >= data.length || home_box7CarouselNumber + i - num < 0) {
        carouselItem[i].innerHTML = "";
      } else {
        carouselItem[i].innerHTML = `
          <span>${data[home_box7CarouselNumber + i - num].year}</span>
          <p>${data[home_box7CarouselNumber + i - num].description}</p>
        `;
      }

    }
    carouselBox.appendChild(carouselItem[i]);
  }
}

home_box7Carousel()
window.onresize = function () {
  home_box7Carousel();
  home_boxPosition();
}