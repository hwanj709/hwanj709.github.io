var pcanvas = document.getElementById("paint-canvas");
pcanvas.width = window.innerWidth / 2; 
pcanvas.height = window.innerHeight / 2;
//  나누기 1.4로 바꾸기
var bound = pcanvas.getBoundingClientRect();
var c = pcanvas.getContext('2d');

var xlim = pcanvas.width;
var ylim = pcanvas.height;

var color = document.getElementById("color");
var radius = document.getElementById("radius");

color.addEventListener('change', (event) => {
    console.log(event.target.value)
    if(event.target.value !== "#FFFFFF") {
        console.log('testing')
        document.body.style.cursor = "crosshair";
    }
})

var mouse = {
    x: 0,
    y: 0,
    down: false
};

var stroke = [];

function draw() {
    c.beginPath();
    c.fillStyle = color.value;
    c.arc(mouse.x, mouse.y, Math.abs(Number(radius.value)),0, Math.PI*2, false);
    c.fill();
    c.closePath();
}

function erase() {
    color.value = "#FFFFFF";
    document.body.style.cursor = "cell";
}

function eraseWhole() {
    c.clearRect(0, 0, xlim, ylim);
}

addEventListener("mousemove", (e) => {
    mouse.x = e.clientX - bound.left;
    mouse.y = e.clientY - bound.top;
    if (mouse.down) {
        stroke.push({
            x: mouse.x,
            y: mouse.y
        })
        draw();
    }
})

addEventListener("mousedown",(e) => {
    mouse.down = true;
})
addEventListener("mouseup",(e) => {
    mouse.down = false;
    for (var i = 0; i< stroke.length-1; i++) {
        c.beginPath();
        c.strokeStyle = color.value;
        c.lineWidth = Number(radius.value)*2;
        c.moveTo(stroke[i].x, stroke[i].y);
        c.lineTo(stroke[i+1].x, stroke[i+1].y);
        c.stroke();
        c.closePath();
        
    }
    stroke = [];
})
function screenshot(){
    html2canvas(document.querySelector("#paint-canvas")).then(canvas => {
        document.body.appendChild(canvas)
        
    });
    alert("Right click on the canvas to save the screenshot!");
    canvas.style = "position: absolute; top:15%; left:11%;";
}
// const screenshot = document.querySelector(".screenshot")
// screenshot.addEventListener('click', e => {

// })


// let myImage=document.getElementById("mainImage");
//     let imageArray=["assets/background2.jpeg","assets/background3.png","assets/background4.webp","assets/image05.jpg"];
//     let imageIndex=0;

//     function randombg(){
//         myImage.setAttribute("src",imageArray[imageIndex]);
//         imageIndex++;
//         if(imageIndex>=imageArray.length){
//             imageIndex=0;
//         }
//         // console.log("is this workiong?");
//     }
//     setInterval(randombg,2000);
    