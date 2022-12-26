var last_id = 0;
var id = 0;

function select_shape() {
    if (last_id != 0) {
        var last_elem = document.getElementById(last_id);
        var class_name = last_elem.className;
        if (class_name == "rectangle") {
            last_elem.style.backgroundColor = "red";
        } else if (class_name == "triangle") {
            last_elem.style.borderColor = "transparent transparent blue transparent";
        } else {
            last_elem.style.backgroundColor = "green";
        }
    }

    last_id = this.id;
    var class_name = this.className;
    if (class_name == "rectangle") {
        this.style.backgroundColor = "yellow";
    } else if (class_name == "triangle") {
        this.style.borderColor = "transparent transparent yellow transparent";
    } else {
        this.style.backgroundColor = "yellow";
    }
    this.style.zIndex = 2;
}



function circle() {
    let numberOfCircle = parseInt(getNumbers());
    for(let i = 0; i < numberOfCircle; i++) {
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.id = ++id;
        item.classList.add("circle");
        
        item.style.height = size + "px";
        item.style.width = size + "px";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of circle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('dblclick', (event) => {
            event.target.remove();
            last_id = 0;
        });

        item.onclick = select_shape;

        document.body.appendChild(item);
    }
}

function rectangle() {
    let numberOfRectangle = parseInt(getNumbers());
    for(let i = 0; i < numberOfRectangle; i++) {  
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.id = ++id;
        item.classList.add("rectangle");
        
        item.style.height = size + "px";
        item.style.width = size + "px";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of rectangle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('dblclick', (event) => {
            event.target.remove();
            last_id = 0;
        });

        item.onclick = select_shape;

        document.body.appendChild(item);
    }
}

function triangle() {
    let numberOfTriangle = parseInt(getNumbers());
    for(let i = 0; i < numberOfTriangle; i++) {
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.id = ++id;
        item.classList.add("triangle");
        
        item.style.height = 0 + "px";
        item.style.width = 0 + "px";
        item.style.borderRight = size + "px solid transparent";
        item.style.borderLeft = size + "px solid transparent";
        item.style.borderBottom = size + "px solid rgba(0, 0, 255, 0.95)";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of triangle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('dblclick', (event) => {
            event.target.remove();
            last_id = 0;
        });

        item.onclick = select_shape;

        document.body.appendChild(item);
    }
}

function getNumbers() {
    return document.getElementById("numbers").value;
}

function getRandomSize() {
    return Math.floor(Math.random() * 400) + 100;
}

function getRandomPosition(of) {
    switch (of) {
        case 'x':
            console.log(window.screen.width)
            return Math.floor(Math.random() * window.screen.width * 0.35);
        case 'y':
            return Math.floor(Math.random() * window.screen.height * 0.35) + 200;
    }
}