
const coloredElement = document.getElementById("colored-element");
coloredElement.style.color = "black";

const node = document.createElement("li");
const textnode = document.createTextNode("Appending Child");
node.appendChild(textnode);
document.getElementById("parent-element").appendChild(node);

const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"];
forLoopArray.forEach(forLoopArray => console.log(forLoopArray));

document.getElementById("event-listener-button").addEventListener("click", string)
function string() {
    console.log("Clicked");
}

