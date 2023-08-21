/***
    * 监听滚动事件，判断滚动方向
    * 
 ***/
// var Before_scollH = 0;
// let show = false;

// function disableScroll() {
//   // 获取当前滚动位置
//   var scrollTop =
//     window.pageYOffset || document.documentElement.scrollTop;
//   // var scrollLeft =
//   //   window.pageXOffset || document.documentElement.scrollLeft;

//   window.onscroll = function (e) {
//     let scrollY = this.scrollY;
//     // window.scrollTo(0, scrollTop);
//     console.log(scrollTop, scrollY);
//   };
// }

// window.addEventListener("scroll", (e) => {
//   var After_scollH = window.pageYOffset || document.documentElement.scrollTop;
//   let avalibleHeight = document.querySelector(".home_box2").offsetHeight;

//   let txt = document.querySelectorAll("#A2_txt span")

//   var differH = After_scollH - Before_scollH;
//   if (differH == 0) {
//     return false;
//   }
//   var scollType = differH > 0 ? 'down' : 'up';

//   console.log("type", Before_scollH, After_scollH, scollType);

//   // if (scollType==='down') {
//   //   if (After_scollH < avalibleHeight){

//   //   }
//   // }

//   if (differH > 0 && After_scollH < avalibleHeight) {
//     scrollToCmtList();
//   } else if (differH < 0 && After_scollH < avalibleHeight) {
//     window.scrollTo(0, 0);
//     document.querySelector(".raindrop").classList.remove('show');
//     show = false;
//   }

//   if (show === true) {

//   }

//   Before_scollH = After_scollH;
// })

// window.scrollTo(0, 0)
// scrollToCmtList(getOffset(document.querySelector(".home_box4")).top)



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
          document.querySelector(".rain_box").classList.add('show');
          document.querySelector(".rain_box").classList.add('step4');
          timeout = true;
          setTimeout(() => {
            timeout = false;
          }, 2500);
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
// window.addEventListener("keydown", function (e) {
//   if (e.key == "ArrowDown" || e.key == "ArrowUp") {
//     e.preventDefault();
//   }
// })

