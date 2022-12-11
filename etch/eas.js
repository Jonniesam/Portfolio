const container = document.getElementById("container");
const cell = document.createElement('div');
const rgb_button = document.getElementById('rgb');
const normal_button = document.getElementById('normal');
const clear_button = document.getElementById('clear');
const slider = document.getElementById('myRange');
const output = document.getElementById('value');

output.textContent = slider.value;

slider.oninput = function slide () {
    container.innerHTML = "";
    grid(output.textContent = this.value);
}


function load(size) {
    let gridSize = (size * size);
        let containerSize = 500
        let cellPixel = Math.sqrt(((containerSize * containerSize)/ gridSize)) - 2
    for(let i = 1; i <= gridSize; i++){
        const cell = document.createElement('div');
        cell.style.border = "solid";
        cell.style.borderWidth = "1px";
        cell.style.backgroundColor = "white";
        cell.id ="cell";
        cell.style.width = `${cellPixel}px`;
        cell.style.height = `${cellPixel}px`;
        container.appendChild(cell); 
}
};


function grid(size) {
    if(size === undefined){
        size = 16;
        load(size);
    } else {
        load(size);
    } 
}
grid();


let pressedMouse = false;
container.addEventListener("mouseup", function(e){
    pressedMouse=false;
})

function grey(){
    container.addEventListener('mousedown', function (e) {
    pressedMouse=true;
    e.target.style.backgroundColor = "#293232";
    container.addEventListener('mousemove', function (e) {
        if(pressedMouse===true){
    e.target.style.backgroundColor = "#293232";

        }
    });
    });
}

grey();

normal_button.addEventListener('click', function () {
    grey();
    })



rgb_button.addEventListener('click', function () {
    container.addEventListener('mousedown', function (e) {
        pressedMouse=true;
        const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            let rgb = `rgb(${r}, ${g}, ${b})`;
            e.target.style.backgroundColor = rgb;
        container.addEventListener('mousemove', function (e) {
            if(pressedMouse===true){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            let rgb = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = rgb;
            }
        });
        })
    })

    clear_button.addEventListener('click', function () {
        container.innerHTML = "";
        grid(slider.value);
        output.textContent = slider.value;
    })