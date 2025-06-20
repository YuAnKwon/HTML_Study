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
const introImg = document.getElementById("introImg");
function changeImg(){
    if(++toggle % 2==0){
        introImg.src="img/white_puppy.jpg";
    } else{
        introImg.src="img/shin_chan.jpg";
    }
}

// 음식 사진 클릭시 scale
const img = document.querySelectorAll(".recipe img");
for(let i=0; i<img.length; i++){
    img[i].addEventListener("click", function(){
        let isScaled = img[i].style.transform == "scale(1.7)";
        img[i].style.transform = isScaled ? "scale(1)" : "scale(1.7)";
    });
    
}

// contact 문자 회전
const rotate = document.getElementById("rotate");
function rotateString(){
    const text = rotate.textContent;
    const firstChar = text[0];
    const rotatedText = text.slice(1) + firstChar;
    rotate.textContent = rotatedText;
};
setInterval(rotateString, 500);

// 마우스 따라다니는 사진
const image = document.getElementById("followMouse");
document.onmousemove = updateImage;

function updateImage(event){
    const X = event.clientX;
    const Y = event.clientY;
    image.style.transform = `translate(${X}px, ${Y}px)`;
}