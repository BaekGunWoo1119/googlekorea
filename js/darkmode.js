var tog = document.querySelector("#btn1");
tog.onclick = function() {
    let tag = document.querySelectorAll("p, h2, a");
    let all = document.querySelector("body");
    let input = document.querySelector("input");
    let login = document.querySelector(".login");
    let wrap = document.querySelector(".wrap");
    let shopping = document.querySelector(".shp_list");
    if(tog.className == "dark") {
        tog.innerHTML = "라이트 모드로 보기";
        tog.className = "white";
        all.style.backgroundColor = "black";
        input.style.backgroundColor ="gray";
        login.style.backgroundColor ="gray";
        wrap.style.backgroundColor ="gray";
        shopping.style.backgroundColor ="gray";
        for(var i = 0; i < tag.length; i++) {
            tag[i].style.color = "white";
        }                    
    } else {
        tog.innerHTML = "다크 모드로 보기";
        tog.className = "dark";
        all.style.backgroundColor = "white";
        input.style.backgroundColor ="white";
        login.style.backgroundColor ="rgb(199, 199, 199)";
        wrap.style.backgroundColor ="white";
        shopping.style.backgroundColor ="white";
        for(var i = 0; i < tag.length; i++) {
            tag[i].style.color = "black";
        }
    }
}

// var tog2 = document.querySelector("#btn2");
// tog2.onclick = function() {
//     let tag2 = document.querySelectorAll("p, h2, a");
//     if(tog2.className == "name") {
//         tog2.innerHTML = "내용 보기";
//         tog2.className = "text";
//         tag2[1].innerHTML = "자바스크립트(JAVASCRIPT)";
//         tag2[2].style.display = 'none';
//         }                    
//     else {
//         tog2.innerHTML = "이름 보기";
//         tog2.className = "name";
//         tag2[1].innerHTML = "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 사이드 네트워크 프로그래밍에도 사용되고 있다";
//         tag2[2].style.display = 'inline';
//     }
// }