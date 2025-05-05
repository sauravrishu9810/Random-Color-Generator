

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h2=document.querySelector('h2');
    let randomColor=getRandomcolor();
    h2.innerText=randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;
    console.log("random color generated");
})

function getRandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color=`rgb(${red} ${green} ${blue})`
    return color;

}