var btn = document.querySelector(".sch_btn");
btn.onclick = function() {
    const search = document.getElementById("search").value;
    if(search == null) {
        alert("검색어를 입력하여 주세요!");
    }
    else if(search == undefined){
        alert("검색어를 입력하여 주세요!");
    }
    else if(search == ""){
        alert("검색어를 입력하여 주세요!");
    }
    else {
        window.open('https://www.google.com/search?q=' + search);
    }
}
var input1 = document.getElementById("search");

    input1.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".sch_btn").click();
      }
    });
