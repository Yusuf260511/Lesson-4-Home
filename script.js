let enterbtn = document.getElementById('enterbtn');
let nump = document.getElementById("nump");
let color = document.getElementById("selcolor");
let numbtn1 = document.getElementById("numbtn1");
let numbtn2 = document.getElementById("numbtn2");

enterbtn.addEventListener("click", (event) => {
    event.preventDefault();
    let number = document.querySelector("input").value;
    nump.textContent = `${number}`;

    if (isNaN(number)) {
        nump.textContent = "Incorrect";
    } else {
        nump.textContent = number;
    }
});

numbtn1.addEventListener("click", () => {
    let currentNum = parseInt(nump.textContent);
    if (isNaN(currentNum)) {
        nump.textContent = "Incorrect";
    } else {
        nump.textContent = currentNum - 1;
    }

    numbtn1.style.backgroundColor = "red";

    setTimeout(() => {
        numbtn1.style.backgroundColor = "";
    }, 200);
});

numbtn2.addEventListener("click", () => {
    let currentNum = parseInt(nump.textContent);
    if (isNaN(currentNum)) {
        nump.textContent = "Incorrect";
    } else {
        nump.textContent = currentNum + 1;
    }

    numbtn2.style.backgroundColor = "green";

    setTimeout(() => {
        numbtn2.style.backgroundColor = "";
    }, 200);
});


color.addEventListener("input", () => {
    let clcolor = color.value;
    nump.style.color = clcolor;
});