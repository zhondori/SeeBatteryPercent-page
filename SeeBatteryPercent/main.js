function width(){
    const width = screen.availWidth;
    document.getElementById("result").textContent = width;
}
function height() {
    const height = screen.availHeight;
    document.getElementById("result").innerHTML = height;
}
let bt = 0;

setInterval(()=>{
    navigator.getBattery().then(function(data){
        bt = data.level *100;
        document.querySelector(".line").style.height = `${bt}%`;
        document.querySelector(".percentBattery").innerHTML = `${bt.toFixed(0)}%`;
        let box = document.querySelector(".box");
        let about = document.querySelector(".about");
        let percent = document.querySelector(".percent");
        if(bt > 25 && bt < 60){
            box.style.backgroundColor = "#5767D3";
            percent.classList.add("normal");
            about.innerHTML = "Sizning qurilmangiz quvvati O\'rtacha";
        }else if(bt > 60  && bt < 100){
            box.style.backgroundColor = "springgreen";
            percent.classList.remove("normal");
            percent.classList.add("good");
            about.innerHTML = "Sizning qurilmangiz quvvati Juda Yaxshi";
        }else if(bt < 25){
            box.style.backgroundColor = "crimson";
            box.style.borderBottom = "2px solid crimson";
            percent.classList.remove("normal");
            percent.classList.remove("good");
            percent.classList.add("bad");
            about.innerHTML = "Sizning qurilmangiz quvvati kam";
        }
    })
},1000)