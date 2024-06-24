let container = document.getElementById("container"),
    wrapper = document.getElementById("wrapper"),
    icon = document.getElementById("icon"),
    moon = document.getElementById("moon");
    sun = document.getElementById("sun");
    clock = document.getElementById("clock");
    clock2 = document.getElementById("clock2");
    clock3 = document.getElementById("clock3");
    shift = document.getElementById("shift");
    colon = document.getElementById("colon");
    colon2 = document.getElementById("colon2");
    time = document.getElementById("time");
let dark = document.getElementsByClassName("dark");
    

icon.onclick = () => {
    container.classList.toggle(".dark");
    wrapper.classList.toggle(".dark");
    moon.classList.toggle(".dark");
    sun.classList.toggle(".dark");
    time.classList.toggle(".dark");
    clock.classList.toggle(".dark");
    clock2.classList.toggle(".dark2");
    clock3.classList.toggle(".dark3");
    shift.classList.toggle(".shift");
    container.style.backgroundColor = "#24292d";
    wrapper.style.backgroundColor = "black";
    sun.style.backgroundColor = "white";
    sun.style.opacity = "1";
    shift.style.color = "white";
    colon2.style.color = "white";
    colon.style.color = "white";
    clock3.style.backgroundColor = "black";
    }

icon.ondblclick = () => {
    container.classList.toggle(".dark");
    wrapper.classList.toggle(".dark");
    moon.classList.toggle(".dark");
    sun.classList.toggle(".dark");
    clock.classList.toggle(".dark");
    clock2.classList.toggle(".dark2");
    clock3.classList.toggle(".dark3");
    shift.classList.toggle(".shift");
    container.style.backgroundColor = "white";
    wrapper.style.backgroundColor = "antiquewhite";
    sun.style.backgroundColor = "white";
    moon.style.opacity = "1";
    sun.style.opacity = "0";
    shift.style.color = "balck";
    colon2.style.color = "black";
    colon.style.color = "black";
}

setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes();
        seconds = date.getSeconds();
    // console.log(hour);
    
    let d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("time").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = seconds;
}, 1000);
    
