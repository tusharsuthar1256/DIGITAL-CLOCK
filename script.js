const secondhand = document.querySelector(".second-hand");
const minutehand = document.querySelector(".minute-hand");
const hourhand = document.querySelector(".hour-hand");

function setdata(){
    const now = new Date();

    const seconds = now.getSeconds();
    const seconddeg = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = `rotate(${seconddeg}deg)`;

    const minutes = now.getMinutes();
    const minutedeg = ((minutes / 60) * 360) + 90;
    minutehand.style.transform = `rotate(${minutedeg}deg)`;
    
    const hours = now.getHours();
    const hoursdeg = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursdeg}deg)`;
}

setInterval(setdata,1000);