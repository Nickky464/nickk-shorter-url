// Variable
var URL
// parameter get
const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const short = URLParams.get("short");
// console.log(short);
if (short == 'cmucamtprogram') {
  URL = "https://course.mytcas.com/programs/10040121220401E"
} else if (short == 'cmucamtcuri') {
  URL = "https://cmu.ac.th/th/Faculty/course_detail/98bbdc11-3843-4aba-89be-cb76e8a6d6b0"
} else if (short == "cmuhistory") {
  URL = "https://cmu.ac.th/th/cmu/history"
} else {
  URL = "none"
}

// Timer
function Timer() {
  var second = 3;
  var timePassed = 0;
  x = setInterval(() => {
    let times = second - (timePassed += 1);
    document.getElementById("countdown").innerHTML = times + "<span>s</span>";
    if (times == 0) {
      clearInterval(x);
      if (URL =="none") {
        document.getElementById("countdown").innerHTML = "ไม่สามารถเปลียนเส้นทางได้ โปรดเช็ค URL ให้ถูกต้อง"
      } else {
      document.getElementById("countdown").innerHTML = "กำลังเปลี่ยนเส้นทาง";
      window.location.href = URL;
    }
    }
  }, 1000);
}
Timer();

// Change page button
function ChangeButton() {
  onclick = () => {
    window.location.href = URL;
  };
}
ChangeButton();
console.log(ChangeButton);
