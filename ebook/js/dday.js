var now = new Date();
var firstDay = new Date("2022-09-10");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
document.querySelector("#accent").innerText = passedDay + "일";

function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}
//100일
calcDate(100);
//200일
calcDate(200);
//365일
calcDate(365);
//500일
calcDate(500);