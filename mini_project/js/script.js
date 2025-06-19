// header 현재 시각 출력
function clock(){
    let today = new Date();

    let h = ('0' + today.getHours()).slice(-2); 
    let m = ('0' + today.getMinutes()).slice(-2);
    let s = ('0' + today.getSeconds()).slice(-2); 

    document.getElementById("nowDate").innerHTML = `${h}:${m}:${s}`;
}
setInterval(clock,1000); //1초 주기로 실행

// 프로필 사진 클릭시 번갈아 출력
let toggle = 1;
function changeImg(){
    if(++toggle % 2==0){
        document.getElementById("introImg").src="img/white_puppy.jpg";
    } else{
        document.getElementById("introImg").src="img/shin_chan.jpg";
    }
}

// 음식 사진시 scale
let img = document.querySelectorAll(".recipe img");
for(let i=0; i<imgs.length; i++){
    img = addEventListener("click", function()=>)
}

// contact 문자 회전
const rotate = document.getElementById("rotate");
function rotateString(){
    const text = rotate.textContent;
    const lastChar = text[text.length -1];
    const rotatedText = lastChar+ text.slice(0, text.length-1);
    rotate.textContent = rotatedText;
};
setInterval(rotateString, 500);

//mousemove
