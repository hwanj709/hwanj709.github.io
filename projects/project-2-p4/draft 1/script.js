function selectColor(getColor){
    let bg = document.querySelector('.bg');
    let colorChange = getColor.value;
    bg.style.background = colorChange;
}