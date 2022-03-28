const colorsArray = ["#FFADE1", "#DDADFF", "#635FDB", "#3772C4", "#115379"];
//색상 총 5개

const newDate = new Date();
const currentDate = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    day: newDate.getDay(),
    hour: newDate.getHours(),
    minute: newDate.getMinutes(),
    second: newDate.getSeconds(),
};
const steps = [
    currentDate.year, 
    currentDate.month,
    currentDate.day, 
    currentDate.hour,
    currentDate.minute,
    currentDate.second,
];

const applicationElement = document.querySelector('div#app');
console.log('applicationElement', applicationElement)
const createDivElement = () =>{
    return document.createElement('div');
};

const createParagraphElement = () => {
    return document.createElement('p');
};

for (let index = 0; index < steps.length; index++) {
   //do smth to each step
    const divElement = createDivElement();
    const paragraphElement = createParagraphElement();
    paragraphElement.innerHTML = steps[index];
    const colorIndex = steps[index] % 4;
    const divElementColor = colorsArray[colorIndex];
    divElement.style.backgroundColor = divElementColor;
    divElement.classList.add("step");
    if(steps[index] % 2 === 0){
        console.log('isthishappening')
        console.log("linear-gradiant("+ divElementColor + ", " + colorsArray[0] + ")")
        console.log(divElement)
        divElement.style.background = "linear-gradient("+ divElementColor + "," + colorsArray[0] + ")"
    };

    applicationElement.appendChild(divElement);
    divElement.appendChild(paragraphElement);
}

//5%2 gives the remainder 1 5나누기2