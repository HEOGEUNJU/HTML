//자바스크립트 배열은 다른 타입을 하나의 배열에 넣을 수 있는 특징

//리터럴 방식으로 배열 생성


function f_literal() {
    //서로 다른 타입의 값을 하나의 배열에 넣을 수 있는 특징
    var arr = ["사과", "배", 1, 23.4, true];
    // for(a in arr){
    //     document.write(arr[a] + "<br>");
    // }
    // var result = "";//담아낼 공간
    // for (var i = 0; i < arr.length; i++) {
    //     result += arr[i] + "<br>"
    // }
    // document.querySelector('input[type=text').value = arr[1];
    // document.write(result);
    // document.querySelector("#d1").innerHTML = result;
    print(arr, '#d1');
}

function f_new() {
    var arr2 = new Array("참외", "자두", "수박", "파인애플");
    // for (var i = 0; i < arr2.length; i++) {
    //     result += arr2[i] + "<br>"
    // }
    // document.querySelector("#d2").innerHTML = result;
    print(arr2, '#d2');
}

function f_new2() {
    var arr3 = new Array();
    arr3[0] = "망고";
    arr3[1] = "체리";
    arr3[2] = "메론";
    arr3[3] = "포도";
    print(arr3, '#d3');
    // for (var i = 0; i < arr3.length; i++) {
    //     result += arr3[i] + "<br>"
    // }
    // document.querySelector("#d3").innerHTML = result;
}

//공통으로 사용되는 코드를 함수처리해서 공통으로 사용합니다.
function print(p_arr, p_posit) {
    var result = "";//담아낼 공간
    for (var i = 0; i < p_arr.length; i++) {
        result += p_arr[i] + "<br>"
    }
    document.querySelector(p_posit).innerHTML = result;
}


